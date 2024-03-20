import React, { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Topmenu() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <style>
        {`
        .top-menu-button {
          border-radius: 50%;
          padding: 10px;
          background: #f2f2f2;
          box-shadow: -10px 10px 9px #929292, 10px -10px 9px #ffffff;
        }
        .name-logo {
          width: 200px;
        }

        .top-navlink-button {
          color: black;
          padding: 10px;
          padding-left: 25px;
        }
        .top-navlink-button:hover {
          color: blue;
          background-color: #dcdcdc;
          border-radius: 10px;
        }

        .top-navlink-button-icon {
          margin-right: 15px;
          font-size: 25px;
        }

        .menu-container {
          opacity: ${menuVisible ? "1" : "0"};
          visibility: ${menuVisible ? "visible" : "hidden"};
          transition: 0.5s, visibility 0.5s;
        }

        @media (max-width: 767.98px) {
          .top-navbar {
            height: 20vh !important;
          }
          .name-logo {
            width: 150px !important;
          }
        }
        `}
      </style>
      <Container fluid>
        <Container>
          <Row className="top-navbar" style={{ height: "30vh" }}>
            <Col xs={6} sm={6} md={6} className="d-flex align-items-center">
              <img
                src="Images\top-logo.png"
                alt="Govind"
                className="name-logo"
              />
            </Col>
            <Col
              xs={6}
              sm={6}
              md={6}
              className="d-flex align-items-center justify-content-end"
            >
              <div className="top-menu-button mx-3">
                <i className="fa-solid fa-moon-stars fa-2x"></i>
              </div>
              <div className="top-menu-button mx-3" onClick={toggleMenu}>
                <i className="fa-solid fa-bars fa-2x"></i>
              </div>
            </Col>
          </Row>
        </Container>
        {/* menu Item */}
        {menuVisible && (
          <Container fluid className="position-absolute z-3 menu-container">
            <Row className="bg-light rounded-3" style={{ width: "100%" }}>
              <Col sm={12} md={12}>
                <Nav className="flex-column">
                  <Nav.Link
                    as={Link}
                    to="/about"
                    className="top-navlink-button"
                  >
                    <span>
                      <i className="fa-light fa-user top-navlink-button-icon"></i>
                    </span>
                    About
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/resume"
                    className="top-navlink-button"
                  >
                    <span>
                      <i className="fa-light fa-file-lines top-navlink-button-icon"></i>
                    </span>
                    Resume
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/works"
                    className="top-navlink-button"
                  >
                    <span>
                      <i className="fa-light fa-briefcase top-navlink-button-icon"></i>
                    </span>
                    Works
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/blogs"
                    className="top-navlink-button"
                  >
                    <span>
                      <i className="fa-regular fa-blog top-navlink-button-icon"></i>
                    </span>
                    Blogs
                  </Nav.Link>
                  <Nav.Link
                    as={Link}
                    to="/contact"
                    className="top-navlink-button"
                  >
                    <span>
                      <i className="size-22 fa-light fa-address-book top-navlink-button-icon"></i>
                    </span>
                    Contact
                  </Nav.Link>
                </Nav>
              </Col>
            </Row>
          </Container>
        )}
      </Container>
    </>
  );
}

export default Topmenu;
