import React, {useEffect, useState} from "react";
import TeamSingleComment from "./TeamSingleComment";
import TeamCommentsBlock from "./TeamCommentsBlock";
import TeamSinglePost from "./TeamSinglePost";
import {get} from "../../utilities";
import "./TeamPost.css"
import "../pages/Mainpage.css"
import axios from "axios";

/**
 * 组队申请
 * 参数
 * @param {string} _id 组队申请编号
 * @param {string} creator_name 组队申请者用户名
 * @param {string} course_name 组队课程名
 * @param {string} personal_profile 组队申请者个人简介
 * @param {number} members_num 组队申请人数
 * @param {string} team_name 组队名称
 * @param {string} content 内容
 */
const getCreatorNamebyId = async (Id) => {
    let name;
    await axios.get("http://localhost:8080/users/" + Id.toString())
        .then((response) => {
            name= response.data.data.user.name;
        })
        .catch(err => alert(err));
    return name;
}

const TeamPost = (props) => {

    const [comments, setComments] = useState(props.comments);
    const [creator_name,setCreatorName]=useState("");

    useEffect(() => {
        getCreatorNamebyId(props.creator_name).then((res)=>{
            setCreatorName(res);
            }
        );
    }, []);

    const addTeamNewComment = (TeamPostCommentObj) => {
        setComments(comments.concat([TeamPostCommentObj]));
    }

    return (

        <div className="TeamUp-container">
            <TeamSinglePost
                _id={props._id}
                creator_name={creator_name}
                content={props.content}
                course_name={props.course_name}
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