'use strict';
module.exports = angular.module('follow')
  .controller('followCtrl', ['$scope', '$ionicScrollDelegate', '$timeout', 'followList', function ($scope, $ionicScrollDelegate, $timeout, followList) {
    console.log('大神跟单');
    let vm = this,
      pageNum = 1,
      pageSize = 10;
    vm.showSearch = false;
    vm.hasMore = false;
    vm.showNoData = false;
    vm.orderList = [];
    vm.sortList = [{
        text: '发单人购买',
        type: 1,
        active: true,
        sort: false //true 2为升序  1反之降序
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
    let choseingSort = vm.sortList[0];
    vm.loadMore = loadMore;
    vm.search = search;
    vm.choseSort = choseSort;
    vm.doRefresh = doRefresh;
    let img = (function img() {
      let football = require('./img/icon_jingcaizuqiu@3x.png');
      let basketball = require('./img/icon_jingcailanqiu@3x.png');
      let single = require('./img/icon_danchangjingcai@3x.png');
      return {
        football,
        basketball,
        single
      }
    }())
    vm.img = {
      1: img.football,
      3: img.basketball,
      4: img.single,
      bao: require('./img/pic_bao.png')
    };
    list();

    function list(nickName = null, type = 1) {
      let params = {
        page: pageNum,
        pageSize: pageSize,
        type: choseingSort.type,
        order: choseingSort.sort ? 2 : 1,
        nickname: nickName
      };
      followList.infor(params).then(res => {
        if (res.status == 1) {
          if (type == 'sort') {
            vm.orderList = res.data;
          } else {
            if (vm.orderList && vm.orderList.length) {
              vm.orderList = vm.orderList.concat(res.data);
            } else {
              vm.orderList = res.data;
            }
          }
          res.data.length == params.pageSize ? vm.hasMore = true : vm.hasMore = false;
        } else {
          vm.showNoData = true;
          vm.hasMore = false;
          vm.orderList = [];
        };
        $timeout(function () {
          $scope.$broadcast('scroll.infiniteScrollComplete');
          $scope.$broadcast('scroll.refreshComplete');
        }, 200)
        vm.showSearch = false;
      });
    };

    function search() {
      $ionicScrollDelegate.scrollTop();
      list(vm.searchName, 'sort');
    };

    function choseSort(obj) {
      if (!obj.active) {
        angular.forEach(vm.sortList, (item) => {
          if (obj.text == item.text) {
            item.active = true;
            choseingSort = item;
          } else {
            item.active = false;
          }
        });
      } else {
        obj.sort = !obj.sort;
      };
      $ionicScrollDelegate.scrollTop();
      pageNum = 1;
      pageSize = 10;
      list(null, 'sort');
    };

    function doRefresh() {
      pageSize = pageNum * pageSize;
      pageNum = 1;
      list(vm.searchName, 'sort');
    };

    function loadMore() {
      pageNum += 1;
      list();
    };
  }])