/**
 * Created by Administrator on 2017/11/8.
 */
//·�ɾ��
var express = require("express");
var app =new express();

app.get("/example/a",function(req,res){
    res.send("Hello from a ")
});





//�ص�������(���,�ǵ�ָ��next ����)
app.get('/example/b',function(req,res,next){
    console.log("response will be sent by next function");
    next();
},function(req,res){
    res.send("hello from b");
});


//ʹ�ûص��������鴦��·��
var cb0 = function(req,res,next){
    console.log("CB0");
    next();
};
var cb1 =function(req,res,next){
    console.log("CB1");
    next();
};
var cb2 =function(req,res,next){
    console.log("CB2");
    res.send("from CB2")
   // next();
};


app.get('/example/c', [cb0,cb1,cb2]);


//���ʹ�ú����ͺ������鴦��·��
var cb0 = function(req,res,next){
    console.log("CB0");
    next();
};
var cb1 =function(req,res,next){
    console.log("CB1");
    next();
};
app.get('/example/d',[cb0,cb1],function(req,res,next){
    console.log("response will be sent by the next funcion....");
    next();
},function(req,res){
   // res.send("Hello from D!");
   // res.download('/out.txt', "wwww.txt");
    res.json({
        data:'1',
        age:23
    });

});







var server =app.listen(3002,function( ){
    var host =server.address().address;
    var port =server.address().port;
    console.log("Examaple app listenling at http://%s:%s", host, port);
});