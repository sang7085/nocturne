'use client';

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function VisualSec({ Loading, loopY }) {

    useEffect(() => {
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
        }
      }, []);


      useEffect(() => {
        // scrollTrigger 대용 패럴렉스
        if(!Loading) {
            const baseOffset = document.querySelector(".visual-sec").offsetTop;
            const visualSecH = document.querySelector(".visual-sec").offsetHeight;
            const relativeY = (loopY - visualSecH) * 0.1;
            // console.log(baseOffset, loopY, relativeY);
            if (loopY > baseOffset) {
                gsap.to(".trophy", { y: relativeY });
                gsap.to(".slogan-txt", { y: relativeY });
                console.log("111")
            } else {
                gsap.to(".trophy", { y: relativeY });
                gsap.to(".slogan-txt", { y: relativeY });
                console.log("222")
            }
        }
      }, [loopY]);

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