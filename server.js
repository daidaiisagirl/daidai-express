const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
//req.body中间件
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieParser());
app.get("/",(req,res)=>{
    res.send("hello express");
});
app.get("/query",(req,res)=>{
    console.log(req.query);
    res.send("req.query");
});
app.post("/handleLogin",(req,res)=>{
    console.log(req.body);
    res.send("req.body");
});
app.get("/setCookie",(req,res)=>{
   res.cookie("uname","huahua",{
       maxAge:1000 * 60 * 10
   });
   res.send("成功设置cookie");
});
app.get("/getCookie",(req,res)=>{
    console.log(req.cookies);
    res.send("获取cookie");
});
app.get("/hello/:id",(req,res)=>{
    console.log(req.params);
    res.send("获取id");
  });
  app.get("/world/:name/:age",(req,res)=>{
      console.log(req.params);
      console.log(req.get("Accept"));
      res.send("hello");
  });
app.listen(3000);