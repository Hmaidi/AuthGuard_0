const express = require('express');
 const bodyparser = require('body-parser');
 const cors = require('cors');
 const  port = 3000;

 const app = express();
 const api = require('../server/routers/api')
 app.use(bodyparser.json());
 app.use(cors());
 app.use('/api',api);
 app.get('/', function(req,res){
       res.send("hello the premier test");
 });


 app.listen(port, function(req,res){
       console.log('this server listen to port ' + port)
 });