import style from "@/styles/menu/menu.module.css";
import Heading from "@/components/Heading";
import { MenuData } from "@/data/MenuData.js";

const Menu = () => {
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
            <div key={category} className={style.category}>
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
