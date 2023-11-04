const mongoose = require("mongoose");

const dbConnect = mongoose.connect("mongodb://127.0.0.1:27017/practice");
if (dbConnect) {
  console.log("DB connected sucessfully");
}

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  isAdmin: {
    type: String,
    default: "false",
  },
});
let User = mongoose.model("users", UserSchema);
module.exports = User;
