import style from "@/styles/home/menu.module.css";
import Heading from "@/components/Heading";
import { MenuData } from "@/data/MenuData.js";

const Menu = () => {
  return (
    <div className={style.content}>
      <div className={style.inner}>
        <div className={style.container}>
          <Heading
            subHeading={"- Choisissez Délicieux -"}
            topHeading={"Popular"}
            botHeading={"Menu"}
            centerHeading={true}
            showSubHeading={true}
          />
          <div className={style.cards}>
            {MenuData.map((item, index) => (
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
          <div className={style.btn}>
            <button>
              <a href="">Explore plus</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
