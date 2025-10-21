import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";


export default function ContentSec({ Loading, loopY }) {
  const once = useRef(false);
  const handleEnter = (e) => {
    const el = e.currentTarget;
    el.classList.remove("active-up", "active-down");
  };

  const handleLeave = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const centerY = rect.top + rect.height / 2;

    if (e.clientY < centerY) {
      el.classList.add("active-up");
    } else {
      el.classList.add("active-down");
    }

  };

  useEffect(() => {
    if(!Loading) {
      const conList = document.querySelectorAll(".content_list");
      const contentSec = document.querySelector(".contents_sec");
      const secTit = contentSec.querySelector(".sec_tit");
      const baseOffset = contentSec.offsetTop;
      const gap = 400;
      const reset = 100;

      if(loopY > baseOffset - gap && !once.current) {
        gsap.to(secTit, {opacity: 1, y: 0});
        once.current = true;
      }
      
      if (loopY < reset && once.current) {
        gsap.set(secTit, {opacity: 0, y: 100});
        once.current = false;
      }
    }
  }, [])

    return(
        <>
          <section className="contents_sec">
            <div className="inner">
              <h3 className="sec_tit">[CONTENTS]</h3>
              <div className="content_wrap">
                <Link href="#" className="content_list" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                  <div className="tit_wrap">
                    <div className="tit">NOTICE</div>
                    <span className="tag">( 10 )</span>
                  </div>
                  <div className="other">
                    <div className="update">LAST</div>
                    <div className="date">2025.01.01</div>
                  </div>
                </Link>
                <Link href="#" className="content_list" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                  <div className="tit_wrap">
                    <div className="tit">YOUTUBE</div>
                    <span className="tag">( 104 )</span>
                  </div>
                  <div className="other">
                    <div className="update">LAST</div>
                    <div className="date">2025.12.31</div>
                  </div>
                </Link>
                <Link href="#" className="content_list" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                  <div className="tit_wrap">
                    <div className="tit">INSTAGRAM</div>
                    <span className="tag">( 206 )</span>
                  </div>
                  <div className="other">
                    <div className="update">LAST</div>
                    <div className="date">2025.12.25</div>
                  </div>
                </Link>
                <Link href="#" className="content_list" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                  <div className="tit_wrap">
                    <div className="tit">X</div>
                    <span className="tag">( 507 )</span>
                  </div>
                  <div className="other">
                    <div className="update">LAST</div>
                    <div className="date">2025.11.19</div>
                  </div>
                </Link>
              </div>
            </div>
          </section> 
        </>
    )
}