import React, {useState} from "react";
import 'antd/dist/antd.css';
import {Form, Input, Button, Select, Mentions,Card} from 'antd';
import "./NewPostInput.css";
import {post} from "../../utilities";

const {Option} = Mentions;

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
 * New Post is a parent component for all input components
 *
 * Proptypes
 * @param {string} defaultText is the placeholder text
 * @param {string} storyId optional prop, used for comments
 * @param {({storyId, value}) => void} onSubmit: (function) triggered when this post is submitted, takes {storyId, value} as parameters
 */
const NewPostInput = (props) => {
    const [value,setValue] = useState("");
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
        props.onSubmit && props.onSubmit(event.target);
        setValue("");
        setCourseName("");
        setMembersNum("");
        setpersonal("");
        setteamname("");
    };

    return (
       <Card style={{ width: "auto" }}>
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
                    <Mentions autoSize style={{
                        width: '100%',
                    }}>
                        <Input
                            type="text"
                            placeholder={'选填'}
                            value={personal}
                            onChange={handlePersonalProfileChange}
                            className="NewPostInput-input"/>
                    </Mentions>

                </Form.Item>



                <Form.Item {...tailLayout}>
                    <Button type="submit"
                            htmlType="submit"
                            className="NewPostInput-button u-pointer"
                            value="Submit"
                            onClick={handlePostSubmit}
                            >
                        {"submmit"}
                    </Button>
                </Form.Item>

            </div>
        </Form>
       </Card>
    );
}

const NewCommentPostInput = (props) => {
    const [value, setValue] = useState("");
    // called whenever the user types in the new post input box
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    // called when the user hits "Submit" for a new post
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
 * New Comment is a New Post component for comments
 *
 * Proptypes
 * @param {string} defaultText is the placeholder text
 * @param {string} storyId to add comment to 发布评论的组队帖号
 */
const NewComment = (props) => {
    const addComment = (value) => {
        const body = {
            parent: props.storyId,
            content: value.content,
        };
        post("/api/comment", body).then((comment) => {
            // display this comment on the screen
            props.addNewComment(comment);
        });
    };
    return <NewCommentPostInput defaultText="New Comment" onSubmit={addComment}/>;
};

/**
 * New Story is a New Post component for comments
 *
 * Proptypes
 * @param {string} CourseName
 * @param {string} defaultText is the placeholder text
 * @param {string} defaultText is the placeholder text
 * @param {string} defaultText is the placeholder text
 */
const NewStory = (props) => {
    const addStory = (value) => {
        const body = {
            CourseName: value.CourseName,
            MembersNum: value.MembersNum,
            PersonalProfile: value.PersonalProfile,
            TeamName: value.TeamName,
            creator_name: value.creator_name,
        };
        post("/api/story", body).then((story) => {
            // display this story on the screen
            props.addNewStory(story);
        });
    };

    return <NewPostInput defaultText="New Post" onSubmit={addStory}/>;
};

export {NewComment, NewStory};

