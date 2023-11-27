

import PropTypes from "prop-types";
import React from "react";

export const IconClose = ({ color = "#D4D7DB", className }) => {
  return (
    <svg
      className={`icon-close ${className}`}
      fill="none"
      height="25"
      viewBox="0 0 24 25"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M15.71 8.78999C15.617 8.69626 15.5064 8.62187 15.3846 8.5711C15.2627 8.52033 15.132 8.49419 15 8.49419C14.868 8.49419 14.7373 8.52033 14.6154 8.5711C14.4936 8.62187 14.383 8.69626 14.29 8.78999L12 11.09L9.70999 8.78999C9.52168 8.60168 9.26629 8.4959 8.99999 8.4959C8.73369 8.4959 8.47829 8.60168 8.28999 8.78999C8.10168 8.97829 7.9959 9.23369 7.9959 9.49999C7.9959 9.76629 8.10168 10.0217 8.28999 10.21L10.59 12.5L8.28999 14.79C8.19626 14.883 8.12187 14.9936 8.0711 15.1154C8.02033 15.2373 7.99419 15.368 7.99419 15.5C7.99419 15.632 8.02033 15.7627 8.0711 15.8846C8.12187 16.0064 8.19626 16.117 8.28999 16.21C8.38295 16.3037 8.49355 16.3781 8.61541 16.4289C8.73727 16.4796 8.86798 16.5058 8.99999 16.5058C9.132 16.5058 9.26271 16.4796 9.38456 16.4289C9.50642 16.3781 9.61702 16.3037 9.70999 16.21L12 13.91L14.29 16.21C14.383 16.3037 14.4936 16.3781 14.6154 16.4289C14.7373 16.4796 14.868 16.5058 15 16.5058C15.132 16.5058 15.2627 16.4796 15.3846 16.4289C15.5064 16.3781 15.617 16.3037 15.71 16.21C15.8037 16.117 15.8781 16.0064 15.9289 15.8846C15.9796 15.7627 16.0058 15.632 16.0058 15.5C16.0058 15.368 15.9796 15.2373 15.9289 15.1154C15.8781 14.9936 15.8037 14.883 15.71 14.79L13.41 12.5L15.71 10.21C15.8037 10.117 15.8781 10.0064 15.9289 9.88456C15.9796 9.76271 16.0058 9.632 16.0058 9.49999C16.0058 9.36798 15.9796 9.23727 15.9289 9.11541C15.8781 8.99355 15.8037 8.88295 15.71 8.78999ZM19.07 5.42999C18.1475 4.47489 17.0441 3.71306 15.824 3.18897C14.604 2.66488 13.2918 2.38902 11.964 2.37748C10.6362 2.36595 9.31941 2.61896 8.09045 3.12177C6.86148 3.62458 5.74497 4.36711 4.80604 5.30604C3.86711 6.24497 3.12458 7.36148 2.62177 8.59045C2.11896 9.81941 1.86595 11.1362 1.87748 12.464C1.88902 13.7918 2.16488 15.104 2.68897 16.324C3.21306 17.5441 3.97489 18.6475 4.92999 19.57C5.85246 20.5251 6.9559 21.2869 8.17594 21.811C9.39598 22.3351 10.7082 22.611 12.036 22.6225C13.3638 22.634 14.6806 22.381 15.9095 21.8782C17.1385 21.3754 18.255 20.6329 19.1939 19.6939C20.1329 18.755 20.8754 17.6385 21.3782 16.4095C21.881 15.1806 22.134 13.8638 22.1225 12.536C22.111 11.2082 21.8351 9.89598 21.311 8.67594C20.7869 7.4559 20.0251 6.35246 19.07 5.42999ZM17.66 18.16C16.352 19.4694 14.6305 20.2848 12.7888 20.4673C10.947 20.6498 9.09899 20.188 7.55951 19.1608C6.02003 18.1335 4.88435 16.6042 4.34596 14.8335C3.80758 13.0627 3.89979 11.1601 4.6069 9.44977C5.31401 7.73941 6.59226 6.32714 8.22388 5.45355C9.8555 4.57996 11.7395 4.29912 13.555 4.65886C15.3705 5.0186 17.005 5.99668 18.1802 7.42645C19.3554 8.85622 19.9985 10.6492 20 12.5C20.0036 13.5513 19.7986 14.5928 19.3969 15.5644C18.9953 16.5359 18.4049 17.4181 17.66 18.16Z"
        fill={color}
      />
    </svg>
  );
};

IconClose.propTypes = {
  color: PropTypes.string,
};
