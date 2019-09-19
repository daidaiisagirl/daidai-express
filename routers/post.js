const express = require("express");
const router = express.Router();
router.get("/",(req,res)=>{
    // 
    res.render("../views/post/index.ejs",{
    posts:[
        {
          title: "华晨宇",
          content:"烟火中的尘埃",
          date:"2019-09-18 19:14",
          author:"代代"
        },
        {
            title: "华晨宇",
            content:"烟火中的尘埃",
            date:"2019-09-18",
            author:"代代"
          },
          {
            title: "华晨宇",
            content:"烟火中的尘埃",
            date:"2019-09-18",
            author:"代代"
          }
        ],
        isLogin:false
            });
});
router.post("/",()=>{
    res.send("新增文章");
});
router.delete("/:id",(req,res)=>{
    // console.log(id);
    res.send("删除某个文章");
});
router.get("/:id/:edit",(req,res)=>{
    res.send("修改文章");
});
module.exports = router;