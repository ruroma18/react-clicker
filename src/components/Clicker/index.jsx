function Clicker({
  counter,
  step,
  time,
  workTime,
  handleStepChange,
  handleChangeMode,
  toggleChangeNumber,
  startAutoClick,
  stopAutoClick,
  handleTimeRange,
}) {
  return (
    <article>
      <h1>Clicker</h1>
      <p>{counter}</p>
      <label htmlFor="step">
        Change step:
        <input
          id="step"
          type="number"
          value={step}
          onChange={handleStepChange}
        />
      </label>
      <p>Now step is: {step}</p>
      <p>Auto Clicker work: {workTime} seconds</p>
      <label htmlFor="step">
        Change time in sec:
        <input
          id="time"
          type="number"
          value={time}
          onChange={handleTimeRange}
        />
      </label>
      <label>
        Change mode:
        <input
          type="radio"
          value="Add"
          name="mode"
          onChange={handleChangeMode}
          defaultChecked
        />
        Add
        <input
          type="radio"
          value="Subtract"
          name="mode"
          onChange={handleChangeMode}
        />
        Subtract
      </label>
      <button onClick={toggleChangeNumber}>Click</button>
      <button onClick={startAutoClick}>Auto Click</button>
      <button onClick={stopAutoClick}>Stop Auto Click</button>
    </article>
  );
}

export default Clicker;
