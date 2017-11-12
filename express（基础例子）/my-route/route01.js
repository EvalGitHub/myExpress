var  express = require("express");

var router = express.Router();
//router == app.route();

var app = express();
router.get("/",function(req,res){
  res.send("首页");
});

router.get("/about",function(req,res){
  res.send("关于");
});



//对路由中参数进行处理（不要觉得没用，那是应为你没用）
router.param("name",function(req,res,next,name){
        //对name经行验证或处理
        console.log(name);
        req.name = name;
        //req.name = 111;
        next();
});

router.get('/hello/:name',function(req,res,next){
  res.send("hello"+req.name)
});

app.use("/",router);

app.listen("3000");

/*
对同一个路径指定get和post方法的回调函数，可以写成链式形式。
var app = express();
app.route('/book')
    .get(function(req,res){
      res.send("get a book");
    })
    .post(function(req,res){
      res.send("update the book");
    });
*/
