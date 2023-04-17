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
app.get("/products",async(req,res)=>{
    const response=await fetch("https://fakestoreapi.com/products");
    const data=response.json();
    res.json({
        message:"success",
        data:data
    })
})

app.listen(PORT,()=>{
    console.log(`Server connected at PORT ${PORT}`);
})