import React from "react";
import styles from "./ClickerChangeStep.module.scss"

const ClickerChangeStep = (props) => {
  const handleChangeStep = ({ target: { value } }) => {
    props.changeStep(parseInt(value));
  };

  return (
    <>
      <h2 className={styles.heading}>Now step is {props.step}</h2>
      <label className={styles.container} htmlFor="step">
      <h2 className={styles.heading}>Change step:</h2>
        <input type="number" value={props.step} onChange={handleChangeStep} className={styles.inputNumber}/>
      </label>
    </>
  );
};

export default ClickerChangeStep;
