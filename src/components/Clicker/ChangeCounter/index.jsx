import React from "react";
import styles from "./ChangeCounter.module.scss";

const ChangeCounter = (props) => {
  const toggleChangeCounter = ({ target: { value } }) => {
    props.changeCounter(parseInt(value));
  };

  return (
    <button onClick={toggleChangeCounter} className={styles.clickerBtn}>
      Click
    </button>
  );
};

export default ChangeCounter;
