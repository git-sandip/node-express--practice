var express = require("express");
var router = express.Router();
const userModel = require("./db");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
/*Datebase  */
// creating user
router.get("/user", async (req, res, next) => {
  const createduser = await userModel.create();

  res.send(createduser);
});
// finding all user
router.get("/allusers", async (req, res, next) => {
  let allUsers = await userModel.find();
  res.send(allUsers);
});
//finding one user
router.get("/one", async (req, res, next) => {
  let oneuser = await userModel.findOne({
    username: "hehe",
  });
  res.send(oneuser);
});
//deleting one user
router.get("/delete", async (req, res, next) => {
  let deletedUser = await userModel.findOneAndDelete({
    username: "sandycodes",
  });
  res.send(deletedUser);
});

module.exports = router;
