import React from "react";

const Photo = props => (
  <div>
    {props.photo && <img src={props.photo} className="img-fluid" alt="api" />}
  </div>
);

export default Photo;
