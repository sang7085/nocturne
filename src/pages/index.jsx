import { useEffect, useState, useRef, createContext, useContext } from "react";
import Loading from "@/components/layout/Loading";
import Header from "@/components/layout/Header";
import InfiniteScrollTest from "@/components/sections/InfiniteScrollTest";
import VisualSec from "@/components/sections/VisualSec";
import AchieveSec from "@/components/sections/AchieveSec";
import GallerySec from "@/components/sections/GallerySec";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [loopY, setLoopY] = useState(0);
  const [loading, setLoading] = useState(true);
  const trackRef = useRef(null);
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
      // lerp
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
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  
    return () => {
      window.removeEventListener("wheel", onWheel);
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
          <AchieveSec loading={loading} loopY={loopY} firstOffset={firstOffset} />
          <GallerySec loading={loading} loopY={loopY} />
          <VisualSec loading={loading} loopY={loopY} />
        </div>
      </main>
      {/* <InfiniteScrollTest /> */}
    </>
  );
}
