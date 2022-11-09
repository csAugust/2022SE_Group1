import "./TeamUp.css"
import React, {useEffect, useState} from "react";
import {Link, Router} from "@reach/router";
import "./Mainpage.css"
import {get} from "../../utilities";
import TeamPost from "../modules/TeamPost";
import {NewTeamPost} from "../modules/NewTeamPostInput";

const TeamUp = () => {
    const [TeamPosts, setTeamPosts] = useState([]);

    useEffect(() => {
        document.title = "News TeamPost";
        get("api/TeamPosts").then((TeamPostObjs) => {
            let reverseTeamPostObjs = TeamPostObjs.reverse();
            setTeamPosts(reverseTeamPostObjs);
        });
    }, [])

    const addNewTeamPost = (TeamPostObj) => {
        setTeamPosts([TeamPostObj].concat(TeamPosts));
    }
    let TeamPostsList = null;
    const hasTeamPosts = (TeamPosts.length !== 0);

    if (hasTeamPosts) {
        TeamPostsList = TeamPosts.map((TeamPostObj) => (
            <TeamPost
                key={`TeamPost_${TeamPostObj._id}`}
                _id={TeamPostObj._id}
                creator_name={TeamPostObj.creator_name}
                members_num={TeamPostObj.members_num}
                team_name={TeamPostObj.team_name}
                course_name={TeamPostObj.course_name}
                personal_profile={TeamPostObj.personal_profile}
                content={TeamPostObj.content}
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
                </div><br/><br/><br/>
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