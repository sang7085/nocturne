import { useEffect, useRef } from "react";
import { gsap } from "gsap";


export default function MatchesSec({ Loading, loopY }) {
  useEffect(() => {
    if(!Loading) {
      
    }
  });
  return(
      <>
        <section className="matches_sec">
          <div className="inner">
            <h3 className="sec_tit">MATCHES</h3>
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
                    <button className="btn">
                      TICKET<span></span>
                    </button>
                    <button className="btn"></button>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="ticket"></div>
                <div className="ticket"></div>
                <div className="ticket"></div>
              </div>
            </div>
          </div>
        </section>  
      </>
  )
}