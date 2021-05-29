var express = require("express");
var router = express.Router();
 var path = require('path'); //系统路径模块
  var fs = require("fs");
  var bodyParser = require('body-parser');
   var urlencodedParser = bodyParser.urlencoded({ extended: false })

 router.post('/', urlencodedParser,  function (req, res) { 
    console.log("req: " +req.body.filename);
   //res.send('post successfully!'+req.body);
    
var my_data="data=";
//return;
 var file = path.join(__dirname, req.body.filename); //文件路径，__dirname为当前运行js文件的目录
    //var file = 'f:\\nodejs\\data\\test.json'; //也可以用这种方式指定路径
	
	//读取json文件
    fs.readFile(file, 'utf-8', function(err, data) {
        if (err) {
            res.send('文件读取失败');
        } else {
            res.send(data);
        }
    }); 
 
 
  //res.send(my_data);
});
 
module.exports = router;
