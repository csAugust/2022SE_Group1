import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import "./Login.css";
import { post } from "../../utilities";

const Login = () => {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePwdChange = (event) => {
    setPwd(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const body = { username: name , password: pwd};
    post("/api/login", body).then((answer) => {
      if(answer.result == "OK")
        window.location.replace("/feed");
      else
        window.alert("Wrong password!");
    });
  };

  return (
    <div className="Login-container">
      <div className="Login-logo"/>
      <input type="text" class="log" id="Username" name="Username" placeholder="Username.." onChange={handleNameChange}></input>
      <input type="password" class="log" id="pwd" name="pwd" placeholder="Password.." onChange={handlePwdChange}></input>
      <button
        className="Login-login_botton"
        onClick={handleLogin}
      >      </button>
      <Link to="/register" className="Login-register"/>
      <div className="Login-status"/>
    </div>
  );
};
  
  export default Login;
  