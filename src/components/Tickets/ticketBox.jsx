import React from "react";
import "../Styles/SASS/globalStyles.scss";

const TicketBox = ({ title, content, resolved, priority, date }) => {
  let priorityRate = "";

  //turn the numbers to a string base on the value
  if (priority === 1) {
    priorityRate = "low";
  } else if (priority === 2) {
    priorityRate = "med";
  } else {
    priorityRate = "high";
  }

  return (
    <>
      <div className="ticketDetails">
        <div className="ticketDetailsContainer">
          <div className="detailTicketTitle">
            <h1>{title}</h1>
            <p>
              <span>Raised on: </span>
              {date.toString()}
            </p>
          </div>
          <div className="detaileTicketContent">
            <p>{content}</p>
          </div>
          <div className="detailStatus">
            <div className={resolved ? "resolved" : "unresolved"}>
              {resolved ? "Resolved" : "Unresolved"}
            </div>
            <div className="statusRate">
              Priority: <span>{priorityRate}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketBox;
