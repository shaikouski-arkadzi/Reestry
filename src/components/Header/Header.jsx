import PropTypes from "prop-types";
import React from "react";
import { ReestyLogo } from "../../icons/ReestyLogo";
import { Notifications } from "../Notifications";
import { Account } from "../Account";
import "./style.css";

export const Header = ({ className, userName = "", accountImageClassName }) => {
  return (
    <div className={`header ${className}`}>
      <ReestyLogo className="instance-2-instance" />
      <div className="header-links">
        <div className="header-text">Меню</div>
        <div className="header-text">Вопросы и ответы</div>
        <div className="header-text">Об АИС</div>
      </div>
      <div className="header-right">
        <Notifications className="Notifications-instance" prop="two" />
        <div className="vertical-line-divider" />
        <Account
          className="Account-instance"
          imgClassName={accountImageClassName}
          prop="two"
          text={userName}
        />
      </div>
    </div>
  );
};

Header.propTypes = {
  userName: PropTypes.string,
};
