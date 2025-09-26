import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loading({setLoading}) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const percent = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(percent);
                    setLoading(false);
                    return 100;
                };
                return prev + 1;
            })
        }, 30);
    }, []);

    function loadingImage(progress) {
        if (progress < 20) return "/images/load-img01.png"
        if (progress < 40) return "/images/load-img02.png";
        if (progress < 60) return "/images/load-img03.png";
        if (progress < 80) return "/images/load-img04.png";
        if (progress < 100) return "/images/load-img05.png";
        return "/images/load-img06.png";           
    }

    const currentImage = loadingImage(progress);

    return (
        <>  
            <div className="loading-sec">
                <div className="loading-line-wrap">
                    <div className="line top"></div>
                    <div className="line bottom"></div>
                    <div className="line left vertical"></div>
                    <div className="line right vertical"></div>
                    <div className="line icon top-left"></div>
                    <div className="line icon top-right"></div>
                    <div className="line icon bottom-left"></div>
                    <div className="line icon bottom-right"></div>
                </div>
                <div className="loading-image-wrap">
                    <Image src={currentImage} alt={`loading-image`} width={600} height={480}/>
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