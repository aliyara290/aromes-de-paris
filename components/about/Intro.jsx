"use client";
import { useEffect } from "react";
import style from "@/styles/about/intro.module.css";
import gsap from "gsap";

const AboutIntro = () => {
  useEffect(() => {
    gsap.to(".hero_ab_text", {
      y: 0,
      duration: 0.3,
      delay: 0.4,
      stagger: 0.3
    });
  }, []);
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.text}>
          <div className="overflow-hidden">
            <div className="hero_ab_text translate-y-full">
              Explorez l'âme de Paris à Agadir. Chez
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="hero_ab_text translate-y-full">
              Arômes De Paris, plongez dans une
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="hero_ab_text translate-y-full">
              expérience culinaire incomparable,
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="hero_ab_text translate-y-full">
              imprégnée de saveurs authentiques et
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="hero_ab_text translate-y-full">
              d'une ambiance parisienne raffinée.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
