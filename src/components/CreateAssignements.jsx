import React from "react";
import CaptchaPart from "./CaptchaPart";
import FileInput from "./Fileinput";
import Summary from "./Summary";

const CreateAssignements = () => {
  return (
    <div className="create-assignements">
      <div className="select-section">
        <form action="">
          <div className="part">
            <p className="title">Class/Semester</p>
            <div className="selection">
              <select name="name" id="filter-names">
                <option value="">Semester 6</option>
              </select>
            </div>
          </div>
          <div className="part">
            <p className="title">Course</p>
            <div className="selection">
              <select name="name" id="filter-names">
                <option value="">SS2021-The Solar System</option>
              </select>
            </div>
          </div>
          <div className="part">
            <p className="title">Your Name</p>
            <div className="selection">
              <select name="name" id="filter-names">
                <option value="">Instructor Name</option>
              </select>
            </div>
          </div>
          <div className="part">
            <p className="title">Student/Group</p>
            <div className="selection">
              <select name="name" id="filter-names">
                <option value="">Select Student/Group Name</option>
              </select>
            </div>
          </div>
          <div className="part">
            <p className="title">Assignement Type</p>
            <div className="selection">
              <select name="name" id="filter-names">
                <option value="">Project Report</option>
              </select>
            </div>
          </div>
          <div className="part">
            <p className="title">Grade</p>
            <div className="selection">
              <input
                className="set-grade"
                type="text"
                placeholder="Type grade here"
              />
            </div>
          </div>
          <div className="part">
            <p className="title">Due</p>
            <div className="selection">
              <select name="name" id="filter-names">
                <option value="">Choose your due</option>
              </select>
            </div>
          </div>
          <div className="part">
            <p className="title">Assignement Title</p>
            <div className="selection">
              <input
                className="set-assignement"
                type="text"
                placeholder="Type title here"
              />
            </div>
          </div>
          <div className="part">
            <p className="title">Overview</p>
            <div className="selection">
              <textarea
                name=""
                id="feedback"
                className="feedback-input"
              ></textarea>
            </div>
          </div>
          <div className="part">
            <p className="title">Notes</p>
            <div className="selection">
              <textarea
                name=""
                id="feedback"
                className="feedback-input"
              ></textarea>
            </div>
          </div>
          <div className="part">
            <p className="title">Deliverable</p>
            <div className="selection">
              <textarea
                name=""
                id="feedback"
                className="feedback-input"
              ></textarea>
            </div>
          </div>
          <div className="part">
            <p className="title">Upload Document</p>
            <div className="selection">
              <FileInput
                accept="image/png, image/jpg, image/jpeg, image/gif"
                multiple
                name="images"
              />
            </div>
          </div>
          <CaptchaPart />
          <div className="part ">
            <p className="title"></p>
            <div className="selection submit">
              <button type="submit">Upload</button>
            </div>
          </div>
        </form>
      </div>
      <Summary title="Assignments" instructors type />
    </div>
  );
};

export default CreateAssignements;
