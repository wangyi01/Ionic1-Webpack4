/**
 * 拦截器
 */
'use strict';
module.exports=interceptor;

function interceptor($window){
  return {
    request:function(config){
      if($window.localStorage['token']){
        config.headers['ticket']=$window.localStorage.token;
      }
      config.headers['company']='zhouyunfei';
      return config;
    }
  }
}