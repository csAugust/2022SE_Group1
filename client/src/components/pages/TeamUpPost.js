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

    return (
        <div className={"Mainpage-container"}>
            <div className={"TeamPost-container"}>
                <NewTeamPost addNewTeamPost={addNewTeamPost}/><br/>
            </div>

        </div>

    )
}

export default TeamUpPost;
