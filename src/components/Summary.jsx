import React, { useState } from "react";
import {
  DeleteOutlined,
  NavigateBefore,
  NavigateNext,
} from "@material-ui/icons";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";

const Summary = ({ title, instructors, type, feedback, grades, flag }) => {
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <span className="extra-content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
    </span>
  );
  const linkName = readMore ? "...See less" : "... See more";

  return (
    <div className="summary">
      <h3 className="summary-title">{title} Summary</h3>
      <div className="summary-container">
        <table>
          <tr className="top-row">
            <th className="element">Courses</th>
            {instructors && <th className="element">instructors</th>}
            <th className="element">Student/Group</th>
            {type && <th className="element">Type</th>}
            <th className="element">Submissions</th>
            {feedback && <th className="element">feedback</th>}
            {flag && <th className="element">Flags</th>}
            {grades && <th className="element">Grades</th>}
            <th className="element">Status</th>
          </tr>
          <tr className="values-row">
            <td className="element">SS2021-The Solar System</td>
            {instructors && <td className="element">Sam Smith</td>}
            <td className="element">LastName FirstName</td>
            {type && <td className="element">Group Project</td>}
            <td className="element submission-text">
              <span>
                <DescriptionOutlinedIcon />
                LastName_Assign_AssignName.pdf
              </span>
            </td>
            {feedback && (
              <td className="element feedback-text">
                <div className="in-text">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia expedita non eos libero voluptatem quidem, ut
                    veniam
                    {readMore && extraContent}
                    <a
                      className="read-more-link"
                      onClick={() => {
                        setReadMore(!readMore);
                      }}
                    >
                      {linkName}
                    </a>
                  </span>
                </div>
              </td>
            )}
            {flag && <td className="element flag-text">Good</td>}
            {grades && <td className="element">26/30</td>}
            <td className="element">
              <span className="status-text">
                Pending <DeleteOutlined />{" "}
              </span>
            </td>
          </tr>
          <tr className="values-row">
            <td className="element">SS2021-The Solar System</td>
            {instructors && <td className="element">Sam Smith</td>}
            <td className="element">LastName FirstName</td>
            {type && <td className="element">Group Project</td>}
            <td className="element submission-text">
              <span>
                <DescriptionOutlinedIcon />
                LastName_Assign_AssignName.pdf
              </span>
            </td>
            {feedback && (
              <td className="element feedback-text">
                <div className="in-text">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia expedita non eos libero voluptatem quidem, ut
                    veniam
                    {readMore && extraContent}
                    <a
                      className="read-more-link"
                      onClick={() => {
                        setReadMore(!readMore);
                      }}
                    >
                      {linkName}
                    </a>
                  </span>
                </div>
              </td>
            )}
            {flag && <td className="element flag-text">Good</td>}
            {grades && <td className="element">26/30</td>}
            <td className="element">
              <span className="status-text">
                Pending <DeleteOutlined />{" "}
              </span>
            </td>
          </tr>
          <tr className="values-row">
            <td className="element">SS2021-The Solar System</td>
            {instructors && <td className="element">Sam Smith</td>}
            <td className="element">LastName FirstName</td>
            {type && <td className="element">Group Project</td>}
            <td className="element submission-text">
              <span>
                <DescriptionOutlinedIcon />
                LastName_Assign_AssignName.pdf
              </span>
            </td>
            {feedback && (
              <td className="element feedback-text">
                <div className="in-text">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia expedita non eos libero voluptatem quidem, ut
                    veniam
                    {readMore && extraContent}
                    <a
                      className="read-more-link"
                      onClick={() => {
                        setReadMore(!readMore);
                      }}
                    >
                      {linkName}
                    </a>
                  </span>
                </div>
              </td>
            )}
            {flag && <td className="element flag-text">Good</td>}
            {grades && <td className="element">26/30</td>}
            <td className="element">
              <span className="status-text">
                Pending <DeleteOutlined />{" "}
              </span>
            </td>
          </tr>
          <tr className="values-row">
            <td className="element">SS2021-The Solar System</td>
            {instructors && <td className="element">Sam Smith</td>}
            <td className="element">LastName FirstName</td>
            {type && <td className="element">Group Project</td>}
            <td className="element submission-text">
              <span>
                <DescriptionOutlinedIcon />
                LastName_Assign_AssignName.pdf
              </span>
            </td>
            {feedback && (
              <td className="element feedback-text">
                <div className="in-text">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia expedita non eos libero voluptatem quidem, ut
                    veniam
                    {readMore && extraContent}
                    <a
                      className="read-more-link"
                      onClick={() => {
                        setReadMore(!readMore);
                      }}
                    >
                      {linkName}
                    </a>
                  </span>
                </div>
              </td>
            )}
            {flag && <td className="element flag-text">Good</td>}
            {grades && <td className="element">26/30</td>}
            <td className="element">
              <span className="status-text">
                Pending <DeleteOutlined />{" "}
              </span>
            </td>
          </tr>
          <tr className="values-row">
            <td className="element">SS2021-The Solar System</td>
            {instructors && <td className="element">Sam Smith</td>}
            <td className="element">LastName FirstName</td>
            {type && <td className="element">Group Project</td>}
            <td className="element submission-text">
              <span>
                <DescriptionOutlinedIcon />
                LastName_Assign_AssignName.pdf
              </span>
            </td>
            {feedback && (
              <td className="element feedback-text">
                <div className="in-text">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia expedita non eos libero voluptatem quidem, ut
                    veniam
                    {readMore && extraContent}
                    <a
                      className="read-more-link"
                      onClick={() => {
                        setReadMore(!readMore);
                      }}
                    >
                      {linkName}
                    </a>
                  </span>
                </div>
              </td>
            )}
            {flag && <td className="element flag-text">Good</td>}
            {grades && <td className="element">26/30</td>}
            <td className="element">
              <span className="status-text">
                Pending <DeleteOutlined />{" "}
              </span>
            </td>
          </tr>
        </table>
        <div className="btn-wrapper">
          <button>
            {" "}
            <NavigateBefore /> Previous
          </button>
          <button>
            {" "}
            Next <NavigateNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
