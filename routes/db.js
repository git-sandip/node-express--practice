const mongoose = require("mongoose");

const dbConnect = mongoose.connect("mongodb://127.0.0.1:27017/practice");
if (dbConnect) {
  console.log("DB connected sucessfully");
}

const UserSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
});
module.exports = mongoose.model("users", UserSchema);
