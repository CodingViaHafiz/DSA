// const quote = "hello world";
// const reversed = quote.split("").reverse().join();
// console.log(reversed);

// express server
// const express = require("express");
// const app = express();
// app.use(express.json);
// app.get("/", (req, res) => {
//   res.json({ message: "hello world" });
// });
// app.listen(1000, () => console.log("server is running..."));

// connect mongoDB
// const mongoose = require("mongoose");
// const connect = mongoose.connect("http://localhost:2717/mydb");
// module.exports = connect;

// model
// const mongoose = require("mongoose");
// const userSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
// });
// module.exports = mongoose.model("User", userSchema);

// import React from "react";
// const fucntion = () =>{
//   return (

//   )
// }
// export default function

// callback function
// A function passed as an argument to another function to run later.
function greet(name, callback) {
  console.log("Hi" + name);
  callback();
}
function saybye() {
  console.log("bye!");
}
greet("Hafiz", saybye);
