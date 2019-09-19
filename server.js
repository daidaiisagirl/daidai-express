const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const postRouter = require("./routers/post");
const studentRouter = require("./routers/post");

 app.set("views","views");
 app.set("view engine","ejs");
app.use("/posts",postRouter);
app.use("/students",postRouter);
app.get("/",(req,res)=>{
    res.render("welcome",{
        name:"花香",
        isLogin:true
    }
    );
});
app.listen(3000);
//req.body中间件
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

// app.use(cookieParser());
// app.get("/",(req,res)=>{
//     res.send("hello express");
// });
// app.get("/query",(req,res)=>{
//     console.log(req.query);
//     res.send("req.query");
// });
// app.post("/handleLogin",(req,res)=>{
//     console.log(req.body);
//     res.send("req.body");
// });
// app.get("/setCookie",(req,res)=>{
//    res.cookie("uname","huahua",{
//        maxAge:1000 * 60 * 10
//    });
//    res.send("成功设置cookie");
// });
// app.get("/getCookie",(req,res)=>{
//     console.log(req.cookies);
//     res.send("获取cookie");
// });
// app.get("/hello/:id",(req,res)=>{
//     console.log(req.params);
//     res.send("获取id");
//   });
//   app.get("/world/:name/:age",(req,res)=>{
//       console.log(req.params);
//       console.log(req.get("Accept"));
//       res.send("hello");
//   });
//   const my = type => {
//     return (req,res,next)=>{
//         let abc = new Date();
//         let year = abc.getFullYear();
//         let month = abc.getMonth() + 1;
//         let date = abc.getDate();
//         if (type === 1) {
//           // 年月日
//           req.requestTime = `${year} - ${month} - ${date}`;
//         } else if (type === 2) {
//           // 年月
//           req.requestTime = `${year} - ${month}`;
//         } else if (type === 3) {
//           // 年
//           req.requestTime = `${year}`;
//         } else {
//           req.requestTime = abc.getTime();
//         }
    
//         next();
//     };
//   }
//   app.use(my());
//   app.get("/test",my(1),(req,res)=>{
//       console.log(req.requestTime);
//       res.send("test");
//   });
//   app.get("/test1",my(2),(req,res)=>{
//     console.log(req.requestTime);
//     res.send("test1");
// });
//   app.listen(3000);