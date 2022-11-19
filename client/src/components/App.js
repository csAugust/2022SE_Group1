/**
 * 网页body部分。分为导航栏/页面内容。页面内容由Router导航。
 * Mainpage: 主页
 * Feed: 发帖页面，待修改为组队页面
 * Profile: 用户页面，待修改
 * # 登录页面待做
 * Notfound: 404页面
 */

import React,{ useState, useEffect } from "react";
import NavBar from "./modules/NavBar.js";
import { Router } from "@reach/router";
import Feed from "./pages/Feed.js";
import NotFound from "./pages/NotFound.js";
import Profile from "./pages/Profile.js";
import Mainpage from "./pages/Mainpage.js";
import Login from "./pages/Login.js";
import Register from "./pages/Register.js";
import Myacc from "./pages/Myacc.js";

// to use styles, import the necessary CSS files
import "../utilities.css";
import "./App.css";

/**
 * Define the "App" component as a function.
 */
const App = () => {
  // required method: whatever is returned defines what
  // shows up on screen
  const [login, setLogin] = useState(false);
  const loginSwitch = () => setLogin(true);
  return (
    // <> is like a <div>, but won't show
    // up in the DOM tree
    <>
      <NavBar logstate={login}/>
      <div className="App-container">
        <Router>
          <Mainpage path="/" />
          <Feed path="/feed" />
          <Profile path="/profile/" />
          <Login path="/login" onlogin={loginSwitch} logstate={login}/>
          <Register path="/register" />
          <Myacc path="/myacc" />
          <NotFound default />
        </Router>
      </div>
    </>
  );
};

export default App;
