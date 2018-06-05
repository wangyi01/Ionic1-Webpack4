'use strict';
let baseInfor=require('../../js/app/config/baseInfor')();
module.exports=followList;
function followList($q,$http){
  return {
    infor:(params)=>{
      let deferred=$q.defer();
      $http.get(`${baseInfor.url}follow/list`,{
        params:{
          page: params.page,
          pagenum: params.pageSize,
          type: params.type,
          order: params.order,
          nickname: params.nickName
        }
      }).success(res=>{
        return deferred.resolve(res);
      })
      return deferred.promise;
    }
  }
}