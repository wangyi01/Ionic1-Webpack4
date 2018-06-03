/**
 * 基础配置项
 */
'use strict';
module.exports = angular.module('baseConfig', [])
  .config(['$httpProvider', '$ionicConfigProvider', function ($httpProvider, $ionicConfigProvider) {
    $httpProvider.defaults.transformRequest = function (obj) {
      var str = [];
      for (var p in obj) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
      return str.join("&");
    };
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    $httpProvider.interceptors.push('myInterceptor');
    //控制tabs位置以及返回按钮的样式
    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');
    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-ios-arrow-left');
    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('none');
    //设置默认返回按钮文字
    // $ionicConfigProvider.backButton.previousTitleText(false).text('返回');
    //禁用右滑后退
    $ionicConfigProvider.views.swipeBackEnabled(false);
  }])