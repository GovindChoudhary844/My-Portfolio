import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="col-xxl-1 d-xxl-block d-none bg-light">
      <div className="bostami-main-menu-wrap">
        <nav className="bastami-main-menu main_menu">
          <ul>
            <li className="active">
              <Link to="/about">
                <span>
                  <i
                    className="fa-light fa-user"
                    style={{ fontSize: "25px" }}
                  ></i>
                </span>
                About
              </Link>
            </li>
            <li className="false">
              <Link to="/resume">
                <span>
                  <i
                    className="fa-light fa-file-lines"
                    style={{ fontSize: "25px" }}
                  ></i>
                </span>
                Resume
              </Link>
            </li>
            <li className="false">
              <Link to="/works">
                <span>
                  <i
                    className="fa-light fa-briefcase"
                    style={{ fontSize: "25px" }}
                  ></i>
                </span>
                Works
              </Link>
            </li>
            <li className="false">
              <Link to="/blogs">
                <span>
                  <i
                    className="fa-brands fa-blogger"
                    style={{ fontSize: "25px" }}
                  ></i>
                </span>
                Blogs
              </Link>
            </li>
            <li className="false">
              <Link to="/contact">
                <span>
                  <i
                    className="size-22 fa-light fa-address-book"
                    style={{ fontSize: "25px" }}
                  ></i>
                </span>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
