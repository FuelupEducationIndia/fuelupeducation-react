import React from "react";

import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";

import Group37 from "../assets/images/Group37.png";
import Group54 from "../assets/images/Group54.png";
import Group57 from "../assets/images/Group57.png";
import Image2 from "../assets/images/Image2.png";

import Section from "../components/Layout/Section";

const LandingPage = () => {
  const heroStyle = {
    backgroundImage: `url(${Group37})`,
  };

  return (
    <>
      <div className="landing">
        <div className="landingToolbar">
          <div className="leftToolbar">
            <h2 className="landing__logo">
              Fuel <br /> Education
            </h2>
            <ul className="landingToolbar__list">
              <li className="landingToolbar__item">
                <Link to="/" className="landingToolbar__link">
                  Courses
                  <IoMdArrowDropdown />
                </Link>
              </li>
              <li className="landingToolbar__item">
                <Link to="/" className="landingToolbar__link">
                  Subjects
                  <IoMdArrowDropdown />
                </Link>
              </li>
              <li className="landingToolbar__item">
                <Link to="/" className="landingToolbar__link">
                  For Kids
                </Link>
              </li>
              <li className="landingToolbar__item">
                <Link to="/" className="landingToolbar__link">
                  Team
                </Link>
              </li>
            </ul>
          </div>

          <ul className="landingToolbar__list--auth">
            {" "}
            <li className="landingToolbar__item">
              <Link to="/" className="landingToolbar__link">
                Sign In
              </Link>
            </li>
            <li className="landingToolbar__item">
              <Link to="/" className="landingToolbar__link">
                Start learning
              </Link>
            </li>{" "}
          </ul>
          <div className="imageBackground"></div>
        </div>
        <div className="landing__text">
          <div className="landing__text--content">
            <h1 className="landing__text--heading">
              An Educational Product like no other
            </h1>
            <p className="landing__text--sub">
              and that's what we call a Digital Ecosystem
            </p>
          </div>
        </div>
      </div>
      <div className="sections">
        <Section
          position="left"
          heading="Interactive quizzes, tests & exams"
          text="Videos that help you visualize each concept, making it easier to understand. Clearer concepts lead to higher scores!"
          btn="Start Learning"
        />
        <Section
          position="right"
          heading="Mapped to the Syllabus"
          text="Learning journeys are mapped to a student's grade & syllabus. Each chapter comprises small concepts that are stitched together with relevant syllabus."
          btn="Start Learning"
        />
        <Section
          position="left"
          heading="Engaging in Group Discussions"
          text="Crafted to evoke curiosity, this all-new feature will develop student’s critical thinking abilities and strengthen their understanding of core concept"
          btn="Start Learning"
        />
        <Section
          position="right"
          heading="Reports & analytics on student’s performance"
          text="Rich reports are used to guide progress. These great reports are presented to students & parents/guardians via periodic email & SMS"
          btn="Start Learning"
        />
        <Section
          position="left"
          heading="Start achieving academic excellence"
          text="Download lessons & learn anytime, anywhere with our mobile application"
          asset={true}
          image={Image2}
          android={Group54}
          apple={Group57}
        />
      </div>
    </>
  );
};

export default LandingPage;
