const express = require('express');
const bodyParser = require('body-parser');

const app= express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});

app.post("/",(req,res)=>{
    const height = Number(req.body.h);
    const weight = Number(req.body.w);
    const bmi= weight/Math.pow(height,2);
    res.send("Your BMI is"+bmi);
})
app.listen(3000);