import "./TeamUp.css"
import React from "react";
import {Link, Router} from "@reach/router";
import Register from "./Register";
import "./Mainpage.css"

const TeamUp = () => {
    return (
        <div className={"Mainpage-container"}>
            <div className={"TeamUp-container"}>
                <div className="HintInfo">浏览已有组队或点击
                    <Link className="easter_egg1" to="/feed">此处</Link>
                    发起组队
                </div>
            </div>

            <div className={"TeamPost"}>
                <button className={"join-button"}></button>
                <div className={"post-contnet"}>
                    <h4 className={"creator-name"}> Jack </h4>
                    <h5 className={"course-name"}> 课程名：软件工程 </h5>
                    <h5 className={"members-num"}> 组队人数：5 </h5>
                    <h5 className={"personal-profile"}>个人简介：精通html css 熟练掌握python</h5>
                    <h5 className={"content"}>不划水，大家一起努力，希望有志同道合的小伙伴加入我们！！ </h5>
                </div>
                <div className={"Comments"}>
                    <input className={"comment-input"}/><button className={"comment-button"}>发表评论</button>
                </div>
            </div>
            <div className="Mainpage-status"/>
        </div>
        //调用展示数据库中已有组队信息接口
    )
}

export default TeamUp;