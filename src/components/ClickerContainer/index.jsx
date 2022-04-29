import React from "react";
import Clicker from "../Clicker";

class ClickerCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      step: 1,
      mathOperator: "Add",
    };
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

  toggleChangeNumber = (e) => {
    this.setState({
      counter:
        this.state.mathOperator === "Add"
          ? this.state.counter + parseInt(this.state.step)
          : this.state.counter - parseInt(this.state.step),
    });
  };

  render() {
    const { counter, step } = this.state;

    return (
      <Clicker 
      counter = {counter}
      step = {step}
      handleChangeMode = {this.handleChangeMode}
      handleStepChange = {this.handleStepChange}
      toggleChangeNumber = {this.toggleChangeNumber}
      />
    );
  }
}

export default ClickerCounter;
