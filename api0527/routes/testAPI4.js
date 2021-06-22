var express = require("express");
var router = express.Router();
var path = require('path'); //系统路径模块
var fs = require("fs");
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var MongoClient = require('mongodb').MongoClient;
const { runInNewContext } = require("vm");
var url = "mongodb://localhost:27017/";



// function intervalFunc() {
//     console.log('Cant stop me now!');
//     var info=0;
//     info=Math.random();
//     console.log(info);
//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("test");
//         var whereStr = {};  // 查询条件
//         var updateStr = {$set: { "info" : info}};
//         dbo.collection("ours").updateOne(whereStr, updateStr, function(err, res) {
//             if (err) throw err;
//             console.log("文档更新成功1");
            
//             db.close();
//             //res.send("ok");
//         });
//     });

//   }
  
// setInterval(intervalFunc, 1500, 'funky')
router.post('/find', urlencodedParser,  function (req, res) { 
  //console.log("req: " + req.body.filename+","+req.body.name+","+req.body.pwd);
   //res.send('post successfully!'+req.body);
    
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("test");

        var whereStr={

            }  // 查询条件，不需要条件时 写{}即可

        if (req.body.online !== '' ){
            this.whereStr={"online":req.body.online}
        }

        if (req.body.id !== '' ){
            this.whereStr={"id":req.body.id}
        }

        if (req.body.name !== '' ){
            this.whereStr={"name":req.body.name}
        }

        console.log(whereStr);
        //var whereStr={"id":req.body.id}  // 查询条件，不需要条件时 写{}即可
        dbo.collection("ours").find(whereStr).toArray(function(err, result) {

        //console.log(result);

        if (result.length==0) {console.log("no result");db.close();res.send("NO")  ; return;}
        console.log("end"); console.log(result.length);
        db.close();
        res.send(result);
        });
    });
});

router.post('/add', urlencodedParser, function (req, res) { 
  //console.log("req: " +req.body.filename+","+req.body.name+","+req.body.pwd);
  //res.send('post successfully!'+req.body);

    MongoClient.connect(url, function(err, db) {

            if (err) throw err;
            var dbo=db.db('test');
            var query={"online":req.body.online,"id":req.body.id,"name":req.body.name,"info":req.body.info}
            dbo.collection("ours").insertOne(query,function(err,result){
                db.close;
                res.send("ok")
            })
    });
});


router.post('/delete', urlencodedParser, function (req, res) { 
    //console.log("req: " +req.body.filename+","+req.body.name+","+req.body.pwd);
    //res.send('post successfully!'+req.body);
  
    MongoClient.connect(url, function(err, db) {
  
        if (err) throw err;
        var dbo=db.db('test');
        var query={"id":req.body.id}
        dbo.collection("ours").remove(query,function(err,result){
            db.close;
            res.send("ok")
        })
    });
});


router.post('/updata', urlencodedParser, function (req, res) { 
    console.log("req: " +req.body.filename+","+req.body.name+","+req.body.pwd);
    //res.send('post successfully!'+req.body);
  
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        var whereStr = {"id":req.body.id};  // 查询条件
        var updateStr = {$set: { "online" : req.body.online }};
        dbo.collection("ours").updateOne(whereStr, updateStr, function(err, res) {
            if (err) throw err;
            console.log("文档更新成功");
            
            db.close();
            res.send("ok");
        });
    });
});


router.post('/findAll', urlencodedParser,  function (req, res) { 
    //console.log("req: " + req.body.filename+","+req.body.name+","+req.body.pwd);
     //res.send('post successfully!'+req.body);
      
     MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        dbo.collection("ours"). find({}).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
            console.log(result);
            db.close();
            res.send(result);
        });
    });
  });



module.exports = router;
