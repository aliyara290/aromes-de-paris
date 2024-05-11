import style from "@/styles/home/team.module.css";
import Heading from "@/components/Heading";
import Image from "next/image";

const Team = () => {
  return (
    <section className={style.content}>
      <div className={style.inner}>
        <div className={style.container}>
          <Heading
            subHeading={"- Équipe -"}
            topHeading={"Gérant"}
            botHeading={"& chef"}
            centerHeading={true}
            showSubHeading={true}
          />
          <div className={style.cards}>
            <div className={style.card}>
              <div className={`${style.pic} flex justify-center`}>
                <Image
                  src={"/images/home/team/manager.jpg"}
                  alt="pic"
                  width={300}
                  height={300}
                />
              </div>
              <div className={style.position}>
                <h4>Zakaria El Berrad</h4>
                <span>Gérant et propriétaire</span>
              </div>
            </div>
            <div className={style.card}>
              <div className={`${style.pic} flex justify-center`}>
                <Image
                  src={"/images/home/team/chef.jpg"}
                  alt="pic"
                  width={300}
                  height={300}
                />
              </div>
              <div className={style.position}>
                <h4>Abderrahmane Garouaz</h4>
                <span>chef de cuisine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
