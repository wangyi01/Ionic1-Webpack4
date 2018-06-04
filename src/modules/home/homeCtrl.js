'use strict';
module.exports = angular.module('home')
.controller('homeCtrl', ['list','$sce',function (list,$sce){
  console.log('首页');
  let vm=this;
  vm.img={
    banner:require('./img/banner@3x.png'),
    aatchAction:require('./img/icon_bisaishikuang@3x.png'),
    winWall:require('./img/img1@3x.png'),
    winStrategy:require('./img/img2@3x.png'),
    topic:require('./img/img3@3x.png')
  };
  vm.gameList=[];
  vm.jumpTo=jumpTo;
  /**
  *游戏列表
  */
  function gameList(){
    list.infor().then(function(res){
      if(res.status==1){
        vm.gameList=res.data;
      }
    })
  }
  /**
  * @param {*} obj 游戏列表明细，根据state状态进行跳转
  * state:1跳转,3暂停销售 
  */
  function jumpTo(obj){
    console.log(obj);
  };
}])