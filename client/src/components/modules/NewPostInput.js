import React, {useState} from "react";

import "./NewPostInput.css";
import {post} from "../../utilities";

/**
 * New Post is a parent component for all input components
 *
 * Proptypes
 * @param {string} defaultText is the placeholder text
 * @param {string} storyId optional prop, used for comments
 * @param {({storyId, value}) => void} onSubmit: (function) triggered when this post is submitted, takes {storyId, value} as parameters
 */


const NewPostInput = (props) => {
    //const [value,setValue] = useState("");
    const [coursename, setCourseName] = useState("");
    const [membersnum, setMembersNum] = useState("");
    const [personal, setpersonal] = useState("");
    const [teamname, setteamname] = useState("");
    // called whenever the user types in the new post input box
    const handleCourseNameChange = e => {
        setCourseName(e.target.CourseName);
    };

    const handleMembersNumChange = e => {
        setMembersNum(e.target.MembersNum);
    };

    const handlePersonalProfileChange = e => {
        setpersonal(e.target.PersonalProfile);
    };

    const handleTeamNameChange = e => {
        setteamname(e.target.TeamName);
    };

    // called when the user hits "Submit" for a new post
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit && props.onSubmit(event.target);
        setValue("");
    };

    return (
        <div className="u-flex">
            <div>
            <input
                type="text"
                placeholder={"课程名称"}
                value={coursename}
                onChange={handleCourseNameChange}
                className="NewPostInput-input"
            /></div><br/>
            <div>
                <input
                type="number"
                placeholder={'组队人数'}
                value={membersnum}
                onChange={handleMembersNumChange}
                className="NewPostInput-input"
            />
            </div>

            <textarea
                type="text"
                placeholder={'个人简介'}
                value={personal}
                onChange={handlePersonalProfileChange}
                className="NewPostInput-input"
            />
            <input
                type="text"
                placeholder={'团队名称'}
                value={teamname}
                onChange={handleTeamNameChange}
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
 * @param {string} storyId to add comment to
 */
const NewComment = (props) => {
    const addComment = (value) => {
        const body = {
            parent: props.storyId,
            content: value
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
 * @param {string} defaultText is the placeholder text
 */
const NewStory = (props) => {
    const addStory = (value) => {
        const body = {
            content:value.content,
            CourseName:value.CourseName,
            MembersNum:value.MembersNum,
            PersonalProfile:props.PersonalProfile,
            TeamName:props.TeamName,
            creator_name:props.creator_name,
        };
        post("/api/story", body).then((story) => {
            // display this story on the screen
            props.addNewStory(story);
        });
    };

    return <NewPostInput defaultText="New Post" onSubmit={addStory}/>;
};

export {NewComment, NewStory};

