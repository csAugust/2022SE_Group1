import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import "./Register.css";
import { post } from "../../utilities";

const Register = () => {

  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwd2, setPwd2] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePwdChange = (event) => {
    setPwd(event.target.value);
  };

  const handlePwd2Change = (event) => {
    setPwd2(event.target.value);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    if(pwd != pwd2) 
      window.alert("输入的两次密码不一致");
    else if(pwd =="" || name == "")
    window.alert("不能使用空白用户名/密码");
    else{
      const body = { username: name , password: pwd};
      post("/api/register", body).then((answer) => {
        if(answer.result == "OK")
          window.location.replace("/myacc");
        else
          window.alert("该用户已存在");
      });
    }
  };

    return (
      <div className="Register-container">
        <div className="Register-logo"/>

        <input type="text" class="regi" id="Username" name="Username" placeholder="Username.." onChange={handleNameChange}></input>
        <input type="password" class="first" id="pwd" name="pwd" placeholder="Password.." onChange={handlePwdChange}></input>
        <input type="password" class="second" id="pwd2" name="pwd2" placeholder="Password Again.." onChange={handlePwd2Change}></input>
        <button
          className="Register-Register_botton"
          onClick={handleRegister}
        >      </button>
        <div className="Register-status"/>
      </div>
    );
  };
  
  export default Register;
  