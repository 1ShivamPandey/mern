const express = require("express")
const app = express()

app.get('/', (req,res) => {
res.send("hi this is very new page")
})
console.log("subscribe baby")

app.listen(3000, () =>{
    console.log(`server is running at 3000`)
})