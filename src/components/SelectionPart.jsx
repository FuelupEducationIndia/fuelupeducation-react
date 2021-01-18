import React from "react";
import CloudDownloadOutlinedIcon from "@material-ui/icons/CloudDownloadOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import CaptchaPart from "./CaptchaPart";

const SelectionPart = ({ flag, grades }) => {
  return (
    <div className="select-section">
      <form action="">
        <div className="part">
          <p className="title">Folder</p>
          <div className="selection">
            <select name="assignments" id="filter-assignements">
              <option value="a-1">Assignements 1</option>
              <option value="a-2">Assignements 2</option>
              <option value="a-3">Assignements 3</option>
            </select>
            <div className="docs">
              <p>
                <DescriptionOutlinedIcon />{" "}
                <span>LastName_Assign_AssignName.pdf</span>
              </p>
              <p>
                <DescriptionOutlinedIcon />{" "}
                <span>LastName_Assign_AssignName.pdf</span>
              </p>
              <p>
                <DescriptionOutlinedIcon />{" "}
                <span>LastName_Assign_AssignName.pdf</span>
              </p>
              <p>
                <DescriptionOutlinedIcon />{" "}
                <span>LastName_Assign_AssignName.pdf</span>
              </p>
              <p>
                <DescriptionOutlinedIcon />{" "}
                <span>LastName_Assign_AssignName.pdf</span>
              </p>
              <p>
                <DescriptionOutlinedIcon />{" "}
                <span>LastName_Assign_AssignName.pdf</span>
              </p>
              <p>
                <DescriptionOutlinedIcon />{" "}
                <span>LastName_Assign_AssignName.pdf</span>
              </p>
            </div>
            <button>
              {" "}
              <CloudDownloadOutlinedIcon /> Download all
            </button>
          </div>
        </div>
        <div className="part">
          <p className="title">Your Name</p>
          <div className="selection">
            <select name="name" id="filter-names">
              <option value="">Sarah William</option>
            </select>
          </div>
        </div>
        <div className="part">
          <p className="title">Student/Groups</p>
          <div className="selection">
            <select name="student" id="filter-students">
              <option value="">Select Student/Group Name</option>
            </select>
          </div>
        </div>
        {flag && (
          <div className="part">
            <p className="title">Feedback</p>
            <div className="selection">
              <textarea
                name=""
                id="feedback"
                className="feedback-input"
              ></textarea>
            </div>
          </div>
        )}
        {flag && (
          <div className="part">
            <p className="title">Flag</p>
            <div className="selection flag">
              <span className="box">
                <input type="radio" name="" id="improve" />
                <label htmlFor="#improve">Need to improve</label>
              </span>
              <span className="box">
                <input type="radio" name="" id="good" />
                <label htmlFor="#good">Good</label>
              </span>
            </div>
          </div>
        )}
        {grades && (
          <div className="part">
            <p className="title">Grade</p>
            <div className="selection">
              <input className="grade-input" type="text" name="" id="" />{" "}
              <span className="slash">/ </span>
              <input className="grade-input" type="text" name="" id="" />
            </div>
          </div>
        )}
        <CaptchaPart />
        <div className="part ">
          <p className="title"></p>
          <div className="selection submit">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SelectionPart;
