import React from "react";
import styles from "./ClickerChangeMode.module.scss";

const ClickerChangeMode = (props) => {
  const handleChangeMode = ({ target: { value } }) => {
    props.changeMode(value);
  };
  return (
    <label className={styles.container}>
      <h2 className={styles.heading}>Change mode:</h2>
      <div className={styles.checkWrapper}>
        <input
          type="radio"
          value="add"
          name="mode"
          onChange={handleChangeMode}
          defaultChecked
        />
        <p className={styles.inputName}>Add</p>
      </div>
      <div className={styles.checkWrapper}>
        <input
          type="radio"
          value="sub"
          name="mode"
          onChange={handleChangeMode}
        />
        <p className={styles.inputName}>Subtract</p>
      </div>
    </label>
  );
};

export default ClickerChangeMode;
