"use client";
import { useEffect, useState, useRef } from "react";
import Loading from "@/components/layout/Loading";
import Header from "@/components/layout/Header";
import VisualSec from "@/components/sections/VisualSec";
import AchieveSec from "@/components/sections/AchieveSec";
import HistorySec from "@/components/sections/HistorySec";
import GallerySec from "@/components/sections/GallerySec";
import MatchesSec from "@/components/sections/MatchesSec";
import SponsorSec from "@/components/sections/SponsorSec";
import ContentSec from "@/components/sections/ContentsSec";
import FooterSec from "@/components/sections/FooterSec";

import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const trackRef = useRef(null);
  const rafId = useRef(null);
  const [loopY, setLoopY] = useState(0);
  const [loading, setLoading] = useState(true);
  const [firstOffset, setFirstOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(null);
  const [galleryProgress, setGalleryProgress] = useState(0);

  // 분기처리
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1279) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // null 일때 useEffect 실행안되게 막기
    if (isMobile === null) return;
    cancelAnimationFrame(rafId.current);
    if (isMobile) {
      // 모바일
      // 모바일 환경에서 가상스크롤 제거
      if (trackRef.current) {
        // gsap.killTweensOf(trackRef.current);
        // gsap.set(trackRef.current, { clearProps: "transform" });
        trackRef.current.style.transform = "none";
      }
      const lenis = new Lenis();
      function raf(time) {
        lenis.raf(time);
        ScrollTrigger.update();
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
      return;
    } else {
      // PC
      const track = trackRef.current;
      const sections = Array.from(track.querySelectorAll("section"));

      // 🟡 높이 계산부를 함수로 분리 (resize 시 재활용 가능)
      const getTotalHeight = () => {
        const heights = sections.slice(1, -1).map((s) => s.offsetHeight);
        return heights.reduce((a, b) => a + b, 0);
      };

      let totalHeight = getTotalHeight(); // 🟡 기존 totalHeight 대신 함수 호출
      const firstCloneHeight = sections[0].offsetHeight;

      let scrollY = firstCloneHeight;
      let targetY = firstCloneHeight;
      let currentY = targetY;
      const ease = 0.05;

      if (sections.length > 0) {
        setFirstOffset(firstCloneHeight);
      }

      const update = () => {
        currentY += (targetY - currentY) * ease;
        const loopYVal = Math.round(
          ((currentY % totalHeight) + totalHeight) % totalHeight
        );
        track.style.transform = `translateY(-${loopYVal}px)`;
        setLoopY(loopYVal);
        rafId.current = requestAnimationFrame(update);
      };

      const onWheel = (e) => {
        scrollY += e.deltaY;
        targetY += e.deltaY;

        if (targetY < 0) {
          targetY += totalHeight;
          currentY += totalHeight;
          scrollY += totalHeight;
        }
        if (targetY > totalHeight) {
          targetY -= totalHeight;
          currentY -= totalHeight;
          scrollY -= totalHeight;
        }
      };

      const handleResize = () => {
        totalHeight = getTotalHeight();
        currentY = firstCloneHeight;
        targetY = firstCloneHeight;
        scrollY = firstCloneHeight;

        if(!isMobile) {
          ScrollTrigger.getAll().forEach((st) => st.kill());
          gsap.globalTimeline.clear();
          if (track) {
            gsap.killTweensOf(track);
            gsap.set(track, { clearProps: "transform" });
            track.style.transform = "none";
          }
        }
      };

      window.addEventListener("wheel", onWheel, { passive: false });
      window.addEventListener("resize", handleResize);
      rafId.current = requestAnimationFrame(update);

      return () => {
        window.removeEventListener("wheel", onWheel);
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(rafId.current);
      };
    }
  }, [isMobile]);

  // floating 텍스트 모션
  useEffect(() => {
    if (galleryProgress > 0 && galleryProgress < 1) {
      gsap.to(".floating_txt2.pc", { zIndex: 9999, opacity: 1, duration: 0.6 });
    } else {
      gsap.to(".floating_txt2.pc", { zIndex: -1, opacity: 0, duration: 0.6 });
    }
  }, [galleryProgress]);

  return (
    <>
      <Loading setLoading={setLoading} loading={loading} />
      <Header />
      <div className="floating_txt2 pc">
        <div className="tit_wrap">
          <h3 className="sub_tit">[moment of nocturne]</h3>
          <h2 className="tit">
            To inspire <br /> the best game in you
          </h2>
        </div>
      </div>
      <main className={isMobile ? "mobile" : "pc"}>
        <div ref={trackRef}>
          {!isMobile && <FooterSec loading={loading} loopY={loopY} />}
          <VisualSec
            loading={loading}
            loopY={loopY}
            firstOffset={firstOffset}
            isMobile={isMobile}
          />
          <AchieveSec loading={loading} loopY={loopY} isMobile={isMobile} />
          <HistorySec loading={loading} loopY={loopY} isMobile={isMobile} />
          <GallerySec
            loading={loading}
            loopY={loopY}
            galleryProgress={setGalleryProgress}
            isMobile={isMobile}
          />
          <MatchesSec loading={loading} loopY={loopY} isMobile={isMobile} />
          <SponsorSec loading={loading} loopY={loopY} isMobile={isMobile} />
          <ContentSec loading={loading} loopY={loopY} isMobile={isMobile} />
          <FooterSec loading={loading} loopY={loopY} />
          {!isMobile && <VisualSec loading={loading} loopY={loopY} />}
        </div>
      </main>
    </>
  );
}
