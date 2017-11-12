var express = require("express");

var app =  express();
var router =  express.Router();

//ģ����Ⱦ
app.set("views",'./views');
app.set("view engine","jade");

//�κ�һ��·�ɶ���ִ��
router.use(function(req,res,next){
	console.log("Time:",Date.now());
	next();
});

//http://localhost:3000/api
router.get("/",function(req,res,next){
	res.send("///");
});

//http://localhost:3000/api/about
router.use('/about',function(req,res,next){
	console.log("Request Type:",req.method);
	res.send("about");
	next();
});

router.get("/user/:id",function(req,res,next){
	console.log("user",req.params.id);
	res.json({
		name:'user',
		age:332
	});
});


router.get("/nam/:id",function(req,res,next){
	console.log("nam",req.params.id);
	if(req.params.id==0) next("route");
	else next();
},function(req,res,next){
res.render("index",{
	title:'Hey',
	message:'Hello there',
	id:req.params.id
});
//res.send("nam");
});


/*
router.get("/nam/code",function(req,res,next){

	res.send("code");
});
*/

var server = app.listen(3000,function(){
	var host= server.address().addresss;
	var port = server.address().port;
	console.log("example app listening at htttp://%s:%s",host,port);
});

app.use("/api",router);
