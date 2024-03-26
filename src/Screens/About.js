// About.js
import React from "react";
import { Col, Row } from "react-bootstrap";
import MarqueImage from "../Components/marqueImage";
import Skills from "../Components/Skills";
import Copyright from "../Components/copyright";
import "../App.css";

const About = () => {
  return (
    <>
      <div className="rounded-3 p-5" style={{ backgroundColor: "white" }}>
        <style>
          {`
          .page-title:after {
            content: "";
            position: absolute;
            width: 20vh;
            height: 3px;
            background-color: #088F8F;
            margin-top: 20px;
            margin-left: 15px;
          }

          
        `}
        </style>
        <h1 className="page-title resp-h1">About</h1>
        <span>
          <p className="text-muted resp-text">
            Experienced web developer proficient in HTML, CSS, and Bootstrap.
            Skilled in creating responsive designs with React-Bootstrap and
            basic knowledge of JavaScript, React.js, Python, Django, and MySQL.
            Passionate about crafting user-friendly web solutions and eager to
            contribute to innovative projects.
          </p>
        </span>

        <Col>
          <h2 className="resp-h2 mt-lg-5 mt-md-5 mt-2">Skills</h2>
          <Skills />
        </Col>

        <Row>
          <Col className="my-lg-5 my-md-5 my-2">
            <MarqueImage />
          </Col>
        </Row>

        <Row className="mt-5 d-flex">
          <Copyright />
        </Row>
      </div>
    </>
  );
};

export default About;
