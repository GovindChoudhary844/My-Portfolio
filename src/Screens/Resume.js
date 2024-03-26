// Resume.js
import React from "react";
import { Col, Row } from "react-bootstrap";
import Skills from "../Components/Skills";
import Project1 from "../Components/Projects/Project1";
import Project2 from "../Components/Projects/Project2";
import Project3 from "../Components/Projects/Project3";
import Courses from "../Components/Courses";
import Copyright from "../Components/copyright";
import "../App.css";

const Resume = () => {
  return (
    <>
      <style>
        {`
          .page-title:after {
            content: "";
            position: absolute;
            width: 20vh;
            height: 3px;
            background-color: #088F8F;
            margin-top: 25px;
            margin-left: 15px;
          }
          hr {
            height: 3px;
            background-color: #088F8F;
          }

          .hr-small {
            border: none;
            overflow: visible;
            text-align: center;
            height: 3px;
            width: 80%
          }
          
          .hr-small::after {
            background: #fff;
            content: '§';
            padding: 0 4px;
            position: relative;
            top: -13px;
          }
      `}
      </style>
      <div className="rounded-3 p-5" style={{ backgroundColor: "white" }}>
        <h1 className="page-title resp-h1">Resume</h1>
        <h2 className="mt-5">Profile</h2>
        <hr />
        <p className="resp-text">
          Dedicated web developer equipped with a strong grasp of HTML, CSS, and
          Bootstrap. Skilled in implementing responsive design using
          React-Bootstrap, with fundamental proficiency in JavaScript, React.js,
          Python, Django, and MySQL. Eager to apply technical knowledge and
          contribute to the dynamic evolution of innovative and user-friendly
          web solutions.
        </p>

        <Col>
          <h2 className="resp-h2 mt-lg-5 mt-md-5 mt-2">Skills</h2>
          <hr />
          <Skills />
        </Col>
        <Col>
          <h2 className="resp-h2 mt-lg-5 mt-md-5 mt-2">Projects</h2>
          <hr />
          <Project1 />
          <hr className="hr-small" />
          <Project2 />
          <hr className="hr-small" />
          <Project3 />
        </Col>
        <Col>
          <h2 className="resp-h2 mt-lg-5 mt-md-5 mt-2">Courses</h2>
          <hr />
          <Courses />
          <hr />
        </Col>

        <Row className="mt-5 d-flex">
          <Copyright />
        </Row>
      </div>
    </>
  );
};

export default Resume;
