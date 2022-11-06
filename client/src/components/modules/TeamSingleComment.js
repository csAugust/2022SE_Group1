import React from "react";
import "../modules/TeamPost.css"
/**
 * 用户评论
 * Proptypes
 * @typedef comment
 * @param {string} _id 评论所在组队帖子编号
 * @param {string} creator_name 评论者用户名
 * @param {string} content 评论内容
 */
const TeamSingleComment = (props) => {
  return (
    <div className="TeamPost-commentBody">
      <span className="u-bold">{props.creator_name}</span>
      <span>{" | " + props.content}</span>
    </div>
  );
};

export default TeamSingleComment;
