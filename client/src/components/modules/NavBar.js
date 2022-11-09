import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import "../../utilities";
import "./NavBar.css";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */

const NavBar = (props) => {
    const userName=props.logstate? global.user.name : "游客";
  return (
    <nav className="NavBar-container u-flex">
      <div className="NavBar-logo"/>
      <div className="NavBar-linkContainer u-flex">
        <Link to="/" className="NavBar-link-welcome"/>
        <Link to="/teamup" className="NavBar-link-group"/>
        <Link to="/myacc" className="NavBar-link-myacc"/>
        <Link to="/login" className="NavBar-link-login"/>
        <Link to="/" className="NavBar-link-contact"/>
        <p1 className="my_username">{props.logstate? global.user.name : "用户未登录"}</p1>
      </div>
    </nav>
  );
}

export default NavBar;
