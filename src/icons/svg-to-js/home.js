import React from 'react';

const SVG = ({
  style = {},
  fill = 'white',
  width = '100%',
  height,
  className = '',
  viewBox = '0 0 20 18',
}) => (
  <svg
    width={width}
    style={style}
    height={`${height || width}`}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 9.5H0L10 0.5L20 9.5H17V17.5H11V11.5H9V17.5H3V9.5ZM15 7.69L10 3.19L5 7.69V15.5H7V9.5H13V15.5H15V7.69Z"
      // fill="black"
      // fill-opacity="0.54"
    />
  </svg>
);

export default SVG;
