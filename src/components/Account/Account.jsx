import PropTypes from "prop-types";
import React from "react";
import { UserInterfaceUpperArrow3 } from "../../icons/UserInterfaceUpperArrow3";
import { UserInterfaceUserRound } from "../../icons/UserInterfaceUserRound";
import "./style.css";

export const Account = ({ prop, className, imgClassName, text = "" }) => {
  return (
    <div className={`Account ${className}`}>
      {prop === "one" && (
        <>
          <div className="user-interface-user-wrapper">
            <UserInterfaceUserRound className="user-interface-user" />
          </div>
          <div className="login-wrapper">
            <div className="login-text">Вход в аккаунт</div>
            <UserInterfaceUpperArrow3 className="user-interface-upper" />
          </div>
        </>
      )}

      {prop === "two" && (
        <>
          <img className={`img-2 ${imgClassName}`} alt="Img" src="/img/2.svg" />
          <div className="text-name">{text}</div>
          <UserInterfaceUpperArrow3 className="user-interface-upper" />
        </>
      )}
    </div>
  );
};

Account.propTypes = {
  prop: PropTypes.oneOf(["two", "one"]),
  text: PropTypes.string,
};
