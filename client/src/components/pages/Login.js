import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import "./Login.css";
import "../../utilities";
import axios from 'axios';

const Login = (props) => {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [login, setLogin] = useState(props.logstate);
  const loginSwitch = () => setLogin(true);

  useEffect(() => {
    document.title = "Login";
  });

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePwdChange = (event) => {
    setPwd(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    let result;
    var pwdb = window.btoa(pwd);
    let url="http://10.7.7.230:8080/login?email="+name+"&password="+pwdb;
    await axios.get(url)
      .then((response) => {
        result=response.data;
	    })
    .catch(err => {window.alert(err);});

    if(result[0] == "S"){
      global.user.name = name;
      props.onlogin();
      loginSwitch();
    }
    else
      window.alert("用户名或密码错误!");
  };

  const handleLogout = (event) => {
    window.location.reload();
  };

  if(login)
  return (
    <div className="Login-container">
      <div className="Login-logo"/>
      <div className="Login-success"/>
      <button
        className="Login-logout_button"
        onClick={handleLogout}
      ></button>
      <Link to="/myacc" className="Login-goto_button"/>
      <div className="Login-status"/>
    </div>
  );
  else
  return (
    <div className="Login-container">
      <div className="Login-logo"/>
      <input type="text" class="log" id="Username" name="Username" placeholder="Username.." onChange={handleNameChange}></input>
      <input type="password" class="log" id="pwd" name="pwd" placeholder="Password.." onChange={handlePwdChange}></input>
      <button
        className="Login-login_button"
        onClick={handleLogin}
      >      </button>
      <Link to="/register" className="Login-register"/>
      <div className="Login-status"/>
    </div>
  );
};
  
  export default Login;
  