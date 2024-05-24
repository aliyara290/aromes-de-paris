"use client";
import { useEffect } from "react";
import style from "@/styles/preload.module.css";
import { gsap } from "gsap";

const Preload = () => {
  useEffect(() => {
    const logoPaths = document.querySelectorAll(".logo_paths");
    const welcomeText = document.querySelector(".welcome_text");
    const preloader = document.querySelector(".preloader__jcek4");

    gsap.fromTo(
      logoPaths,
      {
        y: 100,
      },
      {
        y: 0,
        duration: 0.3,
        stagger: 0.1,
        onComplete: () => {
          gsap.to(logoPaths, {
            y: 100,
            duration: 2,
            delay: 0.9,
          });
          gsap.to(welcomeText, {
            y: 0,
            duration: 0.3,
            delay: 1,
            onComplete: () => {
              gsap.to(welcomeText, {
                y: 100,
                duration: 0.3,
                delay: 1,
                onComplete: () => {
                  const preloadAnimationFinishedEvent = new Event(
                    "preloadAnimationFinished"
                  );
                  document.dispatchEvent(preloadAnimationFinishedEvent);
                },
              });
            },
          });
        },
      }
    );

    return () => {
      // Cleanup any ongoing animations if the component unmounts
      gsap.killTweensOf(logoPaths);
      gsap.killTweensOf(welcomeText);
      gsap.killTweensOf(preloader);
    };
  }, []);

  return (
    <div className={`${style.content} preloader__jcek4`}>
      <div className={style.container}>
        <div className={style.welcome}>
          <h2 className="welcome_text">Bienvenue</h2>
        </div>
        <div className={style.logo_typo}>
          <div className="logo_paths">G</div>
          <div className="logo_paths">o</div>
          <div className="logo_paths">u</div>
          <div className="logo_paths">r</div>
          <div className="logo_paths">m</div>
          <div className="logo_paths">e</div>
          <div className="logo_paths pr-3">t</div>
          <div className="logo_paths">G</div>
          <div className="logo_paths">r</div>
          <div className="logo_paths">o</div>
          <div className="logo_paths">v</div>
          <div className="logo_paths">e</div>
        </div>
      </div>
    </div>
  );
};

export default Preload;
