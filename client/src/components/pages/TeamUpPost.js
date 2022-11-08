import "./TeamUpPost.css"
import React from "react";
import {useState, useEffect} from "react";
import TeamPost from "../modules/TeamPost";
import {NewTeamPost} from "../modules/NewTeamPostInput";
import {get} from "../../utilities";
import "../pages/Mainpage.css"
import {Link} from "@reach/router";
const TeamUpPost = () => {
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
            <div className={"TeamPost-container"}>
                <NewTeamPost addNewTeamPost={addNewTeamPost}/><br/>
                {TeamPostsList}
            </div>

        </div>

    )
}

export default TeamUpPost;