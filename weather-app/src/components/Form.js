import React from "react";

const Form = props => (
  <form className="form" onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City..." />
    <input type="text" name="country" placeholder="Country..." />
    <div className="date">
      <label for="start">Start date:</label>{" "}
      <input type="date" id="start" name="trip-start" />
      <label for="start">End date:</label>
      <input type="date" id="end" name="trip-end" />
    </div>

    <button>See your plan</button>
  </form>
);

export default Form;
