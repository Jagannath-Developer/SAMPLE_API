// const express=require('express');
// const app=express();
// const dotenv=require('dotenv').config();
// const PORT=process.env.PORT ||8080;

// app.get("/",(req,res)=>{
//     res.send("Welcome sample API app")
// })
// app.get("/data",(req,res)=>{
//     res.json({
//         message:"success",
//         data:{
//             name:"jitu",
//             age:27
//         }
//     })
// })
// app.get("/products",async(req,res)=>{
//     const response=await fetch("https://fakestoreapi.com/products");
//     console.log(response)
//     const data= await response.json();
//     console.log(data)
//     res.json({
//         message:"success",
//         data:data
//     })
// })

// app.listen(PORT,()=>{
//     console.log(`Server connected at PORT ${PORT}`);
// })

const WebSoket=require('ws');
const server=new WebSoket.Server({port:'3002'});

server.on('connection',socket=>{
    socket.on('message',message=>{
        console.log("recived:",message.toString())
        // socket.send("from user:"+message);
        // socket.send("message:"+message.toString());
        server.clients.forEach( function (client){
            if(client!=socket){
                client.send(""+message);
            }
        })
    })
    
    socket.on("open",function(){
        console.log("open:");
    })
    socket.on("close",function(){
        console.log("i lost my connection");
    })
    console.log("one more client is connected")
})