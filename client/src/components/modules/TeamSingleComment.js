import React, {useState} from "react";
import "../modules/TeamPost.css"
import axios from "axios";
/**
 * 用户评论
 * Proptypes
 * @typedef comment
 * @param {string} _id 评论所在组队帖子编号
 * @param {string} creator_name 评论者用户名
 * @param {string} content 评论内容
 */

const getCreatorNamebyId = async (Id) => {
    let temp;
    await axios.get("http://localhost:8080/users/" + Id.toString())
        .then((response) => {
            temp = response.data.data.email;
        })
        .catch(err => alert(err));
    return temp;
}

const TeamSingleComment = (props) => {
    const [creator_name,setCreatorName]=useState("");
    getCreatorNamebyId(props.creator_name).then((res)=>{
        setCreatorName(res);
        }
    )
  return (
    <div className="TeamPost-commentBody">
      <span className="u-bold">{creator_name}</span>
      <span>{" | " + props.content}</span>
    </div>
  );
};

export default TeamSingleComment;
