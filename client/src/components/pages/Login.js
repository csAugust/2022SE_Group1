import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import "./Login.css";
import { post } from "../../utilities";
import "../../utilities";
import axios from 'axios';
const Login = (props) => {
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [login, setLogin] = useState(false);
  const loginSwitch = () => setLogin(true);
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePwdChange = (event) => {
    setPwd(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    let result;
    let url="http://10.7.7.230:8080/login?email="+name+"&password="+pwd;
    await axios.get(url)
      .then((response) => {
        result=response.data;
	    })
    .catch(err => {window.alert(err);});
    //window.alert(result);

    if(result[0] == "S"){
      global.user.name = name;
      loginSwitch();
      props.onlogin();
      //window.alert("成功!");
    }
    else
      window.alert("密码错误!");

  };
  // if(login)
  // return (
  //   <div className="Login-container">
  //     <div className="Login-logo"/>
  //     <button
  //       className="Login-login_botton"
  //       onClick={handleLogin}
  //     >      </button>
  //     <div className="Login-status"/>
  //   </div>
  // );
  // else
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
  