import React from "react";
import { ISizeSetter } from "../../interfaces";
import styles from "./sizeSetter.module.scss";

const SizeSetter = ({ start, setter }: ISizeSetter) => {
  const selectHandler = (value: string) => {
    if (value === "S" || value === "M" || value === "L") {
      // console.log('выбран размер: ', value);
      setter(value);
    } else {
      console.log("некорректное значение размера!");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div>Размер, см:</div>

      <select
        value={start}
        onChange={(e) => selectHandler(e.target.value)}
        multiple={false}
      >
        <option value="S">20</option>
        <option value="M">30</option>
        <option value="L">40</option>
      </select>
    </div>
  );
};

export default SizeSetter;
