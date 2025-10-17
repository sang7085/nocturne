'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function VisualSec({ Loading, loopY, isMobile }) {
    const once = useRef(null);
    useEffect(() => {
        if (once.current) return;
        gsap.set(".slogan-txt", {
            yPercent: 100,
        });
        gsap.set(".sub-desc span", {
            yPercent: 100,
        });
        gsap.set(".keep-scroll .txt", {
            yPercent: 100,
        });
        gsap.set(".trophy", {
            left: "50%",
            top: "50%",
            xPercent: -50,
            yPercent: -50,
        });
        if(!Loading) {
            // loading timeline
            const tl = gsap.timeline({
                defaults: {
                    ease: "power3.out",
                }
            });
            tl.to(".slogan-txt",{
                yPercent: 0,
                duration: 1,
                delay: 4.2,
              }
            )
            .to(".sub-desc span", {
                yPercent: 0,
                duration: 1,
            }, "-=.8")
            .to(".floating-txt p", {
                clipPath: "inset(0% 0% 0% 0%)",
                duration: 1,
            }, "-=.3")
            .to(".keep-scroll .txt", {
                yPercent: 0,
                duration: 1,
            }, "-=.8");
            once.current = true;
        }
      }, []);


      useEffect(() => {
        if (!Loading) {
          if(isMobile) {

          } else {
            const sec = document.querySelector(".visual-sec");
            const baseOffset = sec.offsetTop;
            const visualSecH = sec.offsetHeight;
            const gap = 400;
        
            if (loopY >= baseOffset && loopY <= baseOffset + visualSecH) {
              const progress = (loopY - baseOffset) / visualSecH;
              const relativeY = progress * 100;
              const relativeY2 = progress * 200;
        
              gsap.to(".trophy", { y: -relativeY, overwrite: "auto" });
              gsap.to(".slogan-txt", { y: relativeY2, overwrite: "auto" });
            } else {
              // 범위 벗어나면 원상복귀
              gsap.to(".trophy", { y: 0, overwrite: "auto" });
              gsap.to(".slogan-txt", { y: 0, overwrite: "auto" });
            }
          }
        }
      }, [loopY, isMobile]);

    return (
        <>
            <section className="visual-sec">
                <div className="slogan"><span className="slogan-txt">LIGHTTHEFIRE</span></div>
                <div className="visual-desc">
                    <div className="sub-desc">
                        <p>
                            <span className="highlight">Fire </span>
                            <span>is Still Mine,</span> <br />
                        </p>
                        <p>
                            <span>that element alone—</span> <br />
                        </p>
                        <p>
                            <span>Without it,</span> <br />
                        </p>
                        <p>
                            <span>I could call no place my own.</span>
                        </p>
                    </div>
                </div>
                <div className="keep-scroll"><p className="txt">KEEP SCROLLING</p></div>
                <div className="floating-txt">
                    <p>Give up pursuing eloquence, </p>
                    <p>unless you can speak as you feel</p>
                </div>
                <div className="trophy">
                    <img src="/images/demo-trophy.png" alt="" />
                </div>
            </section>
        </>
    )
}