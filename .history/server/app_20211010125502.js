const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const router = express();
// dont rwrite db code here it will show no connection
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT || 5000;
require("./db/conn");
//const User = require("./model/userSchema");

router.use(express.json())
const cookieparser=require("cookie-parser");
router.use(cookieparser());
//linked our router files to make our route easy
router.use(require("./router/auth"))
//Middleware

// const middleware = (req, res, next) => {
//   console.log("hello my middleware");
//   next(); //basically if your validation is done then pass it on next page
// };

// app.get("/", (req, res) => {
//   res.send("hi this is very new page");
// });

// app.get("/about", middleware, (req, res) => {
//   res.send("hi this is about page");
// });
// app.get("/contact", (req, res) => {
//   res.cookie("name", "shivam")
//   res.send("hi this is contact page 😎😎😎");
// });s

router.get("/signup", (req, res) => {
  res.send("hi this is very new signup page");
});
console.log("subscribe baby");

router.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
