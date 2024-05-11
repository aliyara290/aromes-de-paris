"use client";
import { useEffect } from "react";
import style from "@/styles/home/hero.module.css";
import gsap from "gsap";

const HomeHero = () => {
  useEffect(() => {
    gsap.to('.hero__text', {
      y: 0,
      duration: 0.3,
      delay: 0.4,
    })
  }, []);

  return (
    <div className={style.content}>
      <div className={style.video}>
        <video
          playsInline={true}
          autoPlay={true}
          muted={true}
          loop={true}
          controls={false}
          src="/videos/hero_video.mp4"
        ></video>
      </div>
      <div className={`${style.bold} overflow-hidden`}>
        <div className="hero__text">Arômes De Paris</div>
      </div>
    </div>
  );
};

export default HomeHero;
