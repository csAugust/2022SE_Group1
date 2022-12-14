import React, {useState} from "react";
import "../../utilities";
import {Button, Form, Input} from "antd";
import "./NewTeamPostInput.css"
import axios from "axios";

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

/**
 * 发布组队
 */
const NewTeamPost = (props) => {
    const addTeamPost = (value) => {
        const body = {
            team: {
                creatorId: global.user.Id,
                name: value.TeamName,
            },
            info: {
                numberLimit: value.MembersNum,
                content: value.Content,
                course: value.CourseName,
            },
            commentList: null
        }
        //将新发布的组队同步到数据库
        const postTeamPost = async () => {
            await axios({
                method: "post",
                url: "http://localhost:8080/teams",//请求接口
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8'
                },//请求头参数
                data: {
                    team: {
                        creatorId: global.user.Id,
                        name: value.TeamName,
                    },
                    info: {
                        numberLimit: value.MembersNum,
                        content: value.Content,
                        course: value.CourseName,
                    }
                }
            }).then((res) => {
                alert("发布成功！点击继续浏览组队");
            });
            props.addNewTeamPost(body);
        }
        postTeamPost();
    };
    return <NewTeamPostInput defaultText={"New TeamPost"} onSubmit={addTeamPost}/>;
}
/**
 * 输入评论
 * Proptypes
 * @param {string} defaultText is the placeholder text
 * @param {string} TeamPostId
 * @param {({TeamPostId, value}) => void} onSubmit: (function) triggered when this post is submitted, takes {TeamPostId, value} as parameters
 */
const NewCommentPostInput = (props) => {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        if(value==="") {
            alert("不能发布空白评论！");
            return false;
        }
        else {
            event.preventDefault();
            props.onSubmit && props.onSubmit(value);
            setValue("");
            return true;
        }
    };

    return (
        <div className="u-flex">
            {""}<input
                type="text"
                placeholder={props.defaultText}
                value={value}
                onChange={handleChange}
                className="NewPostInput-input"
            />
            <button
                type="submit"
                className="NewCommentInput-button u-pointer"
                value="Submit"
                onClick={handleSubmit}
            >
                发表评论
            </button>
        </div>
    );
};

/**
 * 发布组队申请帖子
 *
 * Proptypes
 * @param {string} defaultText is the placeholder text
 * @param {string} coursename
 * @param {({struct}) => void} onSubmit: (function) triggered when this post is submitted, takes {storyId, value} as parameters
 */
const NewTeamPostInput = (props) => {
    const [coursename, setCourseName] = useState("");
    const [membersnum, setMembersNum] = useState("");
    const [teamname, setteamname] = useState("");
    const [Content, setContent] = useState("");
    // called whenever the user types in the new post input box
    const handleCourseNameChange = e => {
        setCourseName(e.target.value);
    };

    const handleMembersNumChange = e => {
        setMembersNum(e.target.value);
    };

    const handleTeamNameChange = e => {
        setteamname(e.target.value);
    };

    const handleContentChange = e => {
        setContent(e.target.value);
    }

    // called when the user hits "Submit" for a new post
    const handlePostSubmit = (event) => {
        if (coursename === "") {
            alert("课程名称不能为空！");
        } else if (membersnum === "") {
            alert("组队人数不能为空");
        } else if (teamname === "") {
            alert("队伍名称不能为空");
        } else if (Content==="") {
            alert("内容不能为空");
        } else {
            event.preventDefault();
            const return_value = {
                CourseName: coursename,
                MembersNum: membersnum,
                TeamName: teamname,
                Creator_Name: global.user.name,
                Content: Content,
            };
            setCourseName("");
            setMembersNum("");
            setteamname("");
            setContent("");
            props.onSubmit && props.onSubmit(return_value);
        }
    };


    return (
        <div className={"NewTeamPostInput-container"}>
            <div className={"NewTeamPostInput"}>
                <Form {...layout}>
                    <div className={"TeamPostFormItem"}>
                        <Form.Item
                            name="CourseName"
                            label=""
                            >
                            课程名称：<Input
                            type="text"
                            placeholder={""}
                            value={coursename}
                            onChange={handleCourseNameChange}
                            className="NewPostFirstInput-input"/><br/>
                        </Form.Item><br/>
                        <Form.Item
                            name="TeamName"
                            label=""
                        >
                            队伍名称：<Input
                            type="text"
                            placeholder={''}
                            value={teamname}
                            onChange={handleTeamNameChange}
                            className="NewPostFirstInput-input"
                        />
                        </Form.Item><br/>
                        <Form.Item
                            name="MembersNum"
                            label=""
                            >
                            组队人数：<Input
                            type="number"
                            min={1}
                            placeholder={""}
                            value={membersnum}
                            onChange={handleMembersNumChange}
                            className="NewPostFirstInput-input"
                        />
                        </Form.Item><br/>


                        <Form.Item labelCol={{span: 6}} wrapperCol={{span: 16}}
                                   name="Content"
                                   label=""
                        >
                            {""}<textarea rows="5"
                                          labelCol={{span: 6}} wrapperCol={{span: 16}}
                                          type="text"
                                          placeholder={'写下想说的话...'}
                                          value={Content}
                                          onChange={handleContentChange}
                                          className="NewPostContentInput-input"/>
                        </Form.Item>
                        <br/>
                        <Form.Item>
                            <Button type="submit"
                                    htmlType="submit"
                                    className="NewTeamPostInput NewPostInput-button u-pointer"
                                    value="Submit"
                                    onClick={handlePostSubmit}
                            >
                                发起组队
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </div>
    )
};

const NewCommentPost = (props) => {
    const addCommentPost = async (value) => {
        const body = {
            content: value,
            teamId: props.TeamPostId,
            senderId: global.user.Id,
        }
        await axios.post("http://localhost:8080/comments/", body).then((res) => {
            props.addNewComment(body);
        });
    };
    return <NewCommentPostInput defaultText={"New Comment"} onSubmit={addCommentPost}/>;
};

export {NewTeamPost, NewCommentPost};