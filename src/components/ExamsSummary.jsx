import React from "react";
import { Avatar } from "@material-ui/core";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";

const ExamsSummary = () => {
  return (
    <div className="exams-summary">
      <h3>Exams Summary</h3>
      <div className="wrapper">
        <table>
          <tr>
            <th>S.No.</th>
            <th>Exam Title</th>
            <th>Course Code</th>
            <th>Questions</th>
            <th>Creator</th>
            <th>Collaborators</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <div className="exam-title">
                <span>Trigonometry</span> <span>Mathmatics</span> <br />
                <span>Practice Exam</span>
              </div>
            </td>
            <td>SC-03</td>
            <td>20</td>
            <td>
              <Avatar />
            </td>
            <td>
              <Avatar />
            </td>
            <td className="status">Pending</td>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <div className="exam-title">
                <span>Trigonometry</span> <span>Mathmatics</span> <br />
                <span>Practice Exam</span>
              </div>
            </td>
            <td>SC-03</td>
            <td>20</td>
            <td>
              <Avatar />
            </td>
            <td>
              <Avatar />
            </td>
            <td className="status">Pending</td>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <div className="exam-title">
                <span>Trigonometry</span> <span>Mathmatics</span> <br />
                <span>Practice Exam</span>
              </div>
            </td>
            <td>SC-03</td>
            <td>20</td>
            <td>
              <Avatar />
            </td>
            <td>
              <Avatar />
            </td>
            <td className="status">Pending</td>
          </tr>
          <tr>
            <td>1</td>
            <td>
              <div className="exam-title">
                <span>Trigonometry</span> <span>Mathmatics</span> <br />
                <span>Practice Exam</span>
              </div>
            </td>
            <td>SC-03</td>
            <td>20</td>
            <td>
              <Avatar />
            </td>
            <td>
              <Avatar />
            </td>
            <td className="status">Pending</td>
          </tr>
        </table>
        <div className="btn-wrapper">
          <button>
            <NavigateBefore />
          </button>
          <button>
            <NavigateNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamsSummary;
