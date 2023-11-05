var express = require("express");
var router = express.Router();
const userModel = require("./db");

/* GET home page. */
router.get("/", function (req, res, next) {
  req.session.active = true; //setting  up an new session
  res.cookie("name", "sandip");
  res.render("index");
});
router.get("/adduser", function (req, res, next) {
  res.render("user");
});
/*Datebase  */

// creating user
router.post("/user", async (req, res, next) => {
  const isAdmin = req.body.isAdmin;
  let adminstatus = false;
  if (isAdmin === "on") {
    adminstatus = true;
  }
  console.log(adminstatus);
  try {
    const newUser = await userModel.create({
      username: req.body.username,
      name: req.body.name,
      age: req.body.age,
      isAdmin: adminstatus,
    });
    // Handle success, e.g., send a response to the client
    res.status(201).json(newUser);
  } catch (error) {
    // Handle any errors, e.g., send an error response
    console.error(error);
    res.status(500).json({ error: "User creation failed" });
  }
});

// finding all user
router.get("/allusers", async (req, res, next) => {
  let users = await userModel.find();

  res.render("all", { users });
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

//reading an cookie

router.get("/read", function (req, res, next) {
  console.log(req.cookies.name);
  res.send("Cookie has been consoled");
});
router.get("/dltc", function (req, res, next) {
  res.clearCookie("name");
  res.send("Cookie has been deleted");
});

module.exports = router;
