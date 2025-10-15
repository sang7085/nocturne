import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Typed from "typed.js";

export default function MatchesSec({ loading, loopY }) {
  const once = useRef(false);
  
  useEffect(() => {
    if(!loading) {
      const matchesSec = document.querySelector(".matches_sec");
      const path = matchesSec.querySelectorAll(".path");
      const gap = 400;
      const reset = 100;
      const baseOffset = matchesSec.offsetTop;

      if(loopY > baseOffset - gap && !once.current) {
        gsap.to(".ticket_wrap", {opacity: 1, y: 0});
        gsap.to(".sec_tit", {opacity: 1, y: 0});
        path.forEach((el) => {
          el.classList.add("path-active");
        })
        once.current = true;
      }
      
      if (loopY < reset) {
        gsap.set(".ticket_wrap", {opacity: 0, y: 100})
        gsap.set(".sec_tit", {opacity: 0, y: 100});
        path.forEach((el) => {
          el.classList.remove("path-active");
        });
        once.current = false;
      }
    }
  }, [loopY]);

  return(
      <>
        <section className="matches_sec">
          <div className="inner">
            <h3 className="sec_tit">[MATCHES]</h3>
            <div className="ticket_wrap">
              <div className="left_area">
                <div className="wide-ticket">
                  <div className="tit">MATCH<br/>DAY</div>
                  <div className="date_wrap">
                    <div className="info">
                      <div className="date">08.15</div>
                      <div className="time">17:00 UTC [HOME]</div>
                    </div>
                    <div className="other">
                      <p>vs<span>POU</span></p>
                    </div>
                  </div>
                  <div className="btn_wrap">
                    <button className="btn_wide">
                      TICKET
                      <div className="icon_con">
                        <div className="icon_wrap">
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </button>
                    <button className="btn_wide">
                      WATCH
                      <div className="icon_con">
                        <div className="icon_wrap">
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="right_area">
                <div className="ticket">
                  <div className="ticket_area">
                    <div className="info">
                      <div className="date">
                        08.20 <span>14:00 UTC [HOME]</span>
                      </div>
                      <div className="other">
                        VS <span>LEO</span>
                      </div>
                    </div>
                    <button className="btn icon">
                      TICKET
                      <div className="icon_con">
                        <div className="icon_wrap">
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="side_line path">
                    <div className="icon-line top"></div>
                    <div className="icon-line bottom"></div>
                    <div className="icon-line vertical left"></div>
                    <div className="icon-line vertical right"></div>
                    <div className="icon-line icon top-left"></div>
                    <div className="icon-line icon top-right"></div>
                    <div className="icon-line icon bottom-left"></div>
                    <div className="icon-line icon bottom-right"></div>
                  </div>
                </div>
                <div className="ticket">
                  <div className="ticket_area">
                    <div className="info">
                      <div className="date">
                        08.28 <span>14:00 UTC [HOME]</span>
                      </div>
                      <div className="other">
                        VS <span>RUK</span>
                      </div>
                    </div>
                    <button className="btn icon">
                      TICKET
                      <div className="icon_con">
                        <div className="icon_wrap">
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="side_line path">
                    <div className="icon-line top"></div>
                    <div className="icon-line bottom"></div>
                    <div className="icon-line vertical left"></div>
                    <div className="icon-line vertical right"></div>
                    <div className="icon-line icon top-left"></div>
                    <div className="icon-line icon top-right"></div>
                    <div className="icon-line icon bottom-left"></div>
                    <div className="icon-line icon bottom-right"></div>
                  </div>
                </div>
                <div className="ticket">
                  <div className="ticket_area">
                    <div className="info">
                      <div className="date">
                        09.05 <span>14:00 UTC [HOME]</span>
                      </div>
                      <div className="other">
                        VS <span>NAR</span>
                      </div>
                    </div>
                    <button className="btn icon">
                      TICKET
                      <div className="icon_con">
                        <div className="icon_wrap">
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="side_line path">
                    <div className="icon-line top"></div>
                    <div className="icon-line bottom"></div>
                    <div className="icon-line vertical left"></div>
                    <div className="icon-line vertical right"></div>
                    <div className="icon-line icon top-left"></div>
                    <div className="icon-line icon top-right"></div>
                    <div className="icon-line icon bottom-left"></div>
                    <div className="icon-line icon bottom-right"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>  
      </>
  )
}