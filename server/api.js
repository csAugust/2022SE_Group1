/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

// without a system for users, we'll have to hardcode our user name
const MY_NAME = "Test User";

const usermap = new Map();
usermap.set("afsaff","123123");


const data = {
  stories: [
    {
      _id: 0,
      creator_name: "Alice",
      content: "Anyone for software engineering course's group?"
    }
  ],
  comments: [
    {
      _id: 0,
      creator_name: "Bob",
      parent: 0,
      content: "Maybe I could?",
    }
  ],
};

const express = require("express");

const router = express.Router();

router.get("/test", (req, res) => {
  res.send({ message: "Wow I made my first API! In its own file!" });
});

router.get("/stories", (req, res) => {
  // send back all of the stories!
  res.send(data.stories);
});

router.get("/comment", (req, res) => {
  const filteredComments = data.comments.filter(
    (comment) => comment.parent == req.query.parent);
  res.send(filteredComments)
});

router.post("/story", (req, res) => {
  const newStory = {
    _id: data.stories.length,
    creator_name: MY_NAME,
    content: req.body.content,
  };

  data.stories.push(newStory);
  res.send(newStory);
});

router.post("/comment", (req, res) => {
  const newComment = {
    _id: data.comments.length,
    creator_name: MY_NAME,
    parent: req.body.parent,
    content: req.body.content,
  };

  data.comments.push(newComment);
  res.send(newComment);
});

router.post("/login", (req, res) => {
  if(req.body.password == usermap.get(req.body.username)){
    console.log("OK");
    res.send({result : "OK"});
  }
  else{
    console.log("Wrong pwd");
    res.send({result : "Wrong"});
  }
});

router.post("/register", (req, res) => {
  if(usermap.has(req.body.username) == false){
    usermap.set(req.body.username,req.body.password);
    console.log("Register Done");
    res.send({result : "OK"});
  }
  else{
    console.log("Already Exist");
    res.send({result : "Wrong"});
  }
});

const teampostdata = {
  teamposts: [
    {
      _id: 0,
      creator_name: "Alice",
      course_name:"软件工程",
      members_num:1,
      personal_profile:"精通java",
      team_name:"冲冲冲",
      content: "Anyone for software engineering course's group?"
    }
  ],
  comments: [
    {
      _id: 0,
      creator_name: "Bob",
      parent: 0,
      team_name:"软工1组",
      content: "Maybe I could?",
    },
    {
      _id: 1,
      creator_name: "Carol",
      parent: 1,
      content: "人齐了吗?",
    }

  ],
};

router.post("/TeamPostComment", (req, res) => {
  const newTeamPostComment = {
    _id: teampostdata.comments.length,
    creator_name: MY_NAME,
    parent: req.body.parent,
    content: req.body.content,
  };

  teampostdata.comments.push(newTeamPostComment);
  res.send(newTeamPostComment);
});

router.get("/TeamPostComment", (req, res) => {
  const filteredComments = teampostdata.comments.filter(
    (teampostdata) => teampostdata.parent == req.query.parent);
  res.send(filteredComments)
});

router.post("/TeamPost", (req, res) => {
  const newTeamPost = {
    _id: teampostdata.teamposts.length,
    creator_name: MY_NAME,
    content: req.body.content,
  };

  teampostdata.stories.push(newTeamPost);
  res.send(newTeamPost);
});

router.get("/TeamPosts", (req, res) => {
  // send back all of the stories!
  res.send(teampostdata.teamposts);
});

// similar to our other catch all route in server.js,
// let's add a backup route for bad /api routes
router.all("*", (req, res) => {
  console.log(`API Route not found: ${req.method} ${req.url}`);
  res.status(404).send({ message: "API Route not found" });
});

module.exports = router;
