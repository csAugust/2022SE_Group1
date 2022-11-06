import React, {useState} from "react";


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
 * @param {({coursename,membersnum,personal,teamname}) => void} onSubmit: (function) triggered when this post is submitted, takes {storyId, value} as parameters
 */

export default NewCommentPostInput;
