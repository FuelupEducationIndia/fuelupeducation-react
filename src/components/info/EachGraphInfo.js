import React from "react";

function EachGraphInfo({ color, title }) {
  return (
    <div className="each-graph-info">
      <div className="round-sign" style={{backgroundColor:`${color}`}}></div>
      <span className='description'>{title}</span>
    </div>
  );
}

export default EachGraphInfo;
