import Image from "next/image";
import style from "@/styles/home/intro.module.css";
import Heading from "@/components/Heading.jsx";

const Intro = () => {
  return (
    <section className={style.content}>
      <div className={style.inner}>
        <div className={style.container}>
          <Heading
            subHeading={"Bienvenue à"}
            topHeading={"ARÔMES DE"}
            botHeading={"PARIS"}
            centerHeading={true}
            showSubHeading={true}
          />
          <div className={style.grid}>
            <div className={style.part}>
              <div className={style.subheading}>
                <span>Notre Histoire</span>
              </div>
              <div className={style.heading}>
                <h1>Aromes De Paris</h1>
              </div>
              <div className={style.body}>
                <p>
                  Notre vision est claire : proposer à nos clients des plats
                  d'exception alliant raffinement et détente. Nous nous
                  engageons à fournir un service exemplaire tout en créant des
                  souvenirs inoubliables pour chacun de nos clients.
                </p>
              </div>
              <div className={style.btn}>
                <button>
                  <a href="">En savoir plus sur nous</a>
                </button>
              </div>
            </div>
            <div className={style.part_two}>
              <div className={style.pics}>
                <div className={style.pic}>
                  <Image
                    src={"/images/home/intro-1.png"}
                    alt="pic"
                    width={300}
                    height={300}
                  />
                </div>
                <div className={style.pic}>
                  <Image
                    src={"/images/home/intro-2.png"}
                    alt="pic"
                    width={300}
                    height={300}
                  />
                </div>
                <div className={style.pic}>
                  <Image
                    src={"/images/home/intro-3.png"}
                    alt="pic"
                    width={300}
                    height={300}
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

export default Intro;
