import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";


export default function GallerySec({ Loading, loopY }) {
  const once = useRef({});

  useEffect(() => {
    if(!Loading) {
      const gallerySec = document.querySelector(".gallery_sec:not(.clone)");
      const gap = 400;
      const reset = 100;
      const fixedGap = 172;
      const baseOffset = gallerySec.offsetTop;
      const floatingList = gallerySec.querySelectorAll(".floating_list");
      const setFloatingY = gsap.quickSetter(".floating_txt", "y", "px");
      floatingList.forEach((el, i) => {
        const imgBox = el.querySelectorAll(".img_box");
        const info = el.querySelectorAll(".info");
        const offset = el.offsetTop;
        
        if (loopY < reset) {
          console.log("fsdfds");
          gsap.set(imgBox, {scale: 0,});
          once.current[`count${i}`] = false;
        }

        if (loopY > baseOffset - gap + offset && !once.current[`count${i}`]) {
          once.current[`count${i}`] = true;
          gsap.to(imgBox, {scale: 1, duration: .6});
        }
        
        // fixed txt
        if(loopY > baseOffset + fixedGap) {
          setFloatingY(loopY - baseOffset - fixedGap);
        }
      });
    }
  });
  return(
      <>
        <section className="gallery_sec">
          <div className="inner">
            <div className="floating_img">
              <div className="floating_list">
                <div className="img_box">
                  <Image src="/images/img-gallery01.jpg" alt="gallery 이미지1" width="415" height="415" />
                </div>
                <div className="info">
                  <p className="tit">Victory</p>
                  <p className="date">2024</p>
                </div>
              </div>
              <div className="floating_list">
                <div className="img_box">
                  <Image src="/images/img-gallery02.jpg" alt="gallery 이미지2" width="415" height="415" />
                </div>
                <div className="info">
                  <p className="tit">Victory</p>
                  <p className="date">2024</p>
                </div>
              </div>
              <div className="floating_list">
                <div className="img_box">
                  <Image src="/images/img-gallery03.jpg" alt="gallery 이미지2" width="415" height="415" />
                </div>
                <div className="info">
                  <p className="tit">Victory</p>
                  <p className="date">2024</p>
                </div>
              </div>
              <div className="floating_list">
                <div className="img_box">
                  <Image src="/images/img-gallery04.jpg" alt="gallery 이미지2" width="415" height="415" />
                </div>
                <div className="info">
                  <p className="tit">Victory</p>
                  <p className="date">2024</p>
                </div>
              </div>
              <div className="floating_list">
                <div className="img_box">
                  <Image src="/images/img-gallery05.jpg" alt="gallery 이미지2" width="415" height="415" />
                </div>
                <div className="info">
                  <p className="tit">Victory</p>
                  <p className="date">2024</p>
                </div>
              </div>
              <div className="floating_list">
                <div className="img_box">
                  <Image src="/images/img-gallery06.jpg" alt="gallery 이미지2" width="415" height="415" />
                </div>
                <div className="info">
                  <p className="tit">Victory</p>
                  <p className="date">2024</p>
                </div>
              </div>
            </div>
            <div className="floating_txt">
              <div className="tit_wrap">
                <h3 className="sub_tit">[moment of nocturne]</h3>
                <h2 className="tit">To inspire <br /> the best game in you</h2>
              </div>
            </div>
          </div>
        </section>  
      </>
  )
}