// About.js
import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import MarqueImage from "../Components/marqueImage";
import Copyright from "../Components/copyright";

const About = () => {
  return (
    <div className="rounded-3 p-5" style={{ backgroundColor: "white" }}>
      <style>
        {`
          .page-title:after {
            content: "";
            position: absolute;
            width: 20vh;
            height: 3px;
            background-color: blue;
            margin-top: 20px;
            margin-left: 15px;

          }
        .Skills-button{
          background-color: white;
          color: black;
          margin-right: 10px;
          margin-top: 10px;
        }
        `}
      </style>
      <h1 className="page-title">About</h1>
      <span>
        <p className="text-muted">
          Experienced web developer proficient in HTML, CSS, and Bootstrap.
          Skilled in creating responsive designs with React-Bootstrap and basic
          knowledge of JavaScript, React.js, Python, Django, and MySQL.
          Passionate about crafting user-friendly web solutions and eager to
          contribute to innovative projects.
        </p>
      </span>

      <Col>
        <h2>Skills</h2>
        <Button className="Skills-button">HTML</Button>
        <Button className="Skills-button">CSS</Button>
        <Button className="Skills-button">JavaScript</Button>
        <Button className="Skills-button">Bootstrap</Button>
        <Button className="Skills-button">Python</Button>
        <Button className="Skills-button">Django</Button>
        <Button className="Skills-button">ReactJs</Button>
        <Button className="Skills-button">ReactJs-Bootstarp</Button>
        <Button className="Skills-button">MySql</Button>
        <Button className="Skills-button">WordPress</Button>
        <Button className="Skills-button">Photoshop</Button>
        <Button className="Skills-button">ChatGPT</Button>
        <Button className="Skills-button">GitHub</Button>
      </Col>

      <Row>
        <Col>
          <MarqueImage />
        </Col>
      </Row>

      <Row className="mt-5 d-flex">
        <Copyright />
      </Row>
    </div>
  );
};

export default About;
