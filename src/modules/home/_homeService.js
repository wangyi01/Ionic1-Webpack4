'use strict';
/** baseInfor为company,url信息*/
let baseInfor=require('../../js/app/config/baseInfor')();
module.exports=gameList;

function gameList($q,$http){
  return {
    infor:function(){
      var deferred=$q.defer();
      $http.get(`${baseInfor.url}img/gamecontents`).success(function(res){
        return deferred.resolve(res);
      })
      return deferred.promise;
    }
  }
}