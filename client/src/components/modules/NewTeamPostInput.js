import React, {useState} from "react";
import {post} from "../../utilities";
import TeamPost from "./TeamPost";
import {Button, Form, Input, Mentions} from "antd";
import "./NewTeamPostInput.css"
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
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
            content:"固定一下",
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
                className="NewPostInput-button u-pointer"
                value="Submit"
                onClick={handleSubmit}
            >
                Submit
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
    const [value, setValue] = useState("");
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

    // called when the user hits "Submit" for a new post
    const handlePostSubmit = (event) => {
        event.preventDefault();
        const return_value = {
            CourseName: coursename,
            MembersNum: membersnum,
            PersonalProfile: personal,
            TeamName: teamname,
            Creator_Name: "cbajklbvs",

        };
        props.onSubmit && props.onSubmit(return_value);
        setValue("");
        setCourseName("");
        setMembersNum("");
        setpersonal("");
        setteamname("");
    };

    return (
        <div className={"NewTeamPostInput"}>
            <Form {...layout}>
                <div className="u-flex">
                    <Form.Item
                        name="CourseName"
                        label="课程名称"
                        rules={[
                            {required: true},
                        ]}>
                        <Input
                            type="text"
                            placeholder={""}
                            value={coursename}
                            onChange={handleCourseNameChange}
                            className="NewPostInput-input"/>
                    </Form.Item>
                    <Form.Item
                        name="MembersNum"
                        label="组队人数"
                        rules={[
                            {required: true},
                        ]}>
                        <Input
                            type="number"
                            placeholder={""}
                            value={membersnum}
                            onChange={handleMembersNumChange}
                            className="NewPostInput-input"
                        />
                    </Form.Item>
                    <Form.Item
                        name="TeamName"
                        label="队伍名称"
                        rules={[
                            {required: true},
                        ]}
                    >
                        <Input
                            type="text"
                            placeholder={''}
                            value={teamname}
                            onChange={handleTeamNameChange}
                            className="NewPostInput-input"
                        />
                    </Form.Item>
                    <Form.Item
                        name="PersonalInfo"
                        label="个人简介"
                        rules={[
                            {required: false},
                        ]}
                    >
                        <Input
                            type="text"
                            placeholder={'选填'}
                            value={personal}
                            onChange={handlePersonalProfileChange}
                            className="NewPostInput-input"/>
                    </Form.Item><br/>
                    <Form.Item>
                        <Button type="submit"
                                htmlType="submit"
                                className="NewPostInput-button u-pointer"
                                value="Submit"
                                onClick={handlePostSubmit}
                        >
                            发起组队
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    )
};

const NewCommentPost = (props) => {
    const addCommentPost = (value) => {
        const body = {
            parent: props.TeampPostId,
            content: value
        }
        post("api/TeamPostComment", body).then((comment) => {
            props.addNewComment(comment);
        });
    };
    return <NewCommentPostInput defaultText={"New Comment"} onSubmit={addCommentPost}/>;
};

export {NewTeamPost,NewCommentPost};