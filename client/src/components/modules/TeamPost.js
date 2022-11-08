import React, {useEffect, useState} from "react";
import TeamSingleComment from "./TeamSingleComment";
import TeamCommentsBlock from "./TeamCommentsBlock";
import TeamSinglePost from "./TeamSinglePost";
import {get} from "../../utilities";
import "./TeamPost.css"
import "../pages/Mainpage.css"

/**
 * 组队申请
 * 参数
 * @param {string} _id 组队申请编号
 * @param {string} creator_name 组队申请者用户名
 * @param {string} course_name 组队课程名
 * @param {string} personal_profile 组队申请者个人简介
 * @param {number} members_num 组队申请人数
 * @param {string} team_name 组队名称
 */

const TeamPost = (props) => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        get("/api/TeamPostComment", {parent: props._id}).then((comments) => {
            setComments(comments);
        });
    }, []);

    const addTeamNewComment = (TeamPostCommentObj) => {
        setComments(comments.concat([TeamPostCommentObj]));
    }

    return (

            <div className="TeamUp-container">
                <TeamSinglePost
                    _id={props._id}
                    creator_name={props.creator_name}
                    content={props.content}
                    course_name={props.course_name}
                    personal_profile={props.personal_profile}
                    members_num={props.members_num}
                    team_name={props.team_name}
                />
                <TeamCommentsBlock TeamPost={props}
                                   comments={comments}
                                   addTeamNewComment={addTeamNewComment}
                />
                <br/>
            </div>
    );
};

export default TeamPost;