import React from "react";
import SelectionPart from "./SelectionPart";
import Summary from "./Summary";

const Grades = () => {
  return (
    <div className="grades">
      <SelectionPart grades />
      <Summary title="Grades" grades />
    </div>
  );
};

export default Grades;
