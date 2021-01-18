import React from "react";
import SelectionPart from "./SelectionPart";
import Summary from "./Summary";

const Reviews = () => {
  return (
    <div className="reviews">
      <SelectionPart flag />
      <Summary title="Reviews" instructors feedback flag />
    </div>
  );
};

export default Reviews;
