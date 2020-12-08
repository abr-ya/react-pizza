import React from "react";
import { IProducts } from "../../interfaces";
import Pizza from "../Pizza/Pizza";
// import styles from './products.module.scss';

const Products = ({ data, handleAddToCart, setAlert }: IProducts) => {
  const productsHtml = data.map((item) => (
    <div className="col-xl-3 col-lg-4 col-sm-6 col-xs-12" key={item.id}>
      <Pizza
        data={item}
        handleAddToCart={handleAddToCart}
        setAlert={setAlert}
      />
    </div>
  ));
  // console.log('productsHtml', productsHtml);

  return (
    <div className="container">
      <div className="row mb-4">{productsHtml}</div>
    </div>
  );
};

export default Products;
