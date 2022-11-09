import React, {useState} from "react";
import {post} from "../../utilities";
import TeamPost from "./TeamPost";
import {Button, Form, Input, Mentions, message} from "antd";
import "./NewTeamPostInput.css"
import {Link} from "@reach/router";


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

/**
 * 发布新组队帖子
 * @param {string} defaultText in the placeholder
 *
 */
const NewTeamPost = (props) => {
    const addTeamPost = (value) => {
        const body = {
            course_name: value.CourseName,
            members_num: value.MembersNum,
            personal_profile: value.PersonalProfile,
            team_name: value.TeamName,
            creator_name: value.Creator_Name,
            content: value.Content,
        };
        post("api/TeamPost", body).then((teampost) => {
            props.addNewTeamPost(teampost);
        })
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
    // called whenever the user types in the new TeamPost input box
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    // called when the user hits "Submit" for a new TeamPost
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit && props.onSubmit(value);
        setValue("");
    };

    return (
        <div className="u-flex">
            <input
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
    const [content, setContent] = useState("");
    const [coursename, setCourseName] = useState("");
    const [membersnum, setMembersNum] = useState("");
    const [personal, setpersonal] = useState("");
    const [teamname, setteamname] = useState("");
    // called whenever the user types in the new post input box
    const handleCourseNameChange = e => {
        setCourseName(e.target.value);
    };

    const handleMembersNumChange = e => {
        setMembersNum(e.target.value);
    };

    const handlePersonalProfileChange = e => {
        setpersonal(e.target.value);
    };

    const handleTeamNameChange = e => {
        setteamname(e.target.value);
    };

    const handleContentChange = e => {
        setContent(e.target.value);
    }

    // called when the user hits "Submit" for a new post
    const handlePostSubmit = (event) => {
        alert("发布成功！点击继续浏览组队");
        <Link to={"/tempup"}></Link>
        event.preventDefault();
        const return_value = {
            CourseName: coursename,
            MembersNum: membersnum,
            PersonalProfile: personal,
            TeamName: teamname,
            Creator_Name: global.user.name,
            Content: content,
        };
        props.onSubmit && props.onSubmit(return_value);
        setCourseName("");
        setMembersNum();
        setpersonal("");
        setteamname("");
        setContent("");
    };



    return (
        <div className={"NewTeamPostInput-container"}>
            <div className={"NewTeamPostInput"}>
                <Form {...layout}>
                    <div className={"TeamPostFormItem"}>
                        <Form.Item
                            name="CourseName"
                            label=""
                            rules={[
                                {required: true},
                            ]}>
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
                            rules={[
                                {required: true},
                            ]}
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
                            rules={[
                                {required: true},
                            ]}>
                            组队人数：<Input
                            type="number"
                            min={1}
                            placeholder={""}
                            value={membersnum}
                            onChange={handleMembersNumChange}
                            className="NewPostFirstInput-input"
                        />
                        </Form.Item><br/>

                        <Form.Item
                            name="PersonalInfo"
                            label=""
                            rules={[
                                {required: false},
                            ]}
                        >
                            个人简介：<Input
                            type="text"
                            placeholder={''}
                            value={personal}
                            onChange={handlePersonalProfileChange}
                            className="NewPostFirstInput-input"/>
                        </Form.Item>
                        <br/>
                        <Form.Item labelCol={{span: 6}} wrapperCol={{span: 16}}
                                   name="Content"
                                   label=""
                                   rules={[
                                       {required: true},
                                   ]}
                        >
                            <textarea rows="5"
                                      labelCol={{span: 6}} wrapperCol={{span: 16}}
                                      type="text"
                                      placeholder={'写下想说的话...'}
                                      value={personal}
                                      onChange={handleContentChange}
                                      className="NewPostContentInput-input">

                            </textarea>
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
    const addCommentPost = (value) => {
        const body = {
            parent: props.TeampPostId,
            content: value,
            creator_name: global.user.name,
        }
        post("api/TeamPostComment", body).then((comment) => {
            props.addNewComment(comment);
        });
    };
    return <NewCommentPostInput defaultText={"New Comment"} onSubmit={addCommentPost}/>;
};

export {NewTeamPost, NewCommentPost};