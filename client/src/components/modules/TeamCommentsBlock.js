import React from "react";
import TeamPost from "./TeamPost.js";
import TeamSingleComment from "./TeamSingleComment";
import TeamNewComment  from "./TeamSingleComment";
import {NewCommentPost} from "./NewTeamPostInput";
/**
 * 用户评论
 * Proptypes
 * @typedef comment
 * @param {string} _id 评论编号
 * @param {string} creator_name 评论者用户名
 * @param {string} content 评论内容
 */

/**
 * 组队申请
 * @typedef TeamPost
 * @param {string} _id 组队申请编号
 * @param {string} creator_name 组队申请者用户名
 * @param {string} course_name 组队课程名
 * @param {string} personal_profile 组队申请者个人简介
 * @param {number} members_num 组队申请人数
 * @param {string} team_name 组队名称
 */

/**
 * 组队帖子的全部评论
 * Proptypes
 * @param {comment[]} comments
 * @param {TeamPost} TeamPost
 */
const TeamCommentsBlock = (props) => {
  return (
    <div className="TeamInfo-commentSection">
      <div className="TeamPost-comments">
        {props.comments.map((comment) => (
          <TeamSingleComment
            key={`TeamSingleComment_${comment._id}`}
            _id={comment._id}
            creator_name={comment.creator_name}
            content={comment.content}
          />
        ))}
        <NewCommentPost TeamPostId={props.TeamPost._id} addNewComment={props.addTeamNewComment} />
      </div>
    </div>
  );
};

export default TeamCommentsBlock;
