import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import ProfileSidebar from "./Components/ProfileSidebar";
import Navbar from "./Components/Navbar";
import About from "./Screens/About";
import Resume from "./Screens/Resume";
import Works from "./Screens/Works";
import Blogs from "./Screens/Blogs";
import Contact from "./Screens/Contact";

function App() {
  return (
    <Router>
      <div className="background-image-container">
        <Row className="p-5">
          <Col sm={12} md={12} lg={3} className="rounded-5">
            <ProfileSidebar />
          </Col>
          <Col md={8}>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/works" element={<Works />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Col>
          <Col md={1}>
            <Navbar />
          </Col>
        </Row>
      </div>
    </Router>
  );
}

export default App;
