import style from "@/styles/home/menu.module.css";
import Heading from "@/components/Heading";
import { MenuData } from "@/data/MenuData.js";
import Link from "next/link";

const Menu = () => {
  // Get the keys of MenuData
  const categories = Object.keys(MenuData);

  // Extract the first three categories
  const slice = categories.slice(0, 4);

  return (
    <section className={style.content}>
      <div className={style.inner}>
        <div className={style.container}>
          <Heading
            subHeading={"- Choisissez Délicieux -"}
            topHeading={"Catégories"}
            botHeading={"populaires"}
            centerHeading={true}
            showSubHeading={true}
          />
          <div className={style.categories}>
            {slice.map(category => (
              <div key={category} className={style.category}>
                <h2>{category}</h2>
                <div className={style.cards}>
                  {MenuData[category].map((item, itemIndex) => (
                    <div className={style.card} key={itemIndex}>
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
          <div className={style.btn}>
            <button>
              <Link href={'/menu'}>Explore plus</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
