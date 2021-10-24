const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hi this is very new page");
});

app.get("/about", (req, res) => {
  res.send("hi this is very new page");
});
app.get("/contact", (req, res) => {
  res.send("hi this is very new page");
});
app.get("/signin", (req, res) => {
  res.send("hi this is very new page");
});

app.get("/signup", (req, res) => {
  res.send("hi this is very new signup page");
});
console.log("subscribe baby");

app.listen(3000, () => {
  console.log(`server is running at 3000`);
});
