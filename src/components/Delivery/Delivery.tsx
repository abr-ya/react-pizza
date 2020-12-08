import React from "react";
import styles from "./delivery.module.scss";

interface IDeliveryCard {
  title: string;
  image: string;
  text: string;
}

const Delivery = () => {
  // данные пока хардкодим прямо тут
  const DeliveryData: IDeliveryCard[] = [
    {
      title: "Заказ",
      image: "icon-order.svg",
      text: "После оформления заказа мы свяжемся с вами для уточнения деталей.",
    },
    {
      title: "Доставка курьером",
      image: "icon-delivery.svg",
      text: "Мы доставим вашу пиццу горячей. Бесплатная доставка по городу.",
    },
    {
      title: "Оплата",
      image: "icon-pay.svg",
      text:
        "Оплатить можно наличными или картой курьеру. И золотом тоже можно.",
    },
  ];

  return (
    <div className={`container-fluid ${styles.delivery}`}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>Доставка и оплата</h2>
          </div>
        </div>
        <div className="row">
          {DeliveryData.map((item: IDeliveryCard, index) => (
            <div
              className={`col-lg-4 ${index === 0 ? "col-md-12" : "col-md-6"} ${
                styles.wrapper
              }`}
              key={item.image}
            >
              <div className={styles.card}>
                <div className={styles.left}>
                  <img src={`img/${item.image}`} alt="icon-order" />
                </div>
                <div className={styles.right}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Delivery;
