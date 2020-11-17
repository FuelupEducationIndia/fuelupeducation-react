import React, { useRef, useState, useEffect } from "react";
import "../Styles/SASS/globalStyles.scss";
import gsap from "gsap";
const ProfileSettings = ({ profile }) => {
  let profRef = useRef(null);

  useEffect(() => {
    if (profile) {
      gsap.fromTo(
        profRef,
        0.3,
        { opacity: 0, height: 0 },
        { opacity: 1, height: 150 }
      );
    }
  }, [profile]);
  return (
    <>
      {profile && (
        <div ref={(el) => (profRef = el)} className="profileSettingsContainer">
          <div className="profileIconTab">
            <h3>Settings</h3>
            <h3>Log out</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileSettings;
