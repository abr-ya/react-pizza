import React from "react";
import styles from "./sales.module.scss";
import { ISales } from "../../interfaces";

const Sales = ({ sales }: ISales) => (
  <div className="container">
    <div className={`row ${styles.sales}`}>
      {Array.isArray(sales) && sales.length
        ? sales.map((item) => (
          <div className="col-md-4" key={item.id}>
              <img src={`sales/${item.image}`} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))
        : null}
    </div>
  </div>
);

export default Sales;
