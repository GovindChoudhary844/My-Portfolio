import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "../../App.css";

function Project1() {
  return (
    <div>
      <style>
        {`
        .italic{
          font-style: italic;
        }
        `}
      </style>
      <Nav.Link as={Link} to="/Flower-Shop">
        <h5 className="resp-h5">Flower Shop (12/2023 – 02/2024)</h5>
      </Nav.Link>
      <p className="text-muted italic resp-text">
        Responsive Django and React.js Flower Shop
      </p>
      <p className="resp-text">
        Explore our Online Flower Shop – an easy-to-use website where you can
        buy beautiful flowers. Built using Django and React JS, it's super cool
        and responsive. Securely sign in and perform various actions like adding
        or removing products. The admin dashboard neatly displays all user and
        order details. Ensured the website looks good and works smoothly on any
        device. Handling users is easy – Admin can add or remove them and even
        set up multiple admins directly from the website. Users can also change
        their basic details like Username, Email, and password from the website
        itself. It's not just a website; it's a delightful place to pick and
        order your favorite flowers!
      </p>
    </div>
  );
}

export default Project1;
