import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CountUp } from "countup.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function HistorySec({ Loading, loopY, isMobile }) {
  const once = useRef({});
  const onceTxt1 = useRef(false);
  const onceTxt2 = useRef(false);
  useEffect(() => {
    if (!Loading) {
				const gap = 400;
        const reset = 100;
        const baseOffset = document.querySelector(".history_sec").offsetTop;
        const element1 = document.querySelector(".history_tit").offsetTop;
        const element2 = document.querySelector(".history_slogan").offsetTop;
        const countLists = document.querySelectorAll(".count_list");
				
      if (isMobile) {
				gsap.set(".slide_title", { opacity: 0 });
				gsap.set(".per20", { xPercent: 20 });
				gsap.set(".history_slogan span", { opacity: 0 });
				gsap.to(".slide_title" ,{
					opacity: 1,
					stagger: 0.2,
					scrollTrigger: {
						trigger: ".history_tit",
						start: "top center",
					}
				});
				gsap.to(".slide_title" ,{
					xPercent: 0,
					scrollTrigger: {
						trigger: ".history_tit",
						start: "top center",
					}
				});
				gsap.to(".history_slogan span", {
					opacity: 1,
					scrollTrigger: {
						trigger: ".history_slogan",
						start: "top center",
					}
				});

				countLists.forEach((el, i) => {
					const countNum = el.querySelector(".count_num");
					const targets = [482, 8, 74, 325];
			
					gsap.to(el, {
						xPercent: 0,
						scrollTrigger: {
							trigger: el,
							start: "top center",
							markers: true,
							once: true,
							onEnter: () => {
								const counter = new CountUp(countNum, targets[i], {
									duration: 1.5,
									useEasing: true,
								});
								counter.start();
							},
						}
					})
				});

				ScrollTrigger.refresh();
				
      } else {
				countLists.forEach((el, i) => {
					const countListTop = el.offsetTop;
          const targets = [482, 8, 74, 325];
          const countNum = el.querySelector(".count_num");
					
          // 모션 초기화
          if (loopY < reset) {
						gsap.set(".slide_title", { opacity: 0 });
						gsap.set(".per20", { xPercent: 20 });
						gsap.set(".history_slogan span", { opacity: 0 });
						gsap.set(el, { xPercent: 100 });
            once.current[`count${i}`] = false;
            onceTxt1.current = false;
            onceTxt2.current = false;
          }

          // loopY때문에 재렌더링 되어 카운트 무한실행 방지
          if (loopY > baseOffset + countListTop && !once.current[`count${i}`]) {
            once.current[`count${i}`] = true;
            gsap.to(el, { xPercent: 0, duration: 0.6 });
            const counter = new CountUp(countNum, targets[i], {
              duration: 1.5,
              useEasing: true,
            });
            counter.start();
          }
        });
        // 섹션 - 섹션 1/4 + 요소 offsetTop 값
        if (loopY > baseOffset - gap + element1 && !onceTxt1.current) {
          onceTxt1.current = true;
          gsap.to(".slide_title", { stagger: 0.2, opacity: 1 });
          gsap.to(".per20", { xPercent: 0, duration: 0.6 });
        }

        if (loopY > baseOffset - gap + element2 && !onceTxt2.current) {
          onceTxt2.current = true;
          gsap.to(".history_slogan span", { opacity: 1 });
        }
      }
    }
  }, [loopY, isMobile]);

  return (
    <>
      <section className="history_sec">
        <div className="history_tit">
          <div className="slide_title per20">
            <p>Nothing great has</p>
          </div>
          <div className="slide_title">
            <p>ever been achieved without</p>
          </div>
          <div className="slide_title per20">
            <p>passion</p>
          </div>
        </div>
        <div className="history_slogan">
          <p>
            <span>
              All things that spring from nothingness deserve to be destroyed
              without remorse: it were far better nothing came to be. Thus
              everything you mortals call a sin, and all you brand as ruin or
              decay, falls rightfully and wholly to my charge. For I am he who
              ever seeks to end, and what you name as evil is my realm, my joy,
              my element, my final crown.
            </span>
          </p>
        </div>
        <ul className="count_area">
          <li className="count_list full">
            <p className="count_num hunds_place">
              <span>0</span>
            </p>
            <p className="count_date">2025-TODAY</p>
            <p className="count_info">
              <span className="info_tit">Matches Played</span>
              <span className="info_txt">
                A testament to the team’s relentless journey across countless
                battles, <br />
                building a legacy one match at a time.
              </span>
            </p>
          </li>
          <li className="count_list">
            <p className="count_num ones_place">
              <span>0</span>
            </p>
            <p className="count_date">2025-TODAY</p>
            <p className="count_info">
              <span className="info_tit">Championships Won</span>
              <span className="info_txt">
                Defining moments of glory where the team stood at the very top
                of the competition.
              </span>
            </p>
            <div className="icon top-left"></div>
            <div className="icon bottom-left"></div>
          </li>
          <li className="count_list">
            <p className="count_num tens_place">
              <span>0</span>
            </p>
            <p className="count_date">2025-TODAY</p>
            <p className="count_info">
              <span className="info_tit">Champions Utilized</span>
              <span className="info_txt">
                Showcasing versatility and adaptability through <br /> a wide
                range of strategies and hero picks.
              </span>
            </p>
            <div className="icon top-left"></div>
            <div className="icon bottom-left"></div>
          </li>
          <li className="count_list">
            <p className="count_num hunds_place">
              <span>0</span>
            </p>
            <p className="count_date">2025-TODAY</p>
            <p className="count_info">
              <span className="info_tit">Victories Secured</span>
              <span className="info_txt">
                Proof of consistent dominance and the ability <br /> to turn
                challenges into triumphs.
              </span>
            </p>
            <div className="icon top-left"></div>
            <div className="icon bottom-left"></div>
          </li>
        </ul>
      </section>
    </>
  );
}
