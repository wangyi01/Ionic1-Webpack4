'use strict';
module.exports=angular.module('home',[])
.config(['$stateProvider',function($stateProvider){
  $stateProvider.state('tab.home',{
    url:'/home',
    views:{
      'tab-home':{
        templateProvider:function($q){
          var deferred=$q.defer();
          require.ensure(['./home.html'],function(require){
            deferred.resolve(require('./home.html'));
          },'home-tpl');
          return deferred.promise;
        },
        controller:'homeCtrl as vm',
        resolve:{
          'tab.home':function($q,$ocLazyLoad){
            var deferred=$q.defer();
            require.ensure(['./homeCtrl.js'],function(){
              $ocLazyLoad.load({name:'home'});
              deferred.resolve(require('./homeCtrl'));
            },'home-ctrl');
            return deferred.promise;
          }
        }
      }
    }
  })
}]).name