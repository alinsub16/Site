import React from "react";
import "bootstrap";
import "./Nav.css";
import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="container ">
          <a className="navbar-brand" href="#">
            CHRIS
          </a>
          <button
            className="navbar-toggler shadow-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className=" sidebar  offcanvas offcanvas-end bg-transparent "
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header text-white  border-bottom">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                CHRIS
              </h5>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body ">
              <ul className="navbar-nav justify-content-end  flex-grow-1 pe-3">
                <li className="nav-item ">
                  <Link className="nav-link text-white" to='Home' >Home</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link text-white" to='About_Container'  >About</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link text-white" to='Skills_container'>Skills</Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link text-white" to='Message_Container'>Message</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
