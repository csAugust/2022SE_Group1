import React from "react";

/**
 * Story is a component that renders creator and content of a story
 *
 * Proptypes
 * @param {string} _id of the story
 * @param {string} creator_name
 * @param {string} content of the story
 * @param {string} course_name
 * @param {string} personal_profile
 * @param {number} members_num
 * @param {string} team_name
 */
const SingleStory = (props) => {
  return (
    <div className="Card-story">
      <span className="u-bold">{props.creator_name}</span>
      <p className="Card-storyContent">{props.content}</p>
        <p className="Team-CourseName">{props.course_name}</p>
    </div>
  );
};

export default SingleStory;
