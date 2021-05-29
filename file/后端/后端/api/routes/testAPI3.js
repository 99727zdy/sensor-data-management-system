var express = require("express");
var router = express.Router();
var path = require('path'); //系统路径模块
var fs = require("fs");
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var MongoClient = require('mongodb').MongoClient;
const { runInNewContext } = require("vm");
var url = "mongodb://localhost:27017/";



router.post('/find', urlencodedParser, function (req, res) {
  console.log("req: " + req.body.filename + "," + req.body.name + "," + req.body.pwd);
  //res.send('post successfully!'+req.body);

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    var whereStr = { "name": req.body.name, "pwd": req.body.pwd };  // 查询条件，不需要条件时 写{}即可
    dbo.collection("users").find(whereStr).toArray(function (err, result) {

      console.log(result);


      if (result.length == 0) { console.log("no result"); db.close(); res.send("NO"); return; }
      console.log("end"); console.log(result.length);
      db.close();
      Level = result.map(function (result) { return result.level })//取出数据库中的level值
      console.log("aaa" + Level);
      Level = Level[0]
      res.send(Level);//向前端发送所需要的数据
    });

  });

  //res.send(my_data);
});

router.post('/add', urlencodedParser, function (req, res) {
  console.log("req: " + req.body.filename + "," + req.body.name + "," + req.body.pwd);
  //res.send('post successfully!'+req.body);

  MongoClient.connect(url, function (err, db) {

    if (err) throw err;
    var dbo = db.db('test');
    var query = { "name": req.body.name, "pwd": req.body.pwd, "level": req.body.level }
    dbo.collection("users").insertOne(query, function (err, result) {
      db.close;
      res.send("ok")
    })

  });


  router.post('/findAll', urlencodedParser, function (req, res) {
    //console.log("req: " + req.body.filename+","+req.body.name+","+req.body.pwd);
    //res.send('post successfully!'+req.body);

    //  MongoClient.connect(url, function(err, db) {
    //     if (err) throw err;
    //     var dbo = db.db("test");
    //     dbo.collection("users"). find({}).toArray(function(err, result) { // 返回集合中所有数据
    //         if (err) throw err;
    //         console.log(result);
    //         db.close();
    //         res.send(result);
    //     });
    // });
  });





  //res.send(my_data);
});
module.exports = router;
