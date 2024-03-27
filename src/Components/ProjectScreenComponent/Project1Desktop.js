import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Project1Desktop() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  // Array of image URLs
  const imageUrls = [
    "Images/Projects/Project1-Desktop-SS/1.png",
    "Images/Projects/Project1-Desktop-SS/2.png",
    "Images/Projects/Project1-Desktop-SS/3.png",
    "Images/Projects/Project1-Desktop-SS/4.png",
    "Images/Projects/Project1-Desktop-SS/5.png",
    "Images/Projects/Project1-Desktop-SS/6.png",
    "Images/Projects/Project1-Desktop-SS/7.png",
    "Images/Projects/Project1-Desktop-SS/8.png",
    "Images/Projects/Project1-Desktop-SS/9.png",
    "Images/Projects/Project1-Desktop-SS/10.png",
    "Images/Projects/Project1-Desktop-SS/11.png",
    "Images/Projects/Project1-Desktop-SS/12.png",
    "Images/Projects/Project1-Desktop-SS/13.png",
    "Images/Projects/Project1-Desktop-SS/14.png",
    "Images/Projects/Project1-Desktop-SS/15.png",
    "Images/Projects/Project1-Desktop-SS/16.png",
    "Images/Projects/Project1-Desktop-SS/17.png",
    "Images/Projects/Project1-Desktop-SS/18.png",
    "Images/Projects/Project1-Desktop-SS/19.png",
    "Images/Projects/Project1-Desktop-SS/20.png",
    "Images/Projects/Project1-Desktop-SS/21.png",
    "Images/Projects/Project1-Desktop-SS/22.png",
  ];

  return (
    <>
      <Row>
        <Col>
          <h1 className="resp-h2">Desktop Mode</h1>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col sm={12} md={12} lg={12} xl={6} xxl={6}>
          <video controls width="100%" height="auto" className="rounded-3">
            <source
              src="Images/Projects/Project1-Desktop.mp4"
              type="video/mp4"
            />
          </video>
        </Col>
        <Col
          sm={12}
          md={12}
          lg={12}
          xl={6}
          xxl={6}
          className="d-flex align-items-center"
        >
          <p className="resp-text">
            Welcome to our delightful Online Flower Shop, where the process of
            selecting and ordering your favorite flowers is made effortless.
            Leveraging the powerful combination of Django and React JS, we've
            crafted a user-friendly website that ensures a seamless and
            enjoyable experience for our customers.
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <hr />
        <Col>
          <Slider {...settings}>
            {imageUrls.map((imageUrl, index) => (
              <div key={index} className="p-1">
                <img src={imageUrl} alt="" className="img-fluid" />
              </div>
            ))}
          </Slider>
        </Col>
      </Row>
    </>
  );
}

export default Project1Desktop;
