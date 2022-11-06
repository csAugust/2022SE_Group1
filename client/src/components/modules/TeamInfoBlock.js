import React from "react";
import TeamPost from "./TeamPost.js";
import TeamSingleComment from "./TeamSingleComment";
import { NewComment } from "./NewPostInput.js";

/**
 * 用户评论
 * Proptypes
 * @typedef comment
 * @param {string} _id 评论所在组队帖子编号
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
 * @param {TeamPost} story
 */
const TeamInfoBlock = (props) => {
  return (
    <div className="TeamInfo-Section">
      <div className="TeamForm">
        {props.comments.map((comment) => (
          <TeamPost
            key={`SingleComment_${comment._id}`}
            _id={comment._id}
            creator_name={comment.creator_name}
            content={comment.content}
          />
        ))}
        <NewComment storyId={props.story._id} addNewComment={props.addNewComment} />
      </div>
    </div>
  );
};

export default TeamInfoBlock;
