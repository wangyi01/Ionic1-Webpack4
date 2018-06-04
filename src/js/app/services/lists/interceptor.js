/**
 * 拦截器
 */
'use strict';
let baseInfor=require('../../config/baseInfor')();
module.exports=interceptor;

function interceptor(){
  return {
    request:(config)=>{
      if(localStorage.getItem('token')){
        config.headers['ticket']=localStorage.getItem('token');
      }
      config.headers['company']=baseInfor.company;
      return config;
    } 
  }
}