const express = require("express");
const router = express.Router();
router.get("/",(req,res)=>{
    res.send("学生列表");
});
router.post("/",(req,res)=>{
    res.send("新增学生");
});
router.delete("/:id",(req,res)=>{
    // console.log(id);
    res.send("删除某个学生");
});
router.get("/:id/:edit",(req,res)=>{
    res.send("修改学生");
});
module.exports = router;