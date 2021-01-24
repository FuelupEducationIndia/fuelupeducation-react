/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react'

const SVG = ({
  style = {},
  fill = 'red',
  width = '100%',
  className = '',
  viewBox = '0 0 485.106 485.106',
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    className={`svg-icon ${className || ''}`}>
    <defs>
      <clipPath id="6v01layxma">
        <path
          fill="#fff"
          stroke="#707070"
          d="M0 0H24V24H0z"
          transform="translate(1223 38)"
        />
      </clipPath>
    </defs>
    <g transform="translate(-1223 -38)">
      <path
        d="M21.1 19.1a3.729 3.729 0 0 1-1.133-1.543 17.855 17.855 0 0 1-1.178-7.057v-.027A6.81 6.81 0 0 0 14.78 4.3V2.674A2.674 2.674 0 0 0 12.111 0h-.221a2.674 2.674 0 0 0-2.67 2.674V4.3a6.81 6.81 0 0 0-4.009 6.2 17.855 17.855 0 0 1-1.181 7.056A3.729 3.729 0 0 1 2.9 19.1a.684.684 0 0 0-.375.777.715.715 0 0 0 .705.55h5.15a3.62 3.62 0 0 0 7.24 0h5.154a.715.715 0 0 0 .705-.55.684.684 0 0 0-.379-.777zM10.627 2.674a1.265 1.265 0 0 1 1.263-1.265h.221a1.265 1.265 0 0 1 1.263 1.265v1.168a6.81 6.81 0 0 0-2.747 0V2.674zM12 22.591a2.219 2.219 0 0 1-2.214-2.165h4.427A2.219 2.219 0 0 1 12 22.591zm2.831-3.574h-10a7.37 7.37 0 0 0 .368-.647 17.8 17.8 0 0 0 1.42-7.87 5.382 5.382 0 1 1 10.764 0v.026a17.766 17.766 0 0 0 1.42 7.842 7.375 7.375 0 0 0 .368.647z"
        transform="translate(1223 38)"
      />
    </g>
  </svg>
)

export default SVG
