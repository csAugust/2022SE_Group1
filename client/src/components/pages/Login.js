import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import "./Login.css";

const Login = () => {
    return (
      <div className="Login-container">
        <div className="Login-logo"/>
        <input type="text" class="log" id="Username" name="Username" placeholder="Username.."></input>
        <input type="password" class="log" id="pwd" name="pwd" placeholder="Password.."></input>
        <div className="Login-login_botton"/>
        <Link to="/register" className="Login-register"/>
        <div className="Login-status"/>
      </div>
    );
  };
  
  export default Login;
  