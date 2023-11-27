

import PropTypes from "prop-types";
import React from "react";

export const IconRightArrow1 = ({ color = "#272A33", className }) => {
  return (
    <svg
      className={`icon-right-arrow-1 ${className}`}
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M11.2799 15.0533L18.8266 7.52001C18.9506 7.39504 19.098 7.29584 19.2605 7.22815C19.423 7.16046 19.5973 7.12561 19.7733 7.12561C19.9493 7.12561 20.1236 7.16046 20.286 7.22815C20.4485 7.29584 20.596 7.39504 20.7199 7.52001C20.9683 7.76982 21.1077 8.10776 21.1077 8.46001C21.1077 8.81226 20.9683 9.15019 20.7199 9.40001L14.1199 16.0667L20.7199 22.6667C20.9683 22.9165 21.1077 23.2544 21.1077 23.6067C21.1077 23.9589 20.9683 24.2969 20.7199 24.5467C20.5965 24.6727 20.4492 24.7729 20.2867 24.8415C20.1242 24.9102 19.9497 24.9459 19.7733 24.9467C19.5969 24.9459 19.4224 24.9102 19.2599 24.8415C19.0974 24.7729 18.9501 24.6727 18.8266 24.5467L11.2799 17.0133C11.1446 16.8885 11.0366 16.7369 10.9627 16.5683C10.8888 16.3996 10.8507 16.2175 10.8507 16.0333C10.8507 15.8492 10.8888 15.6671 10.9627 15.4984C11.0366 15.3297 11.1446 15.1782 11.2799 15.0533Z"
        fill={color}
      />
    </svg>
  );
};

IconRightArrow1.propTypes = {
  color: PropTypes.string,
};
