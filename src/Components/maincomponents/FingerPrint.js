import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faFingerprint } from "@fortawesome/free-solid-svg-icons";
import {useHistory} from "react-router-dom";
const FingerPrint = () => {
  const location = useHistory();
  const closeCard = ()=>{
    console.log("here");
    location.push("/");
  }
  return (
    <div className="cardShadow">
      <div className="card">
        <div className="upperCard">
          <h3>Your Fingerprint</h3>
          <FontAwesomeIcon className="fatimes" icon={faTimes} onClick={closeCard}/>
        </div>
        <div className="contentCard">
          <div>
            <h5>confirm your fingerprint so Fuelup Education</h5>
            <h5>can verify it`s your</h5>
          </div>
          <div className="fingerprint">
          <FontAwesomeIcon className="faFingerprint" icon={faFingerprint} />
          </div>
          <h5 className="touch">Touch sensor</h5>
        </div>
        <div className="cardTools">
           <div>
          <button className="done" onClick={closeCard}>Done</button>
          <button className="addFinger">Add a FingerPrint</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FingerPrint;
