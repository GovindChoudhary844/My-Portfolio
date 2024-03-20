// ProfileSidebar.js
import React from "react";
import { Container, Row, Col, Button, Card, ListGroup } from "react-bootstrap";
import "../App.css";

function ProfileSidebar() {
  return (
    <>
      <style>
        {`
          .profile-image {
            aspect-ratio: 5/4;
            margin-top: -90px;
          }
          .profile-image-span {
            display: flex;
            justify-content: center;
          }

          .bg-github {
            background-color: rgb(220, 220, 220); 
            border-radius: 15px;
            transition: 0.5s;

          }
          .bg-github:hover {
            background-color: #131418; 
            border-radius: 15px;
          }
          .bg-github i{
            color: #131418;
            transition: transform 0.2s ease-in-out;             
          } 
          .bg-github i:hover {
            transform: scale(1.1);
            color: #fff; 
          }

          .bg-twitter {
            background-color: rgb(220, 220, 220); 
            border-radius: 15px;
            transition: 0.5s;
          }
          .bg-twitter:hover {
            background-color: #1DA1F2; 
            border-radius: 15px;
          }
          .bg-twitter i{
            color: #1DA1F2;
            transition: transform 0.2s ease-in-out;
          }
          .bg-twitter i:hover{
            transform: scale(1.1); 
            color: #fff;
          }

          .bg-linkedin {
            background-color: rgb(220, 220, 220); 
            border-radius: 15px;
            transition: 0.5s;
          }
          
          .bg-linkedin:hover {
            background-color: #0A66C2; 
            border-radius: 15px;
          }
          
          .bg-linkedin i {
            color: #0A66C2;
            transition: transform 0.5s ease-in-out;
          }
          
          .bg-linkedin i:hover {
            transform: scale(1.1);
            color: #fff;
          }
          
          .icon {
            transition: transform 0.5s ease-in-out;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .icon i:hover{
            transform: scale(1.1);
          }

          @media (max-width: 575.98px) {
            .profile-image {
              margin-top: 40px;
              margin-bottom: 10px;
            }
            .profile-feild{
              width: 80% !important;
            }
            .my-email{
              font-size: 13px !important;
            }
          }
          
          /* Styles for screens between 576px and 767.98px (small devices) */
          @media (min-width: 576px) and (max-width: 767.98px) {
            .profile-image {
              margin-top: 40px;
              margin-bottom: 10px;
            }
            .profile-feild{
              width: 80% !important;
            }
            .my-email{
              font-size: 13px !important;
            }
          }
          @media (min-width: 768px) and (max-width: 991.98px) {
            .profile-image {
              margin-top: 40px;
              margin-bottom: 10px;
            }
            .profile-feild{
              width: 30% !important;
            }
            .my-email{
              font-size: 13px !important;
            }
          }
        `}
      </style>
      <div>
        <Row>
          <Col>
            <div className="rounded-3 p-3" style={{ backgroundColor: "white" }}>
              <span className="profile-image-span">
                <img
                  src="Images/photo.jpg"
                  alt="profile"
                  width={200}
                  className="profile-image rounded-5"
                />
              </span>
              <h3 className="text-center my-3">Govind Choudhary</h3>
              <span className="d-flex justify-content-center align-items-center">
                <p
                  className="text-center d-flex justify-content-center align-items-center profile-feild my-3"
                  style={{
                    width: "50%",
                    backgroundColor: "#DCDCDC",
                    borderRadius: "10px",
                    height: "35px",
                  }}
                >
                  <strong>Web Developer</strong>
                </p>
              </span>

              <Row className="social-icons d-flex my-3">
                <Col className="d-flex justify-content-center gap-2">
                  <a href="#" className="bg-github">
                    <i
                      className="fa-brands fa-github p-3"
                      style={{ fontSize: "1.5em" }}
                    ></i>
                  </a>
                  <a href="#" className="bg-twitter">
                    <i
                      className="fa-brands fa-twitter p-3"
                      style={{ fontSize: "1.5em" }}
                    ></i>
                  </a>
                  <a href="#" className="bg-linkedin">
                    <i
                      className="fa-brands fa-linkedin-in p-3"
                      style={{ fontSize: "1.5em" }}
                    ></i>
                  </a>
                </Col>
              </Row>
              <Row className="my-3 mt-5">
                <Col>
                  <Card className="rounded-5 bg-blue">
                    <ListGroup
                      variant="flush"
                      className="rounded-5 profile-sidebar-content"
                    >
                      <ListGroup.Item>
                        <Row>
                          <Col xs={2} sm={2} md={2} className="icon">
                            <i className="fa-solid fa-phone"></i>
                          </Col>
                          <Col>
                            <span
                              className="text-muted"
                              style={{ fontSize: "13px" }}
                            >
                              Phone
                            </span>
                            <br />
                            <a
                              href="tel:+91 8595677844"
                              style={{ textDecoration: "none" }}
                            >
                              {" "}
                              8595677844
                            </a>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col xs={2} sm={2} md={2} className="icon">
                            <i className="fa-solid fa-envelope"></i>
                          </Col>
                          <Col>
                            <span
                              className="text-muted"
                              style={{ fontSize: "13px" }}
                            >
                              Email
                            </span>
                            <br />
                            <span style={{ fontSize: "13px" }}>
                              <a
                                href="mailto:govindchoudhary844@gmail.com"
                                className="my-email"
                                style={{
                                  fontSize: "13px",
                                  textDecoration: "none",
                                }}
                              >
                                govindchoudhary844@gmail.com
                              </a>
                            </span>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col xs={2} sm={2} md={2} className="icon">
                            <i className="fa-solid fa-location-dot"></i>
                          </Col>
                          <Col>
                            <span
                              className="text-muted"
                              style={{ fontSize: "13px" }}
                            >
                              Address
                            </span>
                            <br />
                            New Delhi, Delhi
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-center align-items-center my-3 mb-5">
                  <Button
                    variant="primary"
                    href="https://drive.google.com/file/d/1w0aH_c1uko22L5h5m1qhb9Ilzdo8v9Y4/view?usp=sharing"
                    download
                  >
                    Download CV
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ProfileSidebar;
