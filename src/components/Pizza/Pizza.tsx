import React, { useState } from "react"; // , useEffect
import { IPizza } from "../../interfaces";
import { formatCurrency, screen } from "../../utils";
import styles from "./pizza.module.scss";
import SizeSetter from "../SizeSetter/SizeSetter";

const Pizza = ({ data, handleAddToCart, setAlert }: IPizza) => {
  const [size, setSize] = useState(data.defaultSize);
  const description =
    data.description.length <= 80
      ? data.description
      : `${data.description.slice(0, 80)}...`;
  // console.log(data.description.length);

  const buyButtonHandler = (id: string) => {
    handleAddToCart(id);
    const message = `Пицца "${data.title}" добавлена в заказ`;
    setAlert({
      show: true,
      text: message,
      type: "success",
      showT: 2,
      outT: 1,
    });
  };

  return (
    <div
      className={styles.pizza}
      style={{ flexDirection: screen() === "xs" ? "row" : "column" }}
    >
      <div className={styles.pizzaBlock}>
        <div className={styles.circle1} />
        <div className={styles.circle2} />
        <div className={styles.circle3} />
        <div className={`${styles.pizzaImg} ${styles[`pizzaImg${size}`]}`}>
          <img src={`products/${data.image}`} alt={data.title} />
        </div>
      </div>

      <div className={styles.textBlock}>
        <h3>{data.title}</h3>
        <p className={styles.ingredients}>{description}</p>
        <SizeSetter start={size || "M"} setter={setSize} />
        {screen() === "xs" ? (
          <>
            <button
              className={`btn btn-primary ${styles.btn}`}
              onClick={() => handleAddToCart(`${size}${data.id}`)}
            >
              {formatCurrency(data.price2[size])}
            </button>
          </>
        ) : (
          <>
            <span className={styles.price}>
              {formatCurrency(data.price2[size])}
            </span>
            <button
              className={`btn btn-primary ${styles.btn}`}
              onClick={() => buyButtonHandler(`${size}${data.id}`)}
            >
              <span>Заказать</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Pizza;
