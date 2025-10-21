"use client";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Loading({setLoading, loading}) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const percent = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(percent);
                    setTimeout(() => {
                        setLoading(false);
                    }, 1000);
                    return 100;
                };
                return prev + 1;
            })
        }, 30);

        if(!loading) {
            setTimeout(() => {
                document.querySelector(".loading-sec").classList.add("none");
            }, 1000);
        }
    }, [loading]);

    function loadingImage(progress) {
        if (progress < 60) {
            const index = Math.floor(progress / 3) % 6;
            return `/images/load-img0${index + 1}.png`;
        } else if (progress < 100 ){
            const index = Math.floor(progress / 10) - 6;
            return `/images/load-img0${index + 1}.png`;
        } else {
            return `/images/load-img06.png`;
        }
    }

    const currentImage = loadingImage(progress);

    return (
        <>  
            <div className={`loading-sec ${loading ? "block" : "hidden"}`}>
                <div className="loading-line-wrap">
                    <div className="icon-line top"></div>
                    <div className="icon-line bottom"></div>
                    <div className="icon-line left vertical"></div>
                    <div className="icon-line right vertical"></div>
                    <div className="icon-line icon top-left"></div>
                    <div className="icon-line icon top-right"></div>
                    <div className="icon-line icon bottom-left"></div>
                    <div className="icon-line icon bottom-right"></div>
                </div>
                <div className="loading-image-wrap">
                    <Image src={currentImage} alt={`loading-image`} fill style={{ objectFit: "cover" }} priority/>
                </div>
                    <ul className="loading-txt group top-left">
                        <li>DATE.MONTH.YEAR</li>
                        <li>07.15.2000</li>
                        <li>Fading Night,</li>
                        <li>Glory</li>
                    </ul>
                    <div className="loading-txt line-break top-right">
                        <p><span>A relentless journey</span> <span>to the final crown</span></p>
                    </div>
                    <div className="loading-txt huge bottom-left">
                        <p>LOADING</p>
                    </div>
                <div className="loading-percent">{progress}<span>%</span></div>
            </div>
        </>
    )
}