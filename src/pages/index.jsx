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
  const trackRef = useRef(null);
  const [loopY, setLoopY] = useState(0);
  const [loading, setLoading] = useState(true);
  const [firstOffset, setFirstOffset] = useState(0);
  
  useEffect(() => {
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
      setLoopY(loopYVal);
      requestAnimationFrame(update);
    };
  
    // ✅ wheel (desktop)
    const onWheel = (e) => {
      const deltaY = e.deltaY;
      scrollY += deltaY;
      targetY += deltaY;
      wrapLoop();
    };
  
    // ✅ touch (mobile)
    let startY = 0;
    const onTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };
  
    const onTouchMove = (e) => {
      const touchY = e.touches[0].clientY;
      const deltaY = startY - touchY; // 위로 스와이프하면 양수
      startY = touchY;
      scrollY += deltaY;
      targetY += deltaY;
      wrapLoop();
    };
  
    // ✅ 공통 루프 wrapping (경계 처리)
    const wrapLoop = () => {
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
  
    // 이벤트 등록
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
  
    requestAnimationFrame(update);
  
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);
  
  

  return (
    <>
      <Loading setLoading={setLoading} loading={loading} />
      <Header />
      <main style={{ height: "100vh", overflow: "hidden", position: "relative" }}>
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
