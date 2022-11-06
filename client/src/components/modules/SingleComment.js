import React from "react";

/**
 * 用户评论
 *
 * Proptypes
 * @param {string} _id 评论所在组队帖子编号
 * @param {string} creator_name 评论者用户名
 * @param {string} content 评论内容
 */
const SingleComment = (props) => {
  return (
    <div className="Card-commentBody">
      <span className="u-bold">{props.creator_name}</span>
      <span>{" | " + props.content}</span>
    </div>
  );
};

export default SingleComment;
