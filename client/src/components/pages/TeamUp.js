import "./TeamUp.css"
import React, {useEffect, useState} from "react";
import {Link} from "@reach/router";
import "./Mainpage.css"
import TeamPost from "../modules/TeamPost";
import axios from "axios";


const TeamUp =(props) => {
    const [TeamPosts, setTeamPosts] = useState([]);

    const getTeamPosts=async ()=>{
        await axios.get("http://localhost:8080/teams")
            .then((response)=>{
                setTeamPosts(response.data.data);
            })
            .catch(err=>alert(err));
    }

    useEffect(() => {
        document.title = "News TeamPost";
        getTeamPosts();
    }, [])



    const hasTeamPosts = (TeamPosts.length!== 0);
    let TeamPostsList = null;
    if (hasTeamPosts) {
        TeamPostsList = (TeamPosts.reverse()).map((TeamPostObj) => (
            <TeamPost
                key={`TeamPost_${TeamPostObj.info.id}`}
                _id={TeamPostObj.info.id}
                creator_name={TeamPostObj.team.creatorId}//需要根据id拿用户名
                members_num={TeamPostObj.info.numberLimit}
                team_name={TeamPostObj.team.name}
                course_name={TeamPostObj.info.course}
                content={TeamPostObj.info.content}
                comments={TeamPostObj.commentList}
                logstate={props.logstate}
            />
        ));
    } else {
        TeamPostsList = <div>No TeamPost!</div>
    }

    if(props.logstate)
    return (
        <div className={"Mainpage-container"}>
            <div className={"TeamUp-container"}>
                <div className="HintInfo">点击
                    <Link className="easter_egg1" to="/teamuppost">此处</Link>
                    发起组队/点击
                    <Link className="easter_egg1" to="/searchpost">此处</Link>
                    搜索组队
                </div>
                <br/><br/><br/>
                <div className={"TeamPost-container"}>
                    {TeamPostsList}
                    <div className={"BottomLine"}>我是有底线的</div>
                </div>
            </div>
        </div>
    )
    else
    return (
        <div className={"Mainpage-container"}>
            <div className={"TeamUp-container"}>
                <div className="HintInfo">您还没有登录！点击
                    <Link className="easter_egg1" to="/login">此处去登录</Link>
                </div>
                <br/><br/><br/>
                <div className={"TeamPost-container"}>
                    <div className={"BottomLine"}>我是有底线的</div>
                </div>
            </div>
        </div>
    )
}

export default TeamUp;