import "./TeamUpPost.css"
import React from "react";
import {useState, useEffect} from "react";
import {NewTeamPost} from "../modules/NewTeamPostInput";
import "../pages/Mainpage.css"
const TeamUpPost = () => {
    const [TeamPosts, setTeamPosts] = useState([]);

    useEffect(() => {
        document.title = "News TeamPost";
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
