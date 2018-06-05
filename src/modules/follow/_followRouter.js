'use strict';
module.exports=angular.module('follow',[])
.config(['$stateProvider',function($stateProvider){
  $stateProvider.state('tab.follow',{
    url:'/follow',
    views:{
      'tab-follow':{
        templateProvider:($q)=>{
          var deferred=$q.defer();
          require.ensure(['./follow.html'],(require)=>{
            deferred.resolve(require('./follow.html'));
          },'follow-tpl');
          return deferred.promise;
        },
        controller:'followCtrl as vm',
        resolve:{
          'tab.follow':($q,$ocLazyLoad)=>{
            var deferred=$q.defer();
            require.ensure(['./followCtrl.js'],()=>{
              $ocLazyLoad.load({name:'follow'});
              deferred.resolve(require('./followCtrl'));
            },'follow-ctrl');
            return deferred.promise;
          }
        }
      }
    }
  })
}]).name