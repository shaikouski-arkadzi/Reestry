import PropTypes from "prop-types";
import React from "react";
import { UserInterfaceBell2 } from "../../icons/UserInterfaceBell2";
import "./style.css";

export const Notifications = ({ prop, className }) => {
  return (
    <div className={`Notifications ${prop} ${className}`}>
      {prop === "one" && <UserInterfaceBell2 className="user-interface-bell" color="#A7B4CC" />}

      {prop === "two" && (
        <div className="overlap">
          <UserInterfaceBell2 className="user-interface-bell-2" color="#13A3B9" />
          <div className="notifications-count-wrapper">
            <div className="overlap-group">
              <div className="notifications-count">4</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Notifications.propTypes = {
  prop: PropTypes.oneOf(["two", "one"]),
};
