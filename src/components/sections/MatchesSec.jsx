import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";


export default function MatchesSec({ loading, loopY }) {
  useEffect(() => {
    if(!loading) {
      
    }
  }, []);
  return(
      <>
        <section className="matches_sec">
          <div className="inner">
            <h3 className="sec_tit">[MATCHES]</h3>
            <div className="ticket_wrap">
              <div className="left">
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
              <div className="right">
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
                  <div className="side_line">
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
                  <div className="side_line">
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
                  <div className="side_line">
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