import { useEffect, useState, useRef, createContext, useContext } from "react";
import Loading from "@/components/layout/Loading";
import Header from "@/components/layout/Header";
import InfiniteScrollTest from "@/components/sections/InfiniteScrollTest";
import VisualSec from "@/components/sections/VisualSec";
import AchieveSec from "@/components/sections/AchieveSec";
import HistorySec from "@/components/sections/HistorySec";
import GallerySec from "@/components/sections/GallerySec";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  const trackRef = useRef(null);
  const [loopY, setLoopY] = useState(0);
  const [loading, setLoading] = useState(true);
  const [firstOffset, setFirstOffset] = useState(0);
  
  useEffect(() => {
    if (isMobile) {
      alert("모바일입니다");
      return;
    } else {
      alert("PC입니다.");
    }

    const track = trackRef.current;
    const sections = Array.from(track.querySelectorAll("section"));
    const heights = sections.slice(1, -1).map((s) => s.offsetHeight);
    const totalHeight = heights.reduce((a, b) => a + b, 0);
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
      const loopYVal = Math.round(((currentY % totalHeight) + totalHeight) % totalHeight);
      track.style.transform = `translateY(-${loopYVal}px)`;
      setLoopY(loopYVal); // ✅ loopY 업데이트
      requestAnimationFrame(update);
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
  
      ScrollTrigger.update();
    };
  
    window.addEventListener("wheel", onWheel, { passive: true });
    requestAnimationFrame(update);
  
    return () => {
      window.removeEventListener("wheel", onWheel);
    };
  }, []);
  

  return (
    <>
      <Loading setLoading={setLoading} loading={loading} />
      <Header />
      <main className={isMobile ? "main mobile" : "main pc"}>
        <div ref={trackRef}>
          <GallerySec loading={loading} loopY={loopY} />
          <VisualSec loading={loading} loopY={loopY} firstOffset={firstOffset} />
          <AchieveSec loading={loading} loopY={loopY} />
          <HistorySec loading={loading} loopY={loopY} />
          <GallerySec loading={loading} loopY={loopY} />
          <VisualSec loading={loading} loopY={loopY} />
        </div>
      </main>
      {/* <InfiniteScrollTest /> */}
    </>
  );
}
