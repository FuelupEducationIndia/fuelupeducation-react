import React from 'react';

const SVG = ({
  style = {},
  fill = 'white',
  width = '100%',
  className = '',
  viewBox = '0 0 16 16',
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
      d="M10.5834 7.33333L7.99669 9.91999L5.41002 7.33333C5.28547 7.20849 5.11637 7.13834 4.94002 7.13834C4.76368 7.13834 4.59458 7.20849 4.47002 7.33333C4.21002 7.59333 4.21002 8.01333 4.47002 8.27333L7.53003 11.3333C7.79002 11.5933 8.21002 11.5933 8.47003 11.3333L11.53 8.27333C11.79 8.01333 11.79 7.59333 11.53 7.33333C11.27 7.07999 10.8434 7.07333 10.5834 7.33333Z"
      // fill={fill}
    />
  </svg>
);

export default SVG;
