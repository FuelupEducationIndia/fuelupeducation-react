import React, { useState } from "react";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import { RadioButtonChecked } from "@material-ui/icons";

const Selectbar = ({
  option1,
  option2,
  option3,
  component1,
  component2,
  component3,
}) => {
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(true);

  const choosed1 = () => {
    setClicked1(true);
    setClicked2(false);
    setClicked3(false);
  };

  const choosed2 = () => {
    setClicked1(false);
    setClicked2(true);
    setClicked3(false);
  };

  const choosed3 = () => {
    setClicked1(false);
    setClicked2(false);
    setClicked3(true);
  };

  return (
    <div id="selectbar">
      <img src="" alt="" />
      <div className="container">
        <div className="choose-section">
          {option1 && (
            <span onClick={choosed1} className={clicked1 && "choosed"}>
              {clicked1 ? <RadioButtonChecked /> : <RadioButtonUncheckedIcon />}{" "}
              {option1}
            </span>
          )}
          {option2 && (
            <span onClick={choosed2} className={clicked2 && "choosed"}>
              {clicked2 ? <RadioButtonChecked /> : <RadioButtonUncheckedIcon />}{" "}
              {option2}
            </span>
          )}
          {option3 && (
            <span onClick={choosed3} className={clicked3 && "choosed"}>
              {clicked3 ? <RadioButtonChecked /> : <RadioButtonUncheckedIcon />}{" "}
              {option3}
            </span>
          )}
        </div>
        {(clicked1 && component1) ||
          (clicked2 && component2) ||
          (clicked3 && component3)}
      </div>
    </div>
  );
};

export default Selectbar;
