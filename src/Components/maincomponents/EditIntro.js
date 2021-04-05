import React from "react";
import woman from "../../assets/images/woman.jpeg";

const EditIntro = () => {
  return (
    <div className="EditIntro">
      <div className="leftContent">
        <h1>Welcome Sheela!</h1>
        <h3>check what`s up with your Schedule... </h3>
      </div>

      <div className="img">
        <img src={woman}  alt="woman sit on table" />
      </div>
    </div>
  );
};

export default EditIntro;
