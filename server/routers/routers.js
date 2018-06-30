const express = require('express');
const cors = require('cors');
const gameLists = require('../controllers/home')();
const webpack = require('webpack');
let webpackConfig = require('../../webpack.dev');
let compiler = webpack(webpackConfig);
const app = express();
app.use(cors()); //跨域插件
app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));
//监听页面修改，及时更新
app.use(require("webpack-hot-middleware")(compiler, {
  log: console.log,
  path: '/__webpack_hmr', //必须与webpack.config.dev.js中的保持一致
  heartbeat: 10 * 1000
}));
// app.all('*', function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With,company");
//   // res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//   // res.header("X-Powered-By",' 3.2.1')
//   if (req.method == "OPTIONS") res.sendStatus(200); /*让options请求快速返回*/
//   else next();
// });
app.get('/img/gamecontents', (req, res, next) => {
  gameLists.then(result => {
    // console.log(result);
    res.send(result);
  }).catch((err) => {});
});
app.listen(3000, () => {
  console.log('Server Start');
});