import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function AchieveSec({ Loading, loopY, isMobile }) {
  const once = useRef(false);
  useEffect(() => {
    if(!Loading) {
      if(isMobile) {
        const achieveSec = document.querySelector(".achieve_sec");
        const path = achieveSec.querySelector(".path");
        gsap.to(".left-wall", {
          xPercent: -100,
          scrollTrigger: {
            trigger: ".achieve_sec",
            start: "top center",
            onUpdate() {
              path.classList.add("path-active");
            }
          }
        });
        gsap.to(".right-wall", {
          xPercent: 100,
          scrollTrigger: {
            trigger: ".achieve_sec",
            start: "top center",
          }
        });
      } else {
          const achieveSec = document.querySelector(".achieve_sec");
          const path = achieveSec.querySelector(".path");
          const gap = 400;
          const reset = 100;
          const baseOffset = achieveSec.offsetTop;
    
          if (loopY > baseOffset - gap && !once.current) {
            gsap.to(".left-wall", {xPercent: -100, duration: 1,});
            gsap.to(".right-wall", {xPercent: 100, duration: 1,});
            path.classList.add("path-active");
            once.current = true;
          }
          
          if (loopY < reset && once.current) {
            gsap.set(".left-wall", {xPercent: 0});
            gsap.set(".right-wall", {xPercent: 0});
            path.classList.remove("path-active");
            once.current = false;
          }
      }
    }
  }, [loopY, isMobile]);

    return(
        <>
          <section className="achieve_sec">
            <div className="inner">
              <div className="achieve-line-wrap short-line">
                <div className="line-wrap path">
                  <div className="icon-line top"></div>
                  <div className="icon-line bottom"></div>
                  <div className="icon-line icon top-left"></div>
                  <div className="icon-line icon top-right"></div>
                  <div className="icon-line icon bottom-left"></div>
                  <div className="icon-line icon bottom-right"></div>
                </div>
              </div>
              <div className="video-wrap">
                <video src="/videos/video-1.mp4" autoPlay loop muted playsinline poster="/images/img-thumb01.png"></video>
                <div className="fake-wall">
                  <div className="wall left-wall"></div>
                  <div className="wall right-wall"></div>
                </div>
              </div>
            </div>
          </section> 
        </>
    )
}