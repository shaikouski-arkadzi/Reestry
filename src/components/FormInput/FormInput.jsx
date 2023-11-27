import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const FormInput = ({
  prop,
  className,
  textLabel = "Имя",
  divClassName,
  text = "Введите имя",
  divClassNameOverride,
}) => {
  return (
    <div className={`FormInput ${className}`}>
      <div className="label">{textLabel}</div>
      <div className={`input-wrapper prop-${prop} ${divClassNameOverride}`}>
        <input className={`default disable-input-style ${divClassName}`} type="text" value={text} />
      </div>
    </div>
  );
};

FormInput.propTypes = {
  prop: PropTypes.oneOf(["one"]),
  textLabel: PropTypes.string,
  text: PropTypes.string,
};
