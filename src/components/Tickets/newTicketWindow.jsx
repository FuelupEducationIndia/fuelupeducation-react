import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postNewTicket, clickNewTicket } from "../Redux/Actions/actions";
import "../Styles/SASS/globalStyles.scss";

const TicketWindow = () => {
  const dispatch = useDispatch();
  const newTicketWindow = useSelector((state) => state.newTicketWindow);
  //make a new data for a newticket
  const [newTicketData, setNewTicketData] = useState({
    title: "",
    content: "",
    resolved: false,
    priority: null,
    date: new Date(),
  });

  const data = useSelector((state) => state.data);

  //handle the title so the user can type
  const handleTitileInput = (e) => {
    setNewTicketData({
      ...newTicketData,
      title: e.target.value,
    });
  };

  //handling the three buttons
  const handleButtonLow = () => {
    setNewTicketData({ ...newTicketData, priority: 1 });
  };
  const handleButtonMed = () => {
    setNewTicketData({ ...newTicketData, priority: 2 });
  };
  const handleButtonHigh = () => {
    setNewTicketData({ ...newTicketData, priority: 3 });
  };

  //handling the description input
  const handleDescription = (e) => {
    setNewTicketData({
      ...newTicketData,
      content: e.target.value,
    });
  };

  //to post the new ticket and to reset the data
  const handlePostNewTicket = () => {
    dispatch(postNewTicket(newTicketData));
    dispatch(clickNewTicket());
    setNewTicketData({
      title: "",
      content: "",
      resolved: false,
      priority: null,
      date: new Date(),
    });
  };

  //close and reset the data
  const handleClose = () => {
    dispatch(clickNewTicket());
    setNewTicketData({
      title: "",
      content: "",
      resolved: false,
      priority: null,
      date: new Date(),
    });
  };

  console.log(newTicketData);
  return (
    <>
      {newTicketWindow && (
        <div className="ticketBoxContainer">
          <div className="close" onClick={handleClose}>
            <span>Close</span>
          </div>
          <div className="inputsContainer">
            <div className="newTitle">
              <span>New Title</span>
              <textarea
                type="textarea"
                value={newTicketData.title}
                onChange={handleTitileInput}
              />
            </div>
            <div className="priority">
              <span>Priority</span>
              <button
                value="1"
                className={
                  newTicketData.priority === 1 ? "active" : "not-active"
                }
                onClick={handleButtonLow}
              >
                <p className="low">Low</p>
              </button>
              <button
                value="2"
                className={
                  newTicketData.priority === 2 ? "active" : "not-active"
                }
                onClick={handleButtonMed}
              >
                <p className="med">Medium</p>
              </button>
              <button
                value="3"
                className={
                  newTicketData.priority === 3 ? "active" : "not-active"
                }
                onClick={handleButtonHigh}
              >
                <p className="high">High</p>
              </button>
            </div>
            <div className="description">
              <span>Description</span>
              <textarea
                type="textarea"
                value={newTicketData.content}
                onChange={(e) => handleDescription(e)}
              />
            </div>
            <div className="postTicket">
              <button onClick={handlePostNewTicket}>Post Ticket</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TicketWindow;
