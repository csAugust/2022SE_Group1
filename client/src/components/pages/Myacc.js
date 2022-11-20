import "./Myacc.css"
import React, {useEffect, useState} from "react";
import {Link} from "@reach/router";
import "./Mainpage.css"
import TeamPost from "../modules/TeamPost";
import axios from "axios";
import "../../utilities";

const Myacc =(props) => {
    const [TeamPosts, setTeamPosts] = useState([]);
    let MyTeamPost;
    let TeamPostObj;
    const addNewTeamPost = (TeamPostObj) => {
        TeamPosts.push(TeamPostObj);
        TeamPosts.sort(function(a,b){return b.team.id-a.team.id});
        setTeamPosts([...TeamPosts]);
    }
    const getTeamPost = async (id) => {
        await axios.get("http://localhost:8080/teams/" + id.toString())
            .then((response) => {
                TeamPostObj = response.data.data;
            })
            .catch(err => alert(err));
        return TeamPostObj;
    };
    const getMyTeamPosts = async () => {
        await axios.get("http://localhost:8080/users/" + global.user.Id.toString())
            .then((response) => {
                MyTeamPost = response.data.data.teams;
            })
            .catch(err => alert(err));
        return MyTeamPost;
    };
    const setTeamPosts_=async ()=>{
         await getMyTeamPosts().then((res) => {
                var index = res.match(/\d+(\.\d+)?/g);
                for (let i = 0; i < index.length; i++){
                  getTeamPost(index[i]).then(res => {
                    addNewTeamPost(res);
                  })
                }
            }
        );
    }
    useEffect(() => {
        document.title = "News TeamPost";
        setTeamPosts_();
    }, [])



    const hasTeamPosts = (TeamPosts.length!== 0);
    let TeamPostsList = null;
    if (hasTeamPosts) {
         console.log(TeamPosts);
        TeamPostsList = TeamPosts.map((TeamPostObj) => (
            <TeamPost
                key={`TeamPost_${TeamPostObj.team.id}`}
                _id={TeamPostObj.team.id}
                creator_name={TeamPostObj.team.creatorId}//需要根据id拿用户名
                members_num={TeamPostObj.info.numberLimit}
                team_name={TeamPostObj.team.name}
                course_name={TeamPostObj.info.course}
                content={TeamPostObj.info.content}
                comments={TeamPostObj.commentList}
                logstate={props.logstate}
            />
        ));
    } else {
        TeamPostsList = <div>No TeamPost!</div>
    }

    if(props.logstate)
    return (
        <div className={"Mainpage-container"}>
            <div className={"TeamUp-container"}>
                <div className="HintInfo">浏览我的组队或点击
                    <Link className="easter_egg1" to="/teamuppost">此处</Link>
                    发起组队
                </div>
                <br/><br/><br/>
                <div className={"TeamPost-container"}>
                    {TeamPostsList}
                    <div className={"BottomLine"}>我是有底线的</div>
                </div>
            </div>
        </div>
    )
    else
    return (
        <div className={"Mainpage-container"}>
            <div className={"TeamUp-container"}>
                <div className="HintInfo">您还没有登录！点击
                    <Link className="easter_egg1" to="/login">此处去登录</Link>
                </div>
                <br/><br/><br/>
                <div className={"TeamPost-container"}>
                    <div className={"BottomLine"}>我是有底线的</div>
                </div>
            </div>
        </div>
    )
}

export default Myacc;