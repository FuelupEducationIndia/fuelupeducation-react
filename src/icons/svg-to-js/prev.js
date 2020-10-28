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
      d="M14.298 5.98962L8.2876 12L14.298 18.0104L15.7122 16.5962L11.116 12L15.7122 7.40384L14.298 5.98962Z"
      // fill={fill}
    />
  </svg>
);

export default SVG;
