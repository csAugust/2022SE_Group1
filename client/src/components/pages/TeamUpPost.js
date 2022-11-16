import "./TeamUpPost.css"
import React from "react";
import {useState, useEffect} from "react";
import TeamPost from "../modules/TeamPost";
import {NewTeamPost} from "../modules/NewTeamPostInput";
import {get} from "../../utilities";
import "../pages/Mainpage.css"
import {Link} from "@reach/router";
import axios from "axios";
const TeamUpPost = () => {
    const [TeamPosts, setTeamPosts] = useState([]);

    useEffect(() => {
        document.title = "News TeamPost";
        // get("api/TeamPosts").then((TeamPostObjs) => {
        //     let reverseTeamPostObjs = TeamPostObjs.reverse();
        //     setTeamPosts(reverseTeamPostObjs);
        // });

    }, [])


    const addNewTeamPost = (TeamPostObj) => {
        setTeamPosts([TeamPostObj].concat(TeamPosts));
    }
    let TeamPostsList = null;
    const hasTeamPosts = (TeamPosts.length !== 0);

    if (hasTeamPosts) {
        TeamPostsList = TeamPosts.map((TeamPostObj) => (
            <TeamPost
                key={`TeamPost_${TeamPostObj.team.id}`}
                id={TeamPostObj.team.id}
                creator_name={TeamPostObj.team.creatorId}//需要根据id拿用户名
                members_num={TeamPostObj.info.numberLimit}
                team_name={TeamPostObj.team.name}
                course_name={TeamPostObj.info.course}
                personal_profile={""}
                content={TeamPostObj.info.content}
            />
        ));
    } else {
        TeamPostsList = <div>No TeamPost!</div>
    }

    return (
        <div className={"Mainpage-container"}>
            <div className={"TeamPost-container"}>
                <NewTeamPost addNewTeamPost={addNewTeamPost}/><br/>
            </div>

        </div>

    )
}

export default TeamUpPost;
