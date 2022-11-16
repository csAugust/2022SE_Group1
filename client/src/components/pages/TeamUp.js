import "./TeamUp.css"
import React, {useEffect, useState} from "react";
import {Link, Router} from "@reach/router";
import "./Mainpage.css"
import {get} from "../../utilities";
import TeamPost from "../modules/TeamPost";
import {NewTeamPost} from "../modules/NewTeamPostInput";
import axios from "axios";

const TeamUp =() => {
    const [TeamPosts, setTeamPosts] = useState([]);
    let TeamPostNum;
    let TeamPostObj;
    const addNewTeamPost = (TeamPostObj) => {
        TeamPosts.unshift(TeamPostObj);
    }
    const getTeamPost = async (id) => {
        await axios.get("http://localhost:8080/teams/" + id.toString())
            .then((response) => {
                TeamPostObj = response.data.data;
            })
            .catch(err => alert(err));
        return TeamPostObj;
    };
    const getTeamPostsNum = async () => {
        await axios.get("http://localhost:8080/teams")
            .then((response) => {
                TeamPostNum = response.data.data.length;
            })
            .catch(err => alert(err));
        return TeamPostNum;
    };

    const setTeamPosts_=async ()=>{
         await getTeamPostsNum().then((res) => {
                if (res !== 0) {
                    for (let i = 1; i <= res; i++) {
                        getTeamPost(i).then(res => {
                            addNewTeamPost(res);
                        })
                    }
                }
            }
        );
    }

    useEffect(() => {
        document.title = "News TeamPost";
        setTeamPosts_();
    }, [])



    const hasTeamPosts = (TeamPosts.length!== 0);
    let TeamPostsList = null;
    if (hasTeamPosts) {
         console.log(TeamPosts);
        TeamPostsList = TeamPosts.map((TeamPostObj) => (
            <TeamPost
                key={`TeamPost_${TeamPostObj.team.id}`}
                _id={TeamPostObj.team.id}
                creator_name={TeamPostObj.team.creatorId}//需要根据id拿用户名
                members_num={TeamPostObj.info.numberLimit}
                team_name={TeamPostObj.team.name}
                course_name={TeamPostObj.info.course}
                content={TeamPostObj.info.content}
            />
        ));
    } else {
        TeamPostsList = <div>No TeamPost!</div>

    }

    return (
        <div className={"Mainpage-container"}>
            <div className={"TeamUp-container"}>
                <div className="HintInfo">浏览已有组队或点击
                    <Link className="easter_egg1" to="/teamuppost">此处</Link>
                    发起组队
                </div>
                <br/><br/><br/>
                <div className={"TeamPost-container"}>
                    {TeamPostsList}
                    <div className={"BottomLine"}>我是有底线的</div>
                </div>
            </div>
        </div>

        //调用展示数据库中已有组队信息接口
    )
}

export default TeamUp;