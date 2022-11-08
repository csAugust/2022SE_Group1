import React from "react";
import {post} from "../../utilities";
import NewCommentPostInput from "./NewTeamPostInput";


/**
 * New Comment is a New Post component for comments
 * 发布新评论
 * Proptypes
 * @param {string} defaultText is the placeholder text
 * @param {string} TeamPostId 发布评论的组队帖子编号
 */
const TeamNewComment=(props)=>{
    const addComment=(value)=>{
        const body={
            parent:props.TeamPostId,
            content:value,
        };
        post("/api/TeamPostComment", body).then((comment) => {
            // display this comment on the screen
            props.addNewComment(comment);
        });
    };
    return <NewCommentPostInput defaultText="New Comment" TeamPostId={props.TeamPostId} onSubmit={addComment}/>;

}

export default TeamNewComment;