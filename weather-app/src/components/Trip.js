import React from "react";

const Trip = props => (
  <div>
    {props.city && props.country && (
      <p className="weather__key">
        My Trip to:
        <span className="weather__value">
          {props.city}, {props.state}, {props.country}
        </span>
      </p>
    )}
    {props.start && props.end && (
      <p>
        departing:
        <span className="date__key">
          {props.start}-{props.end}
        </span>
      </p>
    )}
  </div>
);
export default Trip;
