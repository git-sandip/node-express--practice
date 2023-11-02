var express = require("express");
var router = express.Router();
const userModel = require("./db");

/* GET home page. */
router.get("/", function (req, res, next) {
  req.session.active = true; //setting  up an new session
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

//consoling the session what we implemented
router.get("/session", (req, res, next) => {
  console.log(req.session);
  res.send("Check console");
});
//acessing the session values and performing some checkes
router.get("/isActive", (req, res, next) => {
  if (req.session.active === true) {
    res.send("User is Active");
  } else {
    res.send("User is unactive");
  }
});

//destroying the session with somne error handeling
router.get("/sessiondestroy", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) throw err;
    res.send("Session has been destroyed");
  });
});

module.exports = router;
