import React from "react";
import { Link } from "@reach/router";

import "./NavBar.css";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = () => {
  return (
    <nav className="NavBar-container u-flex">
      <div className="NavBar-logo"/>
      <div className="NavBar-linkContainer u-flex">
        <Link to="/" className="NavBar-link-welcome"/>
        <Link to="/feed" className="NavBar-link-group"/>
        <Link to="/" className="NavBar-link-myacc"/>
        <Link to="/login" className="NavBar-link-login"/>
        <Link to="/profile/" className="NavBar-link-contact"/>
      </div>
    </nav>
  );
};

export default NavBar;
