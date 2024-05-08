import style from "@/styles/home/team.module.css";
import Heading from "@/components/Heading";
import Image from "next/image";

const Team = () => {
  return (
    <div className={style.content}>
      <div className={style.inner}>
        <div className={style.container}>
          <Heading
            subHeading={"- Équipe -"}
            topHeading={"Gérant &"}
            botHeading={"fondateur"}
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
                <h4>Gérant et propriétaire</h4>
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
                <h4>chef de cuisine</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
