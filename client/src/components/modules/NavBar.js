import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import "../../utilities";
import "./NavBar.css";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = () => {
  let username;
  if(global.user.name == "") 
    username = <p1 className="my_username">用户未登录</p1>;
  else 
    username = <p1 className="my_username">{global.user.name}</p1>;
  return (
    <nav className="NavBar-container u-flex">
      <div className="NavBar-logo"/>
      <div className="NavBar-linkContainer u-flex">
        <Link to="/" className="NavBar-link-welcome"/>
        <Link to="/feed" className="NavBar-link-group"/>
        <Link to="/myacc" className="NavBar-link-myacc"/>
        <Link to="/login" className="NavBar-link-login"/>
        <Link to="/" className="NavBar-link-contact"/>
        {username}
      </div>
    </nav>
  );
};

export default NavBar;
