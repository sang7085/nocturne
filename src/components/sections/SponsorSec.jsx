import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function SponsorSec({ loading, loopY }) {
  const once = useRef({});
  useEffect(() => {
    if(!loading) {
      const sponsorSec = document.querySelector(".sponsor_sec:not(.clone)");
      const baseOffset = sponsorSec.offsetTop;
      const gap = 400;
      const reset = 100;
      const listWrap = sponsorSec.querySelector(".list_wrap");
      const sponList = listWrap.querySelectorAll(".spon_list");
      const sponLength = sponList.length;
    }
  }, []);
  return(
      <>
        <section className="sponsor_sec">
          <div className="inner">
            <div className="tit_wrap">
              <h3 className="sec_tit">SPONSOR</h3>
              <div className="slogan">
                <p>
                  Beyond the stage, bonds are forged. <br />
                  Every <span>challenge</span> shapes who we become. <br />
                  <span>Together</span>, we carve a path to tomorrow.
                </p>
              </div>
            </div>
          </div>
          <div className="list_con">
            <div className="list_wrap">
              <div className="spon_list">
                <div className="img_box">
                  <img src="/images/img-sponsor-logo01.png" alt="" />
                </div>
                <div className="side_line">
                  <div className="icon-line icon top-left"></div>
                  <div className="icon-line icon top-right"></div>
                  <div className="icon-line icon bottom-left"></div>
                  <div className="icon-line icon bottom-right"></div>
                </div>
              </div>
              <div className="spon_list">
                <div className="img_box">
                  <img src="/images/img-sponsor-logo02.png" alt="" />
                </div>
                <div className="side_line">
                  <div className="icon-line icon top-left"></div>
                  <div className="icon-line icon top-right"></div>
                  <div className="icon-line icon bottom-left"></div>
                  <div className="icon-line icon bottom-right"></div>
                </div>
              </div>
              <div className="spon_list">
                <div className="img_box">
                  <img src="/images/img-sponsor-logo03.png" alt="" />
                </div>
                <div className="side_line">
                  <div className="icon-line icon top-left"></div>
                  <div className="icon-line icon top-right"></div>
                  <div className="icon-line icon bottom-left"></div>
                  <div className="icon-line icon bottom-right"></div>
                </div>
              </div>
              <div className="spon_list">
                <div className="img_box">
                  <img src="/images/img-sponsor-logo04.png" alt="" />
                </div>
                <div className="side_line">
                  <div className="icon-line icon top-left"></div>
                  <div className="icon-line icon top-right"></div>
                  <div className="icon-line icon bottom-left"></div>
                  <div className="icon-line icon bottom-right"></div>
                </div>
              </div>
              <div className="spon_list">
                <div className="img_box">
                  <img src="/images/img-sponsor-logo01.png" alt="" />
                </div>
                <div className="side_line">
                  <div className="icon-line icon top-left"></div>
                  <div className="icon-line icon top-right"></div>
                  <div className="icon-line icon bottom-left"></div>
                  <div className="icon-line icon bottom-right"></div>
                </div>
              </div>
              <div className="spon_list">
                <div className="img_box">
                  <img src="/images/img-sponsor-logo01.png" alt="" />
                </div>
                <div className="side_line">
                  <div className="icon-line icon top-left"></div>
                  <div className="icon-line icon top-right"></div>
                  <div className="icon-line icon bottom-left"></div>
                  <div className="icon-line icon bottom-right"></div>
                </div>
              </div>
              <div className="spon_list">
                <div className="img_box">
                  <img src="/images/img-sponsor-logo01.png" alt="" />
                </div>
                <div className="side_line">
                  <div className="icon-line icon top-left"></div>
                  <div className="icon-line icon top-right"></div>
                  <div className="icon-line icon bottom-left"></div>
                  <div className="icon-line icon bottom-right"></div>
                </div>
              </div>
              <div className="spon_list">
                <div className="img_box">
                  <img src="/images/img-sponsor-logo01.png" alt="" />
                </div>
                <div className="side_line">
                  <div className="icon-line icon top-left"></div>
                  <div className="icon-line icon top-right"></div>
                  <div className="icon-line icon bottom-left"></div>
                  <div className="icon-line icon bottom-right"></div>
                </div>
              </div>
              <div className="spon_list">
                <div className="img_box">
                  <img src="/images/img-sponsor-logo01.png" alt="" />
                </div>
                <div className="side_line">
                  <div className="icon-line icon top-left"></div>
                  <div className="icon-line icon top-right"></div>
                  <div className="icon-line icon bottom-left"></div>
                  <div className="icon-line icon bottom-right"></div>
                </div>
              </div>
              <div className="spon_list">
                <div className="img_box">
                  <img src="/images/img-sponsor-logo01.png" alt="" />
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
        </section>
      </>
  )
}