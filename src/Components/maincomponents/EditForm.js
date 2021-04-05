import React from "react";
import Avatar from "../../assets/images/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import SignInInfo from "./SignInInfo";
const EditForm = () => {
  return (
    <div className="EditForm">
      <h4 className="intro">Edit My Profile</h4>

      <div className="photoname">
        <div className="photo">
          <h4>Sarah William</h4>
          <div className="profileImg">
            <FontAwesomeIcon className="img" icon={faUser} />
          </div>
          <h5>change</h5>
        </div>
        <form>
          <label>Nick name</label>
          <input type="text" />
        </form>
      </div>

      <div className="contact">
        <h4>Contact</h4>
        <form>
          <div className="infoContainer">
            <div>
              <label>
                mailling Address <span>*</span>
              </label>
            </div>
            <div>
              <input type="text" />
            </div>
          </div>
          <div className="infoContainer">
            <div>
              <label>
                Email address<span>*</span>
              </label>
            </div>
            <div>
              <input type="text" />
            </div>
          </div>
          <div className="infoContainer">
            <div>
              <label>
                Mobile Phone<span>*</span>
              </label>
            </div>
            <div>
              <input type="text" />
            </div>
          </div>
        </form>
      </div>

      <div className="contact">
        <h4>Personal Information</h4>
        <form>
          <div className="infoContainer">
            <div>
              <label>
                Birth Date<span>*</span>
              </label>
            </div>
            <div className="selectInfo">
              <select id="Birth" name="Birth">
                <option value="january">january</option>
                <option value="feb">feb</option>
              </select>
              <select id="date" name="Birth">
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
          <div className="infoContainer">
            <div>
              <label>
                Gender<span>*</span>
              </label>
            </div>
            <div>
              <select id="gender" name="Birth">
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      <div className="contact">
        <h4>Education Information</h4>
        <form>
          <div className="infoContainer">
            <div>
              <label>
                Board/University <span>*</span>
              </label>
            </div>
            <div>
              <input type="text" />
            </div>
          </div>
          <div className="infoContainer">
            <div>
              <label>
                Major<span>*</span>
              </label>
            </div>
            <div>
              <input type="text" />
            </div>
          </div>
          <div className="infoContainer">
            <div>
              <label>
                Position<span>*</span>
              </label>
            </div>
            <div>
              <input type="text" />
            </div>
          </div>
        </form>
      </div>

      <div className="contact">
        <h4>Social Networks</h4>
        <form>
          <div className="infoContainer">
            <div>
              <label>Linkedin</label>
            </div>
            <div>
              <input type="text" />
            </div>
          </div>
          <div className="infoContainer">
            <div>
              <label>Google</label>
            </div>
            <div>
              <input type="text" />
            </div>
          </div>
          <div className="infoContainer">
            <div>
              <label>Facebook</label>
            </div>
            <div>
              <input type="text" />
            </div>
          </div>

          <div className="infoContainer">
            <div>
              <label>Instgram</label>
            </div>
            <div>
              <input type="text" />
            </div>
          </div>

          <div className="infoContainer">
            <div>
              <label>Twitter</label>
            </div>
            <div>
              <input type="text" />
            </div>
          </div>
        </form>
      </div>
      <SignInInfo />
    </div>
  );
};

export default EditForm;
