import React from 'react';

const SVG = ({
  style = {},
  fill = 'white',
  width = '100%',
  className = '',
  viewBox = '0 0 24 24',
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM4.79999 11.4667C4.79999 7.78476 8.02353 4.8 12 4.8C15.9764 4.8 19.2 7.78476 19.2 11.4667C19.2 15.1486 15.9764 18.1333 12 18.1333C11.2821 18.1333 10.589 18.0356 9.93475 17.8545L7.48322 19.2V16.6581C5.84698 15.436 4.79999 13.5647 4.79999 11.4667Z"
      // fill="#F1F4F6"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.5263 13.6001L10.7215 11.7278L7.20001 13.6001L11.0737 9.6001L12.9225 11.4724L16.4 9.6001L12.5263 13.6001Z"
      // fill="#F1F4F6"
    />
  </svg>
);

export default SVG;
