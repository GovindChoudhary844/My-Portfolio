// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import ProfileSidebar from "./Components/ProfileSidebar";
import Topmenu from "./Components/Topmenu";
import Navbar from "./Components/Navbar";
import About from "./Screens/About";
import Resume from "./Screens/Resume";
import Works from "./Screens/Works";
import Blogs from "./Screens/Blogs";
import Contact from "./Screens/Contact";

function App() {
  return (
    <>
      <style>
        {`
        .content{
          padding-left: 15px;
          padding-right: 15px;
          margin-top: 8%;
        }
      `}
      </style>
      <Router>
        <Container fluid className="background-image-container">
          <Topmenu />
          <Row className="content">
            <Col sm={12} md={12} lg={4} xl={3}>
              <ProfileSidebar />
            </Col>
            <Col sm={12} md={12} lg={8} xl={8} className="my-5 my-md-0 my-lg-0">
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/works" element={<Works />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Col>
            <Col sm={12} md={12} xl={1}>
              <Navbar />
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}

export default App;
