"use client";
import { useEffect } from "react";
import style from "@/styles/about/about.module.css";
import Heading from "@/components/Heading.jsx";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const AboutUs = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.innerWidth >= 780) {
      gsap.to(
        ".pic_jd6",

        {
          borderTopLeftRadius: "50%",
          borderBottomRightRadius: "50%",
          duration: 1,
          stagger: 0.4,
          scrollTrigger: {
            trigger: ".pic_jd6",
            start: "70% bottom",
            end: "bottom bottom",
            ease: "power4.inOut",
          },
        }
      );
    } else null
  }, []);
  return (
    <div className={style.content}>
      <div className={style.inner}>
        <div className={style.container}>
          <Heading
            subHeading={"Bref"}
            topHeading={"À Propos"}
            botHeading={"de Nous"}
            centerHeading={true}
            showSubHeading={true}
          />
          <div className={style.body}>
            <div className={style.text}>
              <p>
                Gourmet Grove incarne la gastronomie parisienne à Rabat.
                Niché dans un cadre élégant, notre brasserie offre une
                expérience authentique où les saveurs traditionnelles se marient
                à une ambiance chaleureuse. De nos plats exquis à notre service
                attentionné, chaque détail est conçu pour un voyage gustatif
                inoubliable.
              </p>
              <br />
              <p>
                Au cœur d'Rabat, Gourmet Grove est bien plus qu'un simple
                restaurant - c'est un lieu où l'art de vivre à la française
                prend vie. Inspirés par les recettes classiques de la cuisine
                parisienne, nos plats sont préparés avec un souci du détail et
                une recherche constante de l'excellence. Avec son ambiance chic
                et décontractée, Gourmet Grove invite à savourer les plaisirs
                simples de la vie.
              </p>
            </div>
            <div className={`${style.pic} pic_jd6`}>
              <Image
                src={"/images/home/002.jpg"}
                alt="pic"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
