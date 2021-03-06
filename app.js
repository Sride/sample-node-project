const express = require('express');
const app = express();
const router = express.Router();

const path = __dirname + '/views/';
const port = 8001;

router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/', function(req,res){
  res.sendFile(path + 'index.html');
});

router.get('/sharks', function(req,res){
  console.log(req);
  var ipAddress = req.headers['x-forwarded-for'] || req.headers['X-Forwarded-For'] || req.headers['x-real-ip'];
  console.log("x-forwarded-for", req.headers['x-forwarded-for']);
  console.log("X-Forwarded-For", req.headers['X-Forwarded-For']);
  console.log("x-real-ip", req.headers['x-real-ip']);
  res.sendFile(path + 'sharks.html');
});

app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
  console.log('Example app listening on port 8001!')
})