"use client";
import { useEffect } from "react";
import style from "@/styles/home/gallery.module.css";
import Image from "next/image";
import Heading from "@/components/Heading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Gallery = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".pic_kj4",
      {
        height: 0,
        borderBottomLeftRadius: "50%",
        borderBottomRightRadius: "50%",
      },
      {
        height: "100%",
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        duration: 1,
        stagger: 0.4,
        scrollTrigger: {
          trigger: ".pic_kj4",
          start: "70% bottom",
          end: "bottom bottom",
          ease: "power4.inOut",
        },
      }
    );
  }, []);
  return (
    <section className={style.content}>
      <div className={style.inner}>
        <div className={style.container} id="gallery">
          <Heading
            subHeading={"- Restaurant De Luxe -"}
            topHeading={"Galerie de"}
            botHeading={"Photos"}
            centerHeading={true}
            showSubHeading={true}
          />
          <div className={style.gallery}>
            
            <div className={style.row}>
              <div className={style.video}>
                <div className={`${style.pic_inner} pic_kj4`}>
                  <video
                    src="/videos/home_gallery.mp4"
                    muted={true}
                    loop={true}
                    autoPlay={true}
                    controls={false}
                  ></video>
                </div>
              </div>
              <div className={style.column}>
                <div className={style.pic}>
                  <div className={`${style.pic_inner} pic_kj4`}>
                    <Image
                      src={"/images/home/005.jpg"}
                      alt="pic"
                      width={700}
                      height={700}
                    />
                  </div>
                </div>
                <div className={style.pic}>
                  <div className={`${style.pic_inner} pic_kj4`}>
                    <Image
                      src={"/images/home/001.jpg"}
                      alt="pic"
                      width={700}
                      height={700}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={style.row}>
              <div className={style.pic}>
                <div className={`${style.pic_inner} pic_kj4`}>
                  <Image
                    src={"/images/home/002.jpg"}
                    alt="pic"
                    width={700}
                    height={700}
                  />
                </div>
              </div>
              <div className={style.pic}>
                <div className={`${style.pic_inner} pic_kj4`}>
                  <Image
                    src={"/images/home/003.jpg"}
                    alt="pic"
                    width={700}
                    height={700}
                  />
                </div>
              </div>
              <div className={style.pic}>
                <div className={`${style.pic_inner} pic_kj4`}>
                  <Image
                    src={"/images/home/006.jpg"}
                    alt="pic"
                    width={700}
                    height={700}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
