import React from "react";
import "./Button.scss";

function Button(props) {
  const { text } = props;
  const { type } = props;
  const { className } = props;
  return (
    <div>
      <button className={className} type={type}>
        {" "}
        {text}{" "}
      </button>
    </div>
  );
}

export default Button;
