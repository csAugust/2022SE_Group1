import React, { useState, useEffect } from "react";
import "./Register.css";
import "./Login.css";
import "../modules/NewTeamPostInput.css"
import axios from 'axios';
import {Button, Form} from "antd";
import {Link} from "@reach/router";
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const Register = () => {
  useEffect(() => {
    document.title = "Register";
  });
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwd2, setPwd2] = useState("");
  const [email, setEmail] = useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange= (event) => {
    setEmail(event.target.value);
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
      await axios({
                method: "post",
                url: "http://localhost:8080/users",//请求接口
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },
                data: {
                    name:name,
                    email:email,
                    password:pwdb
                }
            }).then((response) => {
          window.alert("注册成功！");
        })
      .catch(err => {window.alert(err);});
    }
    setEmail("");
    setName("");
    setPwd("");
    setPwd2("");
  };

    return (
      <div className="Register-container">
        <div className="Login-container">
                <div className={"Register-container-inner"}>
                    <div className={"NewTeamPostInput"}>
                        <Form {...layout}>
                            <div className={"TeamPostFormItem"}>
                                <Form.Item>
                                    <div className="Register-logo"/>
                                </Form.Item>
                                <Form.Item>
                                  <input type="text" className="regi" id="Username" name="UserName" placeholder="用户名"
                                         onChange={handleNameChange}></input>
                                </Form.Item><br/>
                                <Form.Item>
                                  <input type="text" className="email" id="Email" name="Email" placeholder="邮箱"
                                         onChange={handleEmailChange}></input>
                                </Form.Item><br/>
                                <Form.Item>
                                    <input type="password" className="first" id="pwd" name="pwd"
                                           placeholder="密码" onChange={handlePwdChange}></input>
                                </Form.Item><br/>
                                <Form.Item>
                                  <input type="password" className="second" id="pwd2" name="pwd2"
                                         placeholder="请再次输入密码" onChange={handlePwd2Change}></input>
                                </Form.Item>
                                <Form.Item>
                                    <Button
                                        type={"button"}
                                        className="NewTeamPostInput NewPostInput-button u-pointer Register-Register_button"
                                        onClick={handleRegister}
                                    >    注册    </Button>
                                </Form.Item>
                            </div>
                        </Form>
                    </div>
                </div>
                <div className="Register-status"/>
            </div>
      </div>
    );
  };
  
  export default Register;
  