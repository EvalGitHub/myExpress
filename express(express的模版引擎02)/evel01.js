var express =require("express");
var app = express();
var path = require('path');
//设定port 变量，意为访问端口
app.set("port",process.env.PORT || 3009);

//设定views变量，试图存放的目录
app.set("views",path.join(__dirname,'views'));

//设定viewS变量，engine 变量 意为网页模板引擎
app.set('view engine','html');

// app.use(express.favicon());
// app.use(express.logger('dev'));
// app.use(express.bodyParser());
// app.use(express.methodOverride());
// app.use(app.router);

//常规写法
app.get('/',function(req,res){
  res.send("hello world");
});

//若要设置HTTP头部信息
app.get('/htp',function(req,res){
  var body = "Hello world";
  res.setHeader("Content-Type","text/plain");
  res.setHeader('Content-Length',body.length);
  res.setHeader('expire',"nocache");
  res.send(body);
});

// 设定静态文件目录，比如本地文件A
// 目录为demo/public/images，访问
// 网址则显示为http://localhost:3000/images
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'));
