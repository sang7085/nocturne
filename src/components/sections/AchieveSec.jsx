import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AchieveSec({ Loading, loopY }) {

  useEffect(() => {
    if(!Loading) {
      const gap = 400;
      const baseOffset = document.querySelector(".achieve-sec").offsetTop;
      if (loopY > baseOffset - gap) {
        gsap.to(".left-wall", {xPercent: -100, duration: 1,});
        gsap.to(".right-wall", {xPercent: 100, duration: 1,});
      }
  }
  }, [loopY])

    return(
        <>
          <section className="achieve-sec">
            <div className="inner">
              <div className="achieve-line-wrap short-line">
                <div className="line-wrap">
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