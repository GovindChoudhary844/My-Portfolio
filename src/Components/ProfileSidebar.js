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
            // display: flex;

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
          
          
        `}
      </style>
      <Container
        className="rounded-5"
        style={{
          backgroundColor: "white",
          height: "100vh",
          marginTop: "50px",
        }}
      >
        <Row>
          <Col style={{ backgroundColor: "white" }} className="rounded-5">
            <Container className="contact-section">
              <span className="profile-image-span">
                <img
                  src="Images/photo.jpg"
                  alt="photo"
                  width={200}
                  className="profile-image rounded-5"
                />
              </span>
              <h3 className="text-center my-3">Govind Choudhary</h3>
              <span className="d-flex justify-content-center align-items-center">
                <p
                  className="text-center d-flex justify-content-center align-items-center"
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

              <Row className="social-icons my-4 ">
                <Col className="d-flex justify-content-center align-items-center">
                  <a href="#" className="bg-github">
                    <i
                      className="fa-brands fa-github p-3"
                      style={{ fontSize: "1.5em" }}
                    ></i>
                  </a>
                </Col>
                <Col className="d-flex justify-content-center">
                  <a href="#" className="bg-twitter">
                    <i
                      className="fa-brands fa-twitter p-3"
                      style={{ fontSize: "1.5em" }}
                    ></i>
                  </a>
                </Col>
                <Col className="d-flex justify-content-center">
                  <a href="#" className="bg-linkedin">
                    <i
                      className="fa-brands fa-linkedin-in p-3"
                      style={{ fontSize: "1.5em" }}
                    ></i>
                  </a>
                </Col>
              </Row>
              <Row className="my-4">
                <Col>
                  <Card className="rounded-5 bg-blue">
                    <ListGroup
                      variant="flush"
                      className="rounded-5 profile-sidebar-content"
                    >
                      <ListGroup.Item>
                        <Row>
                          <Col md={2}>
                            <i class="fa-solid fa-phone"></i>
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
                          <Col md={2}>
                            <i class="fa-solid fa-phone"></i>
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
                          <Col md={2}>
                            <i class="fa-solid fa-phone"></i>
                          </Col>
                          <Col>
                            <span
                              className="text-muted"
                              style={{ fontSize: "13px" }}
                            >
                              Phone
                            </span>
                            <br />
                            In Stock
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button
                    variant="primary"
                    href="/path/to/your/cv.pdf"
                    download
                  >
                    Download CV
                  </Button>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProfileSidebar;
