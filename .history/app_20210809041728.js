const express = require("express")
const app = express()

app.get('/', (req,res) => {
res.send("hi this is very new page")
})
console.log("subscribe baby")
