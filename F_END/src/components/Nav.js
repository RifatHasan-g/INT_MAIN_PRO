import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <h1>Navbar</h1>

      <div className="navlink">
        <NavLink activeClass="active" className="link" to="/Home">
          Home
        </NavLink>
        <NavLink activeClass="active" className="link" to="/About">
          About
        </NavLink>
        <NavLink activeClass="active" className="link" to="/Contact">
          Contact
        </NavLink>
        <NavLink activeClass="active" className="link" to="/AddUser">
          AddUser
        </NavLink>
      </div>
    </div>
  );
};

export default Nav;
