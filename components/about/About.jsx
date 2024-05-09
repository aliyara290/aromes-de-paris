import style from "@/styles/about/about.module.css";
import Heading from "@/components/Heading.jsx";
import Image from "next/image";

const AboutUs = () => {
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
              Aromes De Paris incarne la gastronomie parisienne à Agadir. Niché dans un cadre élégant, notre brasserie offre une expérience authentique où les saveurs traditionnelles se marient à une ambiance chaleureuse. De nos plats exquis à notre service attentionné, chaque détail est conçu pour un voyage gustatif inoubliable.
              </p>
              <br />
              <p>Au cœur d'Agadir, Aromes De Paris est bien plus qu'un simple restaurant - c'est un lieu où l'art de vivre à la française prend vie. Inspirés par les recettes classiques de la cuisine parisienne, nos plats sont préparés avec un souci du détail et une recherche constante de l'excellence. Avec son ambiance chic et décontractée, Aromes De Paris invite à savourer les plaisirs simples de la vie.</p>
            </div>
            <div className={style.pic}>
                <Image 
                src={'/images/home/004.jpg'}
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
