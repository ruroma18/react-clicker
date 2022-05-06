import React, { Component } from "react";
import styles from "./AutoClicker.module.scss";

class AutoClickerButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stepId: null,
      workTime: 0,
      workTimeId: null,
    };
    this.isRendered = false;
  }

  componentDidMount() {
    if (this.isRendered) {
      return;
    }
    this.isRendered = true;
    if (!this.state.stepId) {
      this.startAutoClick();
      setTimeout(this.stopAutoClick, 30000);
    }
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    this.stopAutoClick();
  }

  countWorkTime = () => {
    const workTimeId = setInterval(() => {
      this.setState({
        workTime: this.state.workTime + 1,
        workTimeId,
      });
    }, 1000);
  };

  startAutoClick = () => {
    if (!this.state.stepId) {
      this.countWorkTime();
      const stepId = setInterval(() => {
        this.props.changeCounter();
        this.setState({
          stepId,
        });
      }, this.props.time * 1000);
    }
  };

  stopAutoClick = () => {
    clearInterval(this.state.stepId);
    clearInterval(this.state.workTimeId);
    this.setState({ stepId: null, workTimeId: null, workTime: 0 });
  };

  render() {
    const { workTime } = this.state;

    return (
      <>
        <h2 className={styles.heading}>
          Auto Clicker work: {workTime} seconds
        </h2>
        <button onClick={this.startAutoClick} className={styles.clickerBtn}>
          Auto Click
        </button>
        <button onClick={this.stopAutoClick} className={styles.clickerBtn}>
          Stop Auto Click
        </button>
      </>
    );
  }
}

export default AutoClickerButton;
