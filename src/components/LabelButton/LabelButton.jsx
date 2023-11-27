import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const LabelButton = ({ prop='one', className, mode="noacive", text, children }) => {
  return (
    <div className={`label-button prop-${prop} ${className} ${mode === "active" && 'activeButton'}`}>
      {children}
      <div className={`label-button-text`} style={{ color: mode === "active" ? 'white': ''}}> {text}</div>
    </div>
  );
};

LabelButton.propTypes = {
  prop: PropTypes.oneOf(["two", "four", "three", "one"]),
};
