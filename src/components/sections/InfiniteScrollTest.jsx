import { useEffect, useRef } from "react";

export default function InfiniteScrollTest() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const sections = Array.from(track.querySelectorAll(".section"));
    const heights = sections.slice(1, -1).map((s) => s.offsetHeight);
    const totalHeight = heights.reduce((a, b) => a + b, 0);
    const firstCloneHeight = sections[0].offsetHeight;
    
    let targetY = firstCloneHeight; // 목표 위치
    let currentY = targetY;         // 실제 반영되는 위치
    const ease = 0.08;              // 보간 속도 (0.05~0.15 사이 조절)
  
    let rafId;
  
    const update = () => {
      // lerp: currentY가 targetY를 따라가도록
      currentY += (targetY - currentY) * ease;
  
      const loopY = ((currentY % totalHeight) + totalHeight) % totalHeight;
      track.style.transform = `translateY(-${loopY}px)`;
  
      rafId = requestAnimationFrame(update);
      console.log("loopY:", loopY.toFixed(2), "targetY:", targetY.toFixed(2), "currentY:", currentY.toFixed(2));
    };
  
    const onWheel = (e) => {
      targetY += e.deltaY;
  
      // 맨 위로 올라가는 경우
      if (targetY < 0) {
        targetY += totalHeight;
        currentY += totalHeight; // currentY도 보정
      }
  
      // 맨 아래로 내려가는 경우
      if (targetY > totalHeight) {
        targetY -= totalHeight;
        currentY -= totalHeight;
      }
    };
  
    window.addEventListener("wheel", onWheel, { passive: true });
    rafId = requestAnimationFrame(update);
  
    return () => {
      window.removeEventListener("wheel", onWheel);
      cancelAnimationFrame(rafId);
    };
  }, []);
  

  return (
    <div style={{ height: "100vh", overflow: "hidden", position: "relative" }}>
      <div ref={trackRef}>
      <section className="section" style={{ height: "120vh", background: "seagreen" }}>
        Section 3 (clone)
      </section>

      {/* 원본 세트 */}
      <section className="section" style={{ height: "100vh", background: "tomato" }}>
        Section 1
      </section>
      <section className="section" style={{ height: "150vh", background: "skyblue" }}>
        Section 2
      </section>
      <section className="section" style={{ height: "120vh", background: "seagreen" }}>
        Section 3
      </section>

      {/* 맨 아래에 Section1 클론 */}
      <section className="section" style={{ height: "100vh", background: "tomato" }}>
        Section 1 (clone)
      </section>
      </div>
    </div>
  );
}
