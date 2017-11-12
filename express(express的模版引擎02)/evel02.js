var express= require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var routers = express.Router();
var apiRouters = express.Router();




var hbs = require('hbs');


app.set("view engine",'html');
app.engine("html",hbs.__express);

//加载数据
var blogEngine = require('./blog');


//app.use(bodyParser());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json()) ;

routers.get('/',function(req,res,next){
//  res.render('index');
/// req.url = '/index.html';
 //next();
 
  res.render('index',
  {
    tile:'最近的文章',
    entries:blogEngine.getBlogEntries()
  
  });
 /*
  res.json({
  	"name":'eval',
  	"age":25
  });
  */
;//  next();
});

routers.get('/goInfo',function(req,res){
  //res.render('about');
 res.render('about',{title:"自我介绍"});
 
});

routers.get('/about',function(req,res){
  //res.render('about');
res.render('about',{title:"自我介绍"});
 
});

routers.get('/article/:id',function(req,res){
//res.render('article');
var entry = blogEngine.getBlogEntry(req.params.id);
res.render("article",{title:entry.title,blog:entry});
});
app.use('/',routers);

//app.use("/api",apiRouters);

//制定静态文件目录
//app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'lib')));

//app.use('/api',apiRouters);
//app.listen(3000);

   module.exports = app.listen(3000,function(err){
     if(err){
       return
     }
     console.log('> Listening at  http://localhost: '+ 3000 + '\n')
   });
