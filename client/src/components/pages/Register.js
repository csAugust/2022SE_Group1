import React, { useState, useEffect } from "react";
import "./Register.css";
import axios from 'axios';

const Register = () => {
  useEffect(() => {
    document.title = "Register";
  });
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

  const handleRegister = async (event) => {
    event.preventDefault();
    if(pwd != pwd2) 
      window.alert("输入的两次密码不一致");
    else if(pwd =="" || name == "")
    window.alert("不能使用空白用户名/密码");
    else{
      var pwdb = window.btoa(pwd);
      let url="http://localhost:8080/register?email="+name+"&password="+pwdb;
      await axios.get(url)
        .then((response) => {
          //result=response.data;
        })
      .catch(err => {window.alert(err);});
      window.alert("注册成功");
      // const body = { username: name , password: pwd};
      // post("/api/register", body).then((answer) => {
      //   if(answer.result == "OK")
      //     window.location.replace("/myacc");
      //   else
      //     window.alert("该用户已存在");
      // });
    }
  };

    return (
      <div className="Register-container">
        <div className="Register-logo"/>

        <input type="text" class="regi" id="Username" name="Username" placeholder="Username.." onChange={handleNameChange}></input>
        <input type="password" class="first" id="pwd" name="pwd" placeholder="Password.." onChange={handlePwdChange}></input>
        <input type="password" class="second" id="pwd2" name="pwd2" placeholder="Confirm Password.." onChange={handlePwd2Change}></input>
        <button
          className="Register-Register_button"
          onClick={handleRegister}
        >      </button>
        <div className="Register-status"/>
      </div>
    );
  };
  
  export default Register;
  