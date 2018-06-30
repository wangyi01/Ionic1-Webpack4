const express = require('express');
const cors = require('cors');
// const http = require('http');
// const reload = require('reload');
const gameLists = require('../controllers/home')();
const webpack = require('webpack');
let webpackConfig = require('../../webpack.dev');
let compiler = webpack(webpackConfig);
const app = express();
app.use(cors()); //跨域插件
app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  stats:{
    colors:true
  }
}));
// //监听页面修改，及时更新
app.use(require("webpack-hot-middleware")(compiler, {
  // log: console.log,
  path: '/__webpack_hmr', //必须与webpack.config.dev.js中的保持一致
  heartbeat: 10 * 1000
}));
app.get('/img/gamecontents', (req, res, next) => {
  gameLists.then(result => {
    // console.log(result);
    res.send(result);
  }).catch((err) => {});
});
app.listen(3000,()=>{
  console.log('Server Start!');
});
// const server = http.createServer(app);
// reload(app, server);
// server.listen(3000, () => {
//   console.log('Server Start!');
// });