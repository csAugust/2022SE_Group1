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
      course_name:"经济学原理",
      members_num:5,
      personal_profile:"来自信科，可以进行数据分析",
      team_name:"Anti-Hero",
      content: "目前已有来自信科的两位同学，希望来自人文院系的小伙伴加入我们哟( •̀ ω •́ )y"
    },
    {
      _id: 1,
      creator_name: ":)",
      course_name:"地震概论",
      members_num:6,
      personal_profile:"不划水~",
      team_name:"Midnights",
      content: "北大第一大课应该不难组队吧("
    }
  ],
  comments: [
    {
      _id: 0,
      creator_name: "Crazy Bob",
      parent: 0,
      content: "举手o(*^▽^*)┛",
    },
    {
      _id: 1,
      creator_name: "Dave",
      parent: 0,
      content: "人齐了吗?",
    },
      {
      _id: 3,
      creator_name: "Thomas",
      parent: 0,
      content: "楼主留号哇(★ ω ★)",
    },
    {
      _id: 0,
      creator_name: "Baby Bob",
      parent: 1,
      content: "来了来了",
    }

  ],
};

router.post("/TeamPostComment", (req, res) => {
  const newTeamPostComment = {
    _id: teampostdata.comments.length,
    creator_name: req.body.creator_name,
    parent: req.body.parent,
    content: req.body.content,
  };
  teampostdata.comments.push(newTeamPostComment);
  res.send(newTeamPostComment);
});

router.post("/TeamPost", (req, res) => {
  const newTeamPost = {
    _id: teampostdata.teamposts.length,
    creator_name: req.body.creator_name,
    content: req.body.content,
    course_name:req.body.course_name,
    team_name:req.body.team_name,
    members_num:req.body.members_num,
    personal_profile:req.body.personal_profile
  };
  teampostdata.teamposts.push(newTeamPost);
  res.send(newTeamPost);
});

router.get("/TeamPostComment", (req, res) => {
  const filteredComments = teampostdata.comments.filter(
    (comment) => comment.parent == req.query.parent);
  res.send(filteredComments);
});



router.get("/TeamPosts", (req, res) => {
  // send back all of the stories!
  res.send(teampostdata.teamposts);
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

// similar to our other catch all route in server.js,
// let's add a backup route for bad /api routes
router.all("*", (req, res) => {
  console.log(`API Route not found: ${req.method} ${req.url}`);
  res.status(404).send({ message: "API Route not found" });
});

module.exports = router;
