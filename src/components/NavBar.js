import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./assets/images/glitched-logo.svg";

function NavBar(props) {

  const location = useLocation();

  return (
    <nav className="navbar navbar-expand navbar-dark"
      style={{ backgroundColor: "#71cae3" }}>
      <Link to="/Glitched-React/" 
        id="nav"
        className="navbar-brand"
        href="/Glitched-React/">
        <img
          src={logo}
          width="auto"
          height="50px"
          className="d-inline-block align-top"
          alt="glitched"
        />
      </Link>
      <div
        className="collapse navbar-collapse"
        id="navbarNav">
        <ul className="navbar-nav ml-auto">
        <span>{props.loginState}</span>
          <Link to="/Glitched-React/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
            <i className="fas fa-home d-inline-block align-top" style={{ width: "30px", height: "30px" }}

            ></i>

          </Link>

          {/* <Link to="/Glitched-React/messages" className={location.pathname === "/messages" ? "nav-link active" : "nav-link"}>
              <i className="far fa-comments d-inline-block align-top" style={{ width: "30px", height: "30px" }}

              ></i>

            </Link> */}

          <Link to="/Glitched-React/userinfo" className={location.pathname === "/userinfo" ? "nav-link active" : "nav-link"}>
            <i className="far fa-user-circle d-inline-block align-top" style={{ width: "30px", height: "30px" }}></i>
          </Link>
          <Link to="/logout" className={location.pathname === "/logout" ? "nav-link active" : "nav-link"}>
          <i
            onClick={props.signOut}
            className="fas fa-sign-out-alt d-inline-block align-top"
            style={{ width: "30px", height: "30px" }}
          ></i>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;