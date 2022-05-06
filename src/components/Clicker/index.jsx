import React from "react";
import cx from "classnames";
import ClickerChangeMode from "./ClickerChangeMode";
import AutoClicker from "./AutoClicker";
import ClickerChangeStep from "./ClickerChangeStep";
import ChangeCounter from "./ChangeCounter";
import ChangeTimeRange from "./ChangeTimeRange";
import styles from "./Clicker.module.scss";

class Clicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      step: 1,
      clickerMode: "add",
      time: 1,
    };
  }

  changeCounter = () => {
    this.setState({
      counter:
        this.state.clickerMode === "add"
          ? this.state.counter + this.state.step
          : this.state.counter - this.state.step,
    });
  };

  changeStep = (step) => {
    this.setState({ step });
  };

  changeMode = (clickerMode) => {
    this.setState({ clickerMode });
  };

  timeRange = (time) => {
    this.setState({ time });
  };

  render() {
    const { counter, step, time, clickerMode } = this.state;

    const counterStyle = {
      [styles.clickerAdd]: true,
      [styles.clickerSub]: clickerMode === "sub",
    };

    return (
      <article className={styles.container}>
        <h1 className={styles.clickerHeading}>Clicker</h1>
        <p className={cx(counterStyle)}>{counter}</p>
        <ChangeCounter changeCounter={this.changeCounter} />
        <ClickerChangeStep changeStep={this.changeStep} step={step} />
        <ClickerChangeMode changeMode={this.changeMode} />
        <ChangeTimeRange timeRange={this.timeRange} time={time} />
        <AutoClicker changeCounter={this.changeCounter} time={time}/>
      </article>
    );
  }
}

export default Clicker;
