'use strict';
module.exports=function($q,$http){
  return {
    infor:function(){
      var deferred=$q.defer();
      $http.get('http://api1.hqjc888.com/api/img/gamecontents').success(function(res){
        return deferred.resolve(res);
      })
      return deferred.promise;
    }
  }
}