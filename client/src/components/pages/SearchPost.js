import "./SearchPost.css"
import React, {useEffect, useState} from "react";
import {Link} from "@reach/router";
import "./Mainpage.css"
import TeamPost from "../modules/TeamPost";
import axios from "axios";


const SearchPost =(props) => {
    const [TeamPosts, setTeamPosts] = useState([]);
    const [name, setName] = useState("");

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const getTeamPosts=async ()=>{
        setTeamPosts(TeamPosts.splice(0,TeamPosts.length));

        await axios.get("http://localhost:8080/teams")
            .then((response)=>{
                for(let i = 0; i < response.data.data.length; i++){
                    if(response.data.data[i].info.course === name){
                        TeamPosts.push(response.data.data[i]);
                        setTeamPosts([...TeamPosts]);
                    }
                }
            })
            .catch(err=>alert(err));
            setTeamPosts([...TeamPosts.reverse()]);
    }

    useEffect(() => {
        document.title = "News TeamPost";
    }, [])

    const handleSearch = async (event) => {
        getTeamPosts();
        // window.alert(name);
        // await axios({
        //     method: "post",
        //     url: "http://localhost:8080/info/search",//请求接口
        //     headers: {
        //         'Content-Type': 'application/json;charset=UTF-8'
        //     },
        //     data: {
        //         course:name
        //     }
        // }).then((response) => {
        //     setTeamPosts(response.data.data);
        //     window.alert(response.data.data);
        // })
    };
    


    const hasTeamPosts = (TeamPosts.length!== 0);
    let TeamPostsList = null;
    if (hasTeamPosts) {
        TeamPostsList = (TeamPosts).map((TeamPostObj) => (
            <TeamPost
                key={`TeamPost_${TeamPostObj.info.id}`}
                _id={TeamPostObj.info.id}
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
        TeamPostsList = <div>搜索无结果!</div>
    }

    if(props.logstate)
    return (
        <div className={"Mainpage-container"}>
            <div className={"SearchPost-container"}>
                <div className="HintInfo">搜索当前已发布的组队
                </div>
                <br/>
                <input type="search" class="searchpost" placeholder="输入课程名称.." onChange={handleChange}></input>
                <button
                    className="Search-searchbutton"
                    onClick={handleSearch}
                >      </button>
                <br/><br/><br/><br/>
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
            <div className={"SearchPost-container"}>
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

export default SearchPost;