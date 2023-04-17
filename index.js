const express=require('express');
const app=express();
const dotenv=require('dotenv').config();
const PORT=process.env.PORT ||8080;

app.get("/",(req,res)=>{
    res.send("Welcome sample API app")
})
app.get("/data",(req,res)=>{
    res.json({
        message:"success",
        data:{
            name:"jitu",
            age:27
        }
    })
})


app.listen(PORT,()=>{
    console.log(`Server connected at PORT ${PORT}`);
})