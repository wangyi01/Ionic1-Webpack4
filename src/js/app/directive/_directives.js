/** 
 * 指令主入口
 */
'use strict';
module.exports = angular.module('app.router', [
  require('./lists/singlePass'),
  require('./lists/renderFinish')
])