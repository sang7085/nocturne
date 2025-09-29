import { useEffect, useState } from "react";
import Loading from "@/components/layout/Loading";
import Header from "@/components/layout/Header";
import VisualSec from "@/components/sections/VisualSec";
import AchieveSec from "@/components/sections/AchieveSec";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const [loading, setLoading] = useState(true);

  const sections = [VisualSec, AchieveSec];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1,
      wheelMultiplier: 1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // useEffect(() => {
  //   ScrollTrigger.create({
  //     trigger: "section:last-child",
  //     start: "top bottom",
  //     onEnter: () => {
  //       const first = document
  //         .querySelector("section:first-child")
  //         .cloneNode(true);
  //       document.querySelector("main").appendChild(first);

  //       // 필요시 오래된 섹션 삭제
  //       const sections = document.querySelectorAll(".section");
  //       if (sections.length > 6) {
  //         sections[1].remove(); // 앞부분 하나 지움
  //       }

  //       ScrollTrigger.refresh(); // 새 DOM 반영
  //     },
  //   });

  //   return () => {
  //     ScrollTrigger.getAll().forEach((st) => st.kill()); // cleanup
  //   };
  // }, []);

  return (
    <>
      <Loading setLoading={setLoading} loading={loading} />
      <Header />
      <main>
        <VisualSec loading={loading} />
        <AchieveSec loading={loading} />
      </main>
    </>
  );
}
