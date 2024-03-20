import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <>
      <style>
        {`
        .navlink-button{
          background-color: #DCDCDC;
          border-radius: 10px;
          text-align: center;
          transition: 0.5s;
          margin-bottom: 10px;
          padding: 15px;
        }
        .navlink-button:hover{
          background-color: blue;
          color: white;
        }
        
        @media (min-width: 575.98px) and (max-width: 1200px) {
          .navbar-col {
            display: none !important;
          }
        }
      `}
      </style>
      <div className="d-none d-md-block navbar-col">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
          className="rounded-3"
        >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto flex-column">
              <Nav.Link as={Link} to="/about" className="navlink-button mt-1">
                <span>
                  <i
                    className="fa-light fa-user"
                    style={{ fontSize: "25px" }}
                  ></i>
                </span>
                <br />
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/resume" className="navlink-button">
                <span>
                  <i
                    className="fa-light fa-file-lines"
                    style={{ fontSize: "25px" }}
                  ></i>
                </span>
                <br />
                Resume
              </Nav.Link>
              <Nav.Link as={Link} to="/works" className="navlink-button">
                <span>
                  <i
                    className="fa-light fa-briefcase"
                    style={{ fontSize: "25px" }}
                  ></i>
                </span>
                <br />
                Works
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs" className="navlink-button">
                <span>
                  <i
                    className="fa-regular fa-blog"
                    style={{ fontSize: "25px" }}
                  ></i>
                  <br />
                </span>
                Blogs
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="navlink-button">
                <span>
                  <i
                    className="size-22 fa-light fa-address-book"
                    style={{ fontSize: "25px" }}
                  ></i>
                </span>
                <br />
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default CustomNavbar;
