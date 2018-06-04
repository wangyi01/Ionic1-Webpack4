'use strict';
module.exports=angular.module('tabs',[])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
  $stateProvider.state('tab',{
    url:'/tab',
    abstract:true,
    templateProvider:function($q){
      var deferred=$q.defer();
      require.ensure(['./tabs.html'],function(require){
        deferred.resolve(require('./tabs.html'));
      },'tabs-tpl');
      return deferred.promise;
    }
  });
  $urlRouterProvider.otherwise('/tab/home');
}]).name