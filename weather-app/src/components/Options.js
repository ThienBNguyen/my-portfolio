import React from "react";

const Options = props => (
  <form className="form">
    <button onClick={props.useLocalState}>save trip</button>
    <button>remove trip</button>
  </form>
);

export default Options;
