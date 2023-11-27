import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({ status, className, divClassName, text = "Вход" }) => {
  return (
    // <div className={`Button ${status} ${className}`}>
    //   <div className={`button-text ${divClassName}`}>{text}</div>
    // </div>
    <button className={`Button ${status} ${className}`}><div className={`button-text ${divClassName}`}>{text}</div></button>
  );
};

Button.propTypes = {
  status: PropTypes.oneOf(["hover", "active", "default"]),
  text: PropTypes.string,
};
