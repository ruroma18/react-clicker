import React from "react";
import Clicker from "../Clicker";

class ClickerCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      step: 1,
      mathOperator: "Add",
      stepId: null,
      time: 1,
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

  handleChangeMode = (e) => {
    this.setState({
      mathOperator: e.target.value,
    });
  };

  handleStepChange = (e) => {
    this.setState({
      step: e.target.value,
    });
  };

  handleTimeRange = (e) => {
    this.setState({
      time: e.target.value,
    });
  };

  toggleChangeNumber = () => {
    this.setState({
      counter:
        this.state.mathOperator === "Add"
          ? this.state.counter + parseInt(this.state.step)
          : this.state.counter - parseInt(this.state.step),
    });
  };

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
        this.setState({
          counter:
            this.state.mathOperator === "Add"
              ? this.state.counter + parseInt(this.state.step)
              : this.state.counter - parseInt(this.state.step),
          stepId,
        });
      }, parseInt(this.state.time) * 1000);
    }
  };

  stopAutoClick = () => {
    clearInterval(this.state.stepId);
    clearInterval(this.state.workTimeId);
    this.setState({ stepId: null });
    this.setState({ workTimeId: null });
  };

  render() {
    const { counter, step, time, workTime } = this.state;

    return (
      <Clicker
        counter={counter}
        step={step}
        time={time}
        workTime={workTime}
        handleChangeMode={this.handleChangeMode}
        handleStepChange={this.handleStepChange}
        toggleChangeNumber={this.toggleChangeNumber}
        startAutoClick={this.startAutoClick}
        stopAutoClick={this.stopAutoClick}
        handleTimeRange={this.handleTimeRange}
      />
    );
  }
}

export default ClickerCounter;
