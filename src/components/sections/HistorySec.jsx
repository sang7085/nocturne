import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CountUp } from "countup.js";

export default function HistorySec({ Loading, loopY }) {
const countRef1 = useRef(null);
const countRef2 = useRef(null);
const countRef3 = useRef(null);
const countRef4 = useRef(null);
const once = useRef({ 
    title: false,
    slogan: false,
    count1: false,
    count2: false,
    count3: false,
    count4: false,
 });
 useEffect(() => {
     if(!Loading) {
         const baseOffset = document.querySelector(".history_sec").offsetTop;
         const element1 = document.querySelector(".history_tit").offsetTop;
         const element2 = document.querySelector(".history_slogan").offsetTop;
         const countLists = document.querySelectorAll(".count_list");
         const countList1 = countLists[0].offsetTop;
         const countList2 = countLists[1].offsetTop;
         const countList3 = countLists[2].offsetTop;
         const countList4 = countLists[3].offsetTop;
        if(!once.title) {
            gsap.set(".per20", {
                xPercent: 20,
            });
        }
        if(!once.count1 && !once.count2 && !once.count3 && !once.count4) {
            countLists.forEach((el) => {
            gsap.set(el, {
                xPercent: 100,
            })
        })
        }
        // 섹션 - 섹션 1/4 + 요소 offsetTop 값
        if (loopY > baseOffset - baseOffset / 4 + element1 && !once.title) {
            once.title = true;
            gsap.to(".slide_title", {stagger: .2, opacity: 1,});
            gsap.to(".per20", {xPercent: 0, duration: .6,});
        }
        
        if (loopY > baseOffset - baseOffset / 4 + element2 && !once.slogan) {
            once.slogan = true;
            gsap.to(".history_slogan span", {opacity: 1});
        }
        
        // count area start -------------------------------------------------------
        if (loopY > baseOffset + countList1 && !once.count1) {
            console.log("1");
            gsap.to(countLists[0], {xPercent: 0, duration: .6});
            once.count1 = true;
            const counter = new CountUp(countRef1.current, 482, {
                duration: 1.5,
                useEasing: true,
              });
            counter.start();
        }
        if (loopY > baseOffset + countList2 && !once.count2) {
            gsap.to(countLists[1], {xPercent: 0, duration: .6});
            once.count2 = true; 
            const counter = new CountUp(countRef2.current, 8, {
                duration: 1.5,
                useEasing: true,
            });
            counter.start();
        }
        if (loopY > baseOffset + countList3 && !once.count3) {
            gsap.to(countLists[2], {xPercent: 0, duration: .6});
            once.count3 = true;
            const counter = new CountUp(countRef3.current, 74, {
                duration: 1.5,
                useEasing: true,
            });
            counter.start();
        }
        if (loopY > baseOffset + countList4 && !once.count4) {
            gsap.to(countLists[3], {xPercent: 0, duration: .6});
            once.count4 = true;
            const counter = new CountUp(countRef4.current, 325, {
                duration: 1.5,
                useEasing: true,
            });
            counter.start();
        }
    }
  }, [loopY])

    return(
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
                    <p><span>All things that spring from nothingness deserve 
                    to be destroyed without remorse: it were far better nothing came to be. Thus everything you mortals call a sin, and all you brand as ruin or decay, falls rightfully and wholly to my charge. For I am he who ever seeks to end, and what you name as evil is my realm, my joy, my element, my final crown.</span></p>
                </div>
                <ul className="count_area">
                    <li className="count_list full">
                        <p className="count_num hunds_place"><span ref={countRef1}>0</span></p>
                        <p className="count_date">2025-TODAY</p>
                        <p className="count_info">
                            <span className="info_tit">Matches Played</span>
                            <span className="info_txt">A testament to the team’s relentless journey across countless battles, <br /> 
                            building a legacy one match at a time.</span>
                        </p>
                    </li>
                    <li className="count_list">
                        <p className="count_num ones_place"><span ref={countRef2}>0</span></p>
                        <p className="count_date">2025-TODAY</p>
                        <p className="count_info">
                            <span className="info_tit">Championships Won</span>
                            <span className="info_txt">Defining moments of glory where the team stood  at the very top of the competition.</span>
                        </p>
                        <div className="icon top-left"></div>
                        <div className="icon bottom-left"></div>
                    </li>
                    <li className="count_list">
                        <p className="count_num tens_place"><span ref={countRef3}>0</span></p>
                        <p className="count_date">2025-TODAY</p>
                        <p className="count_info">
                            <span className="info_tit">Champions Utilized</span>
                            <span className="info_txt">Showcasing versatility and adaptability through <br /> a wide range of strategies and hero picks.</span>
                        </p>
                        <div className="icon top-left"></div>
                        <div className="icon bottom-left"></div>
                    </li>
                    <li className="count_list">
                        <p className="count_num hunds_place"><span ref={countRef4}>0</span></p>
                        <p className="count_date">2025-TODAY</p>
                        <p className="count_info">
                            <span className="info_tit">Victories Secured</span>
                            <span className="info_txt">Proof of consistent dominance and the ability <br /> to turn challenges into triumphs.</span>
                        </p>
                        <div className="icon top-left"></div>
                        <div className="icon bottom-left"></div>
                    </li>
                </ul>
          </section> 
        </>
    )
}