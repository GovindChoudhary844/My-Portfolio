// App.js
import React from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import ProfileSidebar from "./Components/ProfileSidebar";

function App() {
  return (
    <div className="background-image-container">
      <Row className="p-5">
        <Col sm={12} md={12} lg={3} className="rounded-5">
          <ProfileSidebar />
        </Col>
        <Col md={8}></Col>
        <Col md={1}></Col>
      </Row>
    </div>
  );
}

export default App;
