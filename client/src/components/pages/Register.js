import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import "./Register.css";

const Register = () => {
    return (
      <div className="Register-container">
        <div className="Register-logo"/>

        <input type="text" class="regi" id="Username" name="Username" placeholder="Username.."></input>
        <input type="password" class="first" id="pwd" name="pwd" placeholder="Password.."></input>
        <input type="password" class="second" id="pwd2" name="pwd2" placeholder="Password Again.."></input>

        <div className="Register-Register_botton"/>
        <div className="Register-status"/>
      </div>
    );
  };
  
  export default Register;
  