const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
require("../db/conn");
const User = require("../model/userSchema");
const authenticate = require("../middleware/authenticate");
const bcrypt = require("bcrypt");
router.get("/", (req, res) => {
  res.send("hi from router page");
});

//using promises

// router.post("/register", (req, res) => {
//   // console.log(req.body)
//   // res.json({message:req.body})
//   const { name, email, phone, work, password, cpassword } = req.body;
// //   console.log(name);
// //   console.log(phone);
//   if (!name || !email || !phone || !work || !password || !cpassword) {
//     return res.status(422).json({ error: "acche se bharo data ko bsdk" });
//   }
//  User.findOne({email:email}).then((userExist)=> {
//      if(userExist){
//          return res.status(422).json({error:"email already exist"})
//      }
//  })
// const user = new User({ name, email, phone, work, password, cpassword})
// user.save().then(()=>{
//     res.status(201).json({message:"user registered successfully"})
// }).catch((err) => res.status(500).json({error:"failed to register"}))
// })

//using async await

router.post("/register", async (req, res) => {
  // console.log(req.body)
  // res.json({message:req.body})
  const { name, email, phone, work, password, cpassword } = req.body;
  //   console.log(name);
  //   console.log(phone);
  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json({ error: "acche se bharo data ko bsdk" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "email already exist" });
    } else if (password != cpassword) {
      return res.status(422).json({ error: "password is not matching" });
    } else {
      const user = new User({ name, email, phone, work, password, cpassword });
      await user.save();
      res.status(201).json({ message: "user registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

// LOGIN LOGIC
router.post("/signin", async (req, res) => {
  // console.log(req.body)
  // res.json({message:"awesome"})
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "pls fill the data" });
    }
    const userLogin = await User.findOne({ email: email });
    if (userLogin) {
      //  console.log(userLogin);
      const isMatch = await bcrypt.compare(password, userLogin.password);
      const token = await userLogin.generateAuthToken();
      console.log(token);
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      if (!isMatch) {
        res.status(400).json({ error: "invalid credentials pass" });
      } else {
        res.json({ message: "user signin successfully " });
      }
    } else {
      res.status(400).json({ error: "invalid credentials emailc" });
    }
  } catch (err) {
    console.log(err);
  }
});

//about us ka page

router.get("/about", authenticate, (req, res) => {
  //res.send("hi this is about page");
  console.log("hello my account");
  res.send(req.rootUser);
});

//user data for home & contact page

router.get("/getdata", authenticate, (req, res) => {
  //res.send("hi this is about page");
  console.log("hello my account");
  res.send(req.rootUser);
});

//contact page

router.post("/contact", authenticate, async (req, res) => {
  try {
    const { name, email, phone, work, message } = req.body;

    if (!name || !email || !phone || !work || !message) {
      console.log("error in contact form");
      return res.json({ error: "pls fill the contact form" });
    }
    const userContact = await User.findOne({ _id: req.userID });
    if (userContact) {
      const userMessage = await userContact.addMessage(
        name,
        email,
        phone,
        work,
        message
      );
      await userContact.save();
      res.status(201).json({ message: "user contact successfully" });
    }
  } catch (error) {
    consoe.log(error);
  }
});
//Logout ka page

router.get("/logout", (req, res) => {
  console.log("hello my logout page");
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("user logout");
});
module.exports = router;
