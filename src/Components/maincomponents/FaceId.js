import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import faceDetected from "../../assets/images/face.jpg"
const FingerId = () => {
  const location = useHistory();
  const closeCard = () => {
    console.log("here");
    location.push("/");
  };
  return (
    <div className="cardShadow">
      <div className="card">
        <div className="upperCard">
          <h3>Your Face ID</h3>
          <FontAwesomeIcon
            className="fatimes"
            icon={faTimes}
            onClick={closeCard}
          />
        </div>
        <div className="contentCard">
          <div>
            <h5>confirm your Face ID so Fuelup Education</h5>
            <h5>can verify it`s your</h5>
          </div>
          <div className="face">
           <img src={faceDetected} alt="facedetect"/>
           <div className="check">
               <FontAwesomeIcon icon={faCheck}/>
           </div>
          </div>
          <h5 className="touch">Face detected</h5>
        </div>
        <div className="cardTools">
          <div>
            <button className="done" onClick={closeCard}>Done</button>
            <button className="addFinger">Change Face ID </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FingerId;
