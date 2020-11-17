import React, { useEffect, useState } from "react";
import "../Styles/SASS/globalStyles.scss";
import { useSelector, useDispatch } from "react-redux";
import TicketBox from "../Tickets/ticketBox";
import { getDataAction, clickNewTicket } from "../Redux/Actions/actions";
import TicketWindow from "../Tickets/newTicketWindow";

const TicketPage = () => {
  const [sortPriority, setSortPriority] = useState(true);
  const [status, setStatus] = useState(true);
  const data = useSelector((state) => state.data);
  const newTicketWindow = useSelector((state) => state.newTicketWindow);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataAction());
  }, [data]);

  const handlePriority = () => {
    setSortPriority(!sortPriority);
    sortPriority
      ? data.sort((a, b) => a.priority - b.priority)
      : data.sort((a, b) => b.priority - a.priority);
  };
  const handleStatus = () => {
    setStatus(!status);
    status
      ? data.sort((a, b) => a.resolved - b.resolved)
      : data.sort((a, b) => b.resolved - a.resolved);
  };

  const handleNewTicket = () => {
    dispatch(clickNewTicket());
  };

  return (
    <>
      <TicketWindow />
      <div className="newTicket" onClick={handleNewTicket}>
        <h3>New Ticket</h3>
      </div>
      <div className="ticketPageContainer">
        <div className="ticketContainer">
          <div className="title">
            <h2>My Ticket</h2>
          </div>
          <div className="buttonContainer">
            <button onClick={handleStatus}>Status</button>
            <button onClick={handlePriority}>Priority</button>
            <button>Date Posted</button>
          </div>
        </div>
        {data.map((ticket, index) => {
          return (
            <TicketBox
              key={index}
              title={ticket.title}
              content={ticket.content}
              resolved={ticket.resolved}
              priority={ticket.priority}
              date={ticket.date}
            />
          );
        })}
      </div>
    </>
  );
};

export default TicketPage;
