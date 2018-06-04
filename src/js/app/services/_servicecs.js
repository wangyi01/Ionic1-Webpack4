/**
 * 主要为引入各项服务的主引入文件
 */
'use strict';

module.exports = angular.module('service', [])
/**拦截器*/
.factory('interceptor',require('./lists/interceptor'))
/**首页游戏列表 */
.service('list',require('../../../modules/home/_homeService'))