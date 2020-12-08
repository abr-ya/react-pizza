import React from "react";
import styles from "./pages.module.scss";
import NumberInputGroup from "../components/NumberInputGroup/NumberInputGroup";
import { IAlert } from "../components/BsAlert/BsAlert";

interface IAbout {
  setAlert: (alert: IAlert) => void;
}

export const About = ({ setAlert }: IAbout) => {
  const saveInputHandler = (id: string, quantity: number) => {
    console.log("saveInputHandler:", id, quantity);
  };

  const alertClickHandler = () => {
    setAlert({
      show: true,
      text: "текст сообщения из About!",
      type: "success",
      showT: 2,
      outT: 1,
    });
  };

  return (
    <div className={`container ${styles.about}`}>
      <h1>About page</h1>
      <p>Пока что это страница для тестирования компонентов.</p>
      <h3>NumberInputGroup</h3>
      <NumberInputGroup
        id="M2"
        numberValue={30}
        saveInputHandler={saveInputHandler}
        max={100}
        multiplicity={1}
      />

      <h3>BsAlert</h3>
      <button
        type="button"
        className={`btn btn-info ${styles.btn}`}
        onClick={alertClickHandler}
      >
        Показать уведомление
      </button>
    </div>
  );
};
