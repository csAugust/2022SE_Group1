import React from "react";



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
    return (
        <div className="Card-TeamPost">
            <span className="u-bold">{props.creator_name}</span>
            <p className="Team-Info">{props.course_name}</p>
            <p className="Team-Info">{props.personal_profile}</p>
            <p className="Team-Info">{props.members_num}</p>
            <p className="Team-Info">{props.team_name}</p>
        </div>
    );
};

export default TeamPost;