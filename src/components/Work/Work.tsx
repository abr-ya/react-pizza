import React from "react";
import styles from "./work.module.scss";

const Work = () => {
  const data = [
    {
      title: "Изготавливаем пиццу по своим рецептам в лучших традициях",
      text:
        "Наша пицца получается сочной, вкусной и главное хрустящей с нежной и аппетитной начинкой, готовим по своим итальянским рецептам",
      image: "about-01.jpg",
    },
    {
      title: "Используем только свежие ингридиенты",
      text:
        "Ежедневно заготавливаем продукты и овощи для наших пицц, соблюдаем все сроки хранения",
      image: "about-02.jpg",
    },
    {
      title: "Доставка в течение 60 минут или заказ за нас счёт",
      text:
        "Все наши курьеры – фанаты серии Need for Speed и призеры гонок World Rally Championship и World Superbike во всех категориях",
      image: "about-03.jpg",
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className={styles.work}>
            {data.map((item, i) => (
              <div className={styles.item} key={i}>
                <div className={styles.itemImageBlock}>
                  <img
                    className={styles.itemImage}
                    src={`img/${item.image}`}
                    alt="icon-about"
                  />
                  <img
                    className={styles.itemImageMask}
                    src="img/mask-image.svg"
                    alt="mask"
                  />
                </div>
                <div className={styles.itemTextBlock}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
