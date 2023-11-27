import PropTypes from "prop-types";
import React from "react";
import { IconUpperArrow } from "../../icons/IconUpperArrow";
import { IconUpperArrow1 } from "../../icons/IconUpperArrow1";
import { UserInterfaceUpperArrow4 } from "../../icons/UserInterfaceUpperArrow4";
import { UserInterfaceUpperArrow5 } from "../../icons/UserInterfaceUpperArrow5";
import "./style.css";

export const TablePagination = ({ className }) => {
  return (
    <div className={`TablePagination ${className}`}>
      <UserInterfaceUpperArrow4 className="icon-upper-arrow" />
      <IconUpperArrow className="icon-upper-arrow" color="#D4D7DB" />
      <div className="pages">
        <div className="active-page-wrapper">
          <div className="active-page-text">1</div>
        </div>
        {[2, 3, 4, 5, '...', 10, 11].map(el=>
          <div className="noactive-page-wrapper" key={el}>
            <div className="noactive-page-text">{el}</div>
          </div>
        )}
      </div>
      <IconUpperArrow1 className="icon-upper-arrow" />
      <UserInterfaceUpperArrow5 className="icon-upper-arrow" />
    </div>
  );
};

TablePagination.propTypes = {
  userInterfaceUpper: PropTypes.string,
};
