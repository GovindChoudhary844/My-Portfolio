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
    <Router>
      <div className="background-image-container">
        <Topmenu />
        <Row className="p-lg-5 p-md-5 px-4">
          <Col sm={12} md={12} lg={3}>
            <ProfileSidebar />
          </Col>
          <Col
            sm={12}
            md={12}
            lg={7}
            className="bg-light rounded-3 m-lg-5 p-5 mt-5"
          >
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/works" element={<Works />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Col>
          <Col sm={12} md={12} lg={1} className="mt-5">
            <Navbar />
          </Col>
        </Row>
      </div>
    </Router>
  );
}

export default App;
