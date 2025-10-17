import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";


export default function FooterSec({ loading, loopY }) {
  useEffect(() => {
    if(!loading) {
      
    }
  }, []);
  return(
      <>
        <section className="footer_sec">
          <div className="inner">
            <div className="txt">
              <p>Let’s  make<br /> something  special.</p>
            </div>
            <div className="side_line">
              <div className="icon-line top"></div>
              <div className="icon-line icon top-left"></div>
              <div className="icon-line icon top-right"></div>
            </div>
          </div>
          <div className="img_box">
            <Image className="footer_trophy" src="/images/img-footer-trophy.png" alt="푸터트로피" width="689" height="607" priority />
          </div>
        </section>
      </>
  )
}