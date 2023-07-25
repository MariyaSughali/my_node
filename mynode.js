const express= require ("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("hello world from MY NODE from vs to git ")
})

app.listen(3000);

module.exports = app;