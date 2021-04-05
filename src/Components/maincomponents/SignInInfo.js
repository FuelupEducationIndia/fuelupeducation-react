import React from "react";
import ToggleSwitch from "./ToggleSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFingerprint,
  faUser,
  faQrcode,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const SignInInfo = () => {
  return (
    <div className="SignInInfo">
      <h4>Sign in information</h4>
      <div className="content">
        <div className="contentLabels">
          <h4>Fingerprint</h4>
          <h4>Face ID</h4>
          <h4>QR Code</h4>
        </div>
        <div>
          <div className="contentTools">
            <Link to="/fingerprint">
              <div className="toSign">
                <FontAwesomeIcon icon={faFingerprint} />
                <h5>Fingerprint</h5>
              </div>
            </Link>

            <ToggleSwitch />
          </div>
          <div className="contentTools">
            <Link to="/faceid">
              <div className="toSign">
                <FontAwesomeIcon icon={faUser} />
                <h5>Face Id</h5>
              </div>
            </Link>
            <ToggleSwitch />
          </div>
          <div className="contentTools">
            <Link to="/qrcode">
              <div className="toSign">
                <FontAwesomeIcon icon={faQrcode} />
                <h5>QR Code</h5>
              </div>
            </Link>
            <ToggleSwitch />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInInfo;
