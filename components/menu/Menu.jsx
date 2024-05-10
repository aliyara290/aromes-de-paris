"use client";
import { useEffect } from "react";
import style from "@/styles/menu/menu.module.css";
import Heading from "@/components/Heading";
import { MenuData } from "@/data/MenuData.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Menu = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".categorie",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.4,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".categorie",
          start: "30% bottom",
          end: "bottom bottom",
          ease: "power4.inOut",
        },
      }
    );
  }, []);
  return (
    <section className={style.content}>
      <div className={style.inner}>
        <div className={style.container}>
          <Heading
            subHeading={"- Choisissez Délicieux -"}
            topHeading={"Sélections "}
            botHeading={"Délicieuses"}
            centerHeading={true}
            showSubHeading={true}
          />
          <div className={style.categories}>

          {Object.entries(MenuData).map(([category, items]) => (
            <div key={category} className={`${style.category} categorie`}>
              <h2>{category}</h2>
              <div className={style.cards}>
                {items.map((item, index) => (
                  <div className={style.card} key={index}>
                    <div className={style.name}>
                      <h4>{item.name}</h4>
                    </div>
                    <div className={style.price}>
                      <span>{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
