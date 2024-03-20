import React from "react";
import { Link } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav } from "react-bootstrap";

const Navbar = () => {
  return (
    <>
      <style>
        {`
      .navlink-button{
        background-color: #DCDCDC;
        padding: 15px;
        border-radius: 10px;
        text-align: center;
        transition: 0.5s;
        margin-bottom: 5px;
      }
      .navlink-button:hover{
        background-color: blue;
        color: white;
      }
      `}
      </style>
      <BootstrapNavbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="rounded-3"
      >
        <BootstrapNavbar.Toggle aria-controls="responsive-navbar-nav" />
        <BootstrapNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto flex-column p-2">
            <Nav.Link as={Link} to="/about" className="navlink-button">
              <span>
                <i
                  className="fa-light fa-user"
                  style={{ fontSize: "25px" }}
                ></i>
              </span>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/resume" className="navlink-button">
              <span>
                <i
                  className="fa-light fa-file-lines"
                  style={{ fontSize: "25px" }}
                ></i>
              </span>
              Resume
            </Nav.Link>
            <Nav.Link as={Link} to="/works" className="navlink-button">
              <span>
                <i
                  className="fa-light fa-briefcase"
                  style={{ fontSize: "25px" }}
                ></i>
              </span>
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
              Contact
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
    </>
  );
};

export default Navbar;
