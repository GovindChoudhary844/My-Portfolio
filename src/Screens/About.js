// About.js
import React from "react";

const About = () => {
  return (
    <div
      className="rounded-3 p-5"
      style={{ height: "100vh", backgroundColor: "white" }}
    >
      <style>
        {`
          .page-title:after {
            content: "";
            position: absolute;
            width: 200px;
            height: 3px;
            background-color: blue;
            margin-top: 25px;
            margin-left: 15px;

          }
        `}
      </style>
      <h1 className="page-title">About</h1>
    </div>
  );
};

export default About;
