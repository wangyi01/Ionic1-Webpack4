const express = require('express');
const http = require('http');
const cors = require('cors');
const app = express();
app.use(cors());
app.get('/',(req,res,next)=>{
  res.send('hello');
});
// // app.all('*', function (req, res, next) {
// //   res.header("Access-Control-Allow-Origin", "*");
// //   res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With,company");
// //   // res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
// //   // res.header("X-Powered-By",' 3.2.1')
// //   if (req.method == "OPTIONS") res.sendStatus(200); /*让options请求快速返回*/
// //   else next();
// // });
// app.get('/img/gamecontents', function (req, response, next) {
//   // console.log(req.headers);
//   var options = {
//     headers: {
//       company: 'fhwc'
//     },
//     hostname: 'api1.fhwcai.com',
//     port: '8880',
//     path: '/api/img/gamecontents'
//   };
//   http.get(options, function (res) {
//     // console.info(res);
//     var data = '';
//     res.on('data', function (chunk) {
//       data += chunk;
//       console.log(data);
//     });
//     res.on('end', function () {
//       try {
//         var parsedData = JSON.parse(data);
//         response.send(parsedData);
//       } catch (e) {};
//     });
//   });
// });
app.listen(3000, function () {
  console.log('服务启动了');
});