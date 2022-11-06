import React from "react";
import "./TeamPost.css"
/**
 * TeamSinglePost 是TeamPost的第一部分
 *
 * Proptypes
 * @param {string} _id of the TeamPost
 * @param {string} creator_name
 * @param {string} content of the TeamPost
 * @param {string} course_name
 * @param {string} personal_profile
 * @param {number} members_num
 * @param {string} team_name
 */

const TeamSinglePost = (props) => {
    return (
        <div className={"TeamInfo-commentSection"}>
            <span className="u-bold">{props.creator_name}</span><br/>
            <p className="TeamPostContent">{"课程名称："+props.course_name}</p><br/>
            <p className="TeamPostContent">{"组队人数："+props.members_num}</p><br/>
            <p className="TeamPostContent">{"个人简介"+props.personal_profile}</p><br/>
            <p className="TeamPostContent">{"队伍名称"+props.team_name}</p><br/>
            <p className="TeamPostContent">{props.content}</p><br/>
        </div>
    )
}

export default TeamSinglePost;