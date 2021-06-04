import React from 'react';

const Overview = () => {
  let profileImage = require('../../../assets/images/pic1.png')
  return (
    <div className="overview">
      <div className="courseInstructor">
        <div className="instructor">
          <h2>Instructor</h2>
          <div className="profile">
            <div className="profileImg">
              <img src={profileImage.default} alt="" />
            </div>
            <div className="profileText">
              <h4>Sarah William</h4>
              <p>Instructor at FuelUp Education</p>
              <a href="">View on LinkedIn</a>
            </div>
          </div> 
        </div>
        <div className="course">
          <h2>Related to this Course</h2>
          <span><i class="fas fa-users"></i><b>Study Groups</b></span><br />
          <span><i class="far fa-file-alt"></i><b>Certificate</b></span>
          <a href=""><p><i>•</i> Show All</p></a>
        </div>
      </div>

      <div className="courseDetails">
        <div className="course-detail-head">
          <h2>Course Details</h2>
          <a href=""><i>•</i> Show All</a>
        </div>
        <h5>4h 40m <i>•</i>  Released: 2months ago</h5>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et quod nostrum deserunt?Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, non?</p>
      </div>

      <div className="objectives">
        <h2>Learning Objective</h2>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>

      <div className="language">
        <h2>Language</h2>
        <p>English</p>
      </div>

      <div className="board">
        <h2>Board/University</h2>
        <p>Rajasthan</p>
      </div>

      <div className="learner">
        <h2>Learners</h2>
        <div className="learnIcon">
          <div className="icon icon1"><i class="fas fa-user"></i></div>
          <div className="icon icon2">J</div>
          <div className="icon icon3">L</div>
          <span><b>50</b> members in this class.</span>
        </div>
      </div>
    </div>
  );
}

export default Overview;
