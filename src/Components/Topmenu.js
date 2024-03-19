import React, { useState } from "react";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

function Topmenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <style>
        {`
        .top-menu-button{
            border-radius: 50%;
            padding: 10px;
            background: #f2f2f2 ;
            box-shadow:  -10px 10px 9px #929292, 10px -10px 9px #ffffff;
        }
        .name-logo{
          width: 200px;
        }

        @media (max-width: 767.98px) {
          .top-navbar{
            height: 20vh !important;
          }
          .name-logo{
          width: 150px !important;
        }
        }
        
        `}
      </style>
      <Container>
        <Row className="top-navbar" style={{ height: "40vh" }}>
          <Col xs={6} sm={6} md={6} className="d-flex align-items-center">
            <img src="Images\top-logo.png" alt="Govind" className="name-logo" />
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
            <div>
              <Navbar />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Topmenu;
