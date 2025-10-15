import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AchieveSec({ loading, loopY }) {

  useEffect(() => {
    if(!loading) {
      const achieveSec = document.querySelector(".achieve_sec");
      const gap = 400;
      const baseOffset = achieveSec.offsetTop;
      const path = achieveSec.querySelector(".path");
      if (loopY > baseOffset - gap) {
        gsap.to(".left-wall", {xPercent: -100, duration: 1,});
        gsap.to(".right-wall", {xPercent: 100, duration: 1,});
        path.classList.add("path-active");
      }
  }
  }, [loopY]);

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
                <video src="/videos/video-1.mp4" autoPlay loop muted></video>
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