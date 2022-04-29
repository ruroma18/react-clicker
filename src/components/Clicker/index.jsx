function Clicker({counter, step, handleStepChange, handleChangeMode, toggleChangeNumber}) {

  return (
    <article>
      <h1>Clicker</h1>
      <p>{counter}</p>
        <label htmlFor="step">Change step: </label>
        <input
          id="step"
          type="number"
          value={step}
          onChange={handleStepChange}
        />
        <p>Now step is: {step}</p>
        <div>
          {" "}
          Change mode:
          <input
            type="radio"
            value="Add"
            name="mode"
            onChange={handleChangeMode}
            defaultChecked
          />{" "}
          Add
          <input
            type="radio"
            value="Subtract"
            name="mode"
            onChange={handleChangeMode}
          />{" "}
          Subtract
        </div>
        <button onClick={toggleChangeNumber}>Change</button>
    </article>
  );
}

export default Clicker;
