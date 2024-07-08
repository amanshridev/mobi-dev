import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../../utils";
import { IoBagOutline } from "react-icons/io5";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1.5 });
    gsap.to("#cta", { opacity: 1, delay: 1.5, translateY: 0 });
  }, []);

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("reisze", handleVideoSrcSet);
    };
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="md:h-2/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          Iphone 15 pro
        </p>
      </div>
      <div className="md:w-10/12 w-9/12">
        <video
          className="pointer-events-none"
          autoPlay
          muted
          playsInline="true"
          key={videoSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a
          href=""
          className="btn py-2 w-32 text-center mb-4 border-slate-600 text-slate-600 flex justify-evenly items-center"
        >
          <IoBagOutline />
          Buy
        </a>
        <p className="text-lg text-slate-600 font-medium">$ 400</p>
      </div>
    </section>
  );
};

export default Hero;
