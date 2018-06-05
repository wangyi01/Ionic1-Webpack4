'use strict';
module.exports=angular.module('follow')
.controller('followCtrl',['$scope','$rootScope','$state','$http','$window','$ionicScrollDelegate','$timeout','followList',function($scope, $rootScope, $state, $http, $window,$ionicScrollDelegate,$timeout,followList){
  console.log('大神跟单');
  let vm=this;
  
  let follow=function(nickName=null,type=1){
    let showSearch=false;
    let orderList=[];
    let params={
      page:1,
      pageSize:10,
      type:type,
      order:1,
      nickname:nickName
    };
    let sortList=[
      {
        text: '发单人购买',
        type: 1,
        active: true,
        sort: false //true为升序 反之降序
      },
      {
        text: '起投',
        type: 2,
        active: false,
        sort: false
      },
      {
        text: '人气',
        type: 3,
        active: false,
        sort: false
      }
    ];
    return{
      sortList:()=>{},
      list:()=>{}
    }
  }();
  vm.showSearch = false;
  vm.orderList=[];
  let img=(function img(){
    let football=require('./img/icon_jingcaizuqiu@3x.png');
    let basketball=require('./img/icon_jingcailanqiu@3x.png');
    let single=require('./img/icon_danchangjingcai@3x.png');
    return{
      football,basketball,single
    }
  }())
  vm.img={
    1:img.football,
    3:img.basketball,
    4:img.single,
    bao:require('./img/pic_bao.png')
  };
  List();
  function List(nickName=null,type=1){
    let params={
      page:1,
      pageSize:10,
      type:type,
      order:1,
      nickname:nickName
    };
    followList.infor(params).then(res=>{
      console.log(res);
      if(res.status==1){
        vm.orderList=res.data;
      }
    });
  }
}])