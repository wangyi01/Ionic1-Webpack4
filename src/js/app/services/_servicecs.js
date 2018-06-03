/**
 * 主要为引入各项服务的主引入文件
 */
'use strict';
module.exports = angular.module('app.service', [
  require('./lists/interceptor'),
  require('./lists/showMsg'),
  require('./lists/textFilter')
])