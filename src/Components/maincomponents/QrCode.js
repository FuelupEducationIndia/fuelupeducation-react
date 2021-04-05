import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faQrcode } from "@fortawesome/free-solid-svg-icons";
import {useHistory} from "react-router-dom";
const QrCode = () => {
  const location =useHistory();
  const closeCard = () => {
    console.log("here");
    location.push("/");
  };
  return (
    <div className="cardShadow">
    <div className="card">
      <div className="upperCard">
        <h3>Your QR Code</h3>
        <FontAwesomeIcon className="fatimes" icon={faTimes} onClick={closeCard}/>
      </div>
      <div className="contentCard">
        <div>
          <h5>confirm your QR Code so Fuelup Education</h5>
          <h5>can verify it`s your</h5>
        </div>
        <div className="faqrcode">
        <FontAwesomeIcon className="faFingerprint" icon={faQrcode} />
        </div>
        <h5 className="touch">Scan the QR code here</h5>
      </div>
      <div className="cardTools">
         <div>
        <button className="done" onClick={closeCard}>Done</button>
        <button className="addFinger">Generate QR code</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default QrCode;
