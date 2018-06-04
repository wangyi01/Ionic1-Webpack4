/**
 * 拦截器
 */
'use strict';
module.exports=interceptor;

function interceptor(){
  return {
    request:(config)=>{
      if(localStorage.getItem('token')){
        config.headers['ticket']=localStorage.getItem('token');
      }
      config.headers['company']='zhouyunfei';
      return config;
    } 
  }
}