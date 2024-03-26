import React from "react";
import { Col, Button } from "react-bootstrap";

function Skills() {
  return (
    <>
      <style>
        {`
        .Skills-button{
          background-color: white;
          color: black;
          margin-right: 10px;
          margin-top: 10px;
          border: 1px solid #088F8F;
        }
        .Skills-button:hover{
          background-color: #088F8F;
          color: white;
        }
      `}
      </style>
      <Col>
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
    </>
  );
}

export default Skills;
