import React from "react";

/**
 * Story is a component that renders creator and content of a story
 *
 * Proptypes
 * @param {string} _id of the story
 * @param {string} creator_name
 * @param {string} content of the story
 */
const SingleStory = (props) => {
  return (
    <div className="Card-story">
      <span className="u-bold">{props.creator_name}</span>
      <p className="Card-storyContent">{props.content}</p>
      <span className="u-bold">{props.CourseName}</span>
      <span className="u-bold">{props.MembersNum}</span>
      <span className="u-bold">{props.PersonalProfile}</span>
      <span className="u-bold">{props.TeamName}</span>
    </div>
  );
};

export default SingleStory;
