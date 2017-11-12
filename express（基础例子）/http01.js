var  express=require("express");
var http = require("http");

var app = express();
// app.use(function(req,res,next){
//   console.log("in comes a "+req.method + "to"+req.url);
//   next();
//   });
  app.use(function(req,res){
  //  res.writeHead(200,{"Content-Type":"text-/plain"});
    //res.send("Hello world!\n");
    //res.redirect('https://www.baidu.com/?tn=97011255_hao_pg');
  //  res.sendFile('/my-pro/express/demo/q.jpg');
    res.render("index",{message:"Heollo world"});
  });
 http.createServer(app).listen(1337)
