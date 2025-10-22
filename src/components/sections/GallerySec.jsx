import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function GallerySec({
  Loading,
  loopY,
  galleryProgress,
  isMobile,
}) {
  const once = useRef({});
  useEffect(() => {
    if (!Loading) {
      const gallerySec = document.querySelector(".gallery_sec:not(.clone)");
      const gap = 400;
      const reset = 100;
      const baseOffset = gallerySec.offsetTop;
      const floatingList = gallerySec.querySelectorAll(".floating_list");
      const innerHeight = gallerySec.querySelector(".inner").offsetHeight - 472; // inner 안에서 움직이게 범위설정
      const floatingTxt = gallerySec.querySelector(".floating_txt2");
      const inner = gallerySec.querySelector(".inner");
      // floating txt
      const pinStart = baseOffset - gap / 2;
      const pinEnd = baseOffset - gap / 2 + innerHeight - 472;
      const progress = gsap.utils.clamp(
        0,
        1,
        (loopY - pinStart) / (pinEnd - pinStart)
      );
      galleryProgress(progress); // 부모에게 progress 진행도 전달

      if (isMobile) {
        floatingList.forEach((el, i) => {
          const imgBox = el.querySelectorAll(".img_box");
          gsap.to(imgBox, {
            scale: 1,
            scrollTrigger: {
              trigger: el,
              start: "top center",
              end: "bottom bottom",
            },
          });
        });
        ScrollTrigger.matchMedia({
          "(min-width: 768px) and (max-width: 1279px)": function () {
            gsap.to(floatingTxt, {
              scrollTrigger: {
                trigger: floatingTxt,
                endTrigger: gallerySec,
                start: "top-=330px top",
                end: "bottom-=472px bottom",
                pin: true,
              },
            });
          },
          "(max-width: 767px)": function () {
            gsap.to(floatingTxt, {
              scrollTrigger: {
                trigger: floatingTxt,
                endTrigger: gallerySec,
                start: "top-=260px top",
                end: "bottom bottom",
                pin: true,
                // markers: true,
              },
            });
          },
        });
      } else {
        floatingList.forEach((el, i) => {
          const imgBox = el.querySelectorAll(".img_box");
          const offset = el.offsetTop;

          if (loopY < reset && once.current) {
            gsap.set(imgBox, { scale: 0 });
            once.current[`count${i}`] = false;
          }

          if (loopY > baseOffset - gap + offset && !once.current[`count${i}`]) {
            once.current[`count${i}`] = true;
            gsap.to(imgBox, { scale: 1, duration: 0.6 });
          }
        });
      }
    }
  }, [loopY, isMobile]);

  return (
    <>
      <section className="gallery_sec">
        <div className="inner">
          <div className={`floating_txt2 ${isMobile ? "block" : "hidden"}`}>
            <div className="tit_wrap">
              <h3 className="sub_tit">[moment of nocturne]</h3>
              <h2 className="tit">
                To inspire <br /> the best game in you
              </h2>
            </div>
          </div>
          <div className="floating_img">
            <div className="floating_list">
              <div className="img_box">
                <Image
                  src="/images/img-gallery01.jpg"
                  alt="gallery 이미지1"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="info">
                <p className="tit">Victory</p>
                <p className="date">2024</p>
              </div>
            </div>
            <div className="floating_list">
              <div className="img_box">
                <Image
                  src="/images/img-gallery02.jpg"
                  alt="gallery 이미지2"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="info">
                <p className="tit">Triumph</p>
                <p className="date">2020</p>
              </div>
            </div>
            <div className="floating_list">
              <div className="img_box">
                <Image
                  src="/images/img-gallery03.jpg"
                  alt="gallery 이미지2"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="info">
                <p className="tit">Champion</p>
                <p className="date">2021</p>
              </div>
            </div>
            <div className="floating_list">
              <div className="img_box">
                <Image
                  src="/images/img-gallery04.jpg"
                  alt="gallery 이미지2"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="info">
                <p className="tit">Glory</p>
                <p className="date">2023</p>
              </div>
            </div>
            <div className="floating_list">
              <div className="img_box">
                <Image
                  src="/images/img-gallery05.jpg"
                  alt="gallery 이미지2"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="info">
                <p className="tit">Match</p>
                <p className="date">2022</p>
              </div>
            </div>
            <div className="floating_list">
              <div className="img_box">
                <Image
                  src="/images/img-gallery06.jpg"
                  alt="gallery 이미지2"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="info">
                <p className="tit">Summit</p>
                <p className="date">2025</p>
              </div>
            </div>
          </div>
          {/* <div className="floating_txt">
              <div className="tit_wrap">
                <h3 className="sub_tit">[moment of nocturne]</h3>
                <h2 className="tit">To inspire <br /> the best game in you</h2>
              </div>
            </div> */}
        </div>
      </section>
    </>
  );
}
