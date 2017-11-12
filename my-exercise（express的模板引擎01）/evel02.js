var express= require('express');

//http://www.jb51.net/article/58166.htm
var bodyParser = require('body-parser');
var path = require('path');

var app = express();


// hbs是express的众多模版之一，可以google一下去了解。
var hbs = require('hbs');

//设置模版引擎
app.set("view engine",'html');
app.engine("html",hbs.__express);

//加载数据
var blogEngine = require('./blog');


//app.use(bodyParser());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json()) ;

app.get('/',function(req,res){
//  res.render('index');
  res.render('index',
  {
    tile:'最近的文章',
    entries:blogEngine.getBlogEntries()
  });
});

app.get('/about',function(req,res){
  //res.render('about');
  res.render('about',{title:"自我介绍"});
});

app.get('/article/:id',function(req,res){
//res.render('article');
var entry = blogEngine.getBlogEntry(req.params.id);
res.render("article",{title:entry.title,blog:entry});
});

//制定静态文件目录
//app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
//监听3000端口
app.listen(3000);
