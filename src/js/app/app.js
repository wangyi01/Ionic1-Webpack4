/**
 * agnuarjs启动页
 * 启动依赖模块、run、config基础配置项
 */
'use strict';
// require('./app/directive/_directives');
require('./routers/_routers');
require('./services/_servicecs');


module.exports=angular.module('app',['ionic','service','router',require('oclazyload')])
.config(require('./config/config'))

