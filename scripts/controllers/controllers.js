"use strict";

angular.module('starter.controllers', [])

  .filter('inSlicesOf',
  ['$rootScope',
    function ($rootScope) {
      var makeSlices = function (items, count) {
        if (!count) {
          count = 3;
        }

        if (!angular.isArray(items) && !angular.isString(items)) return items;

        var array = [];
        for (var i = 0; i < items.length; i++) {
          var chunkIndex = parseInt(i / count, 10);
          var isFirst = (i % count === 0);
          if (isFirst)
            array[chunkIndex] = [];
          array[chunkIndex].push(items[i]);
        }

        if (angular.equals($rootScope.arrayinSliceOf, array))
          return $rootScope.arrayinSliceOf;
        else
          $rootScope.arrayinSliceOf = array;

        return array;
      };

      return makeSlices;
    }]
)

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/my/login.html', {
      scope: $scope
    }).then(function (modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };

    $scope.loginData = {"username": "sicon", "password": "pwd"};
  })

  .controller('MyGardenCtrl', function ($scope, $state, MemberService) {

    MemberService.get(1).success(function (response) {
      // console.log(response);
      $scope.myplants = response;
    });

    $scope.loginData = {"username": "sicon", "password": "pwd"};
    $scope.searchData = {"kw": ""};
    //console.log("after init.");

    $scope.addnew = function () {
      console.log("before go to plant add");
      $state.go("app.plantadd", {}, {reload: false});
      console.log("after go to plant add");
    };

    $scope.signIn = function () {
      alert("you've signed in!");
    };

    $scope.showMyProfile = function(){
      $state.go("app.profile");
    };
  })


  .controller('PlantCtrl', function ($scope, $state, $stateParams) {

    $scope.showGraphic = function () {
      console.log("you are in plant control:" + $stateParams.playlistId);

      var lineChartData = {
        labels: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
        datasets: [
          {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [45, 33, 48, 56, 59, 51, 69]
          }
        ]
      }

      var ctx = document.getElementById("canvas").getContext("2d");
      var myLine = new Chart(ctx).Line(lineChartData, {
        responsive: true
      });
      ctx = document.getElementById("canvas1").getContext("2d");
      myLine = new Chart(ctx).Line(lineChartData, {
        responsive: true
      });
      ctx = document.getElementById("canvas2").getContext("2d");
      myLine = new Chart(ctx).Line(lineChartData, {
        responsive: true
      });
    };

    $scope.showGraphic();

    $scope.helloyou = function(){
      $state.go('app.diary');
    };

  })

  .controller('MyProfileCtrl', function($scope){

  })

  .controller('AccountCtrl', function($scope){

  })

  .controller('KeepANoteCtrl', function($scope){
    alert(1);
  })

  .controller('PlantAddCtrl', function ($scope) {
    $scope.Plant = {
      'Name': '带斑点的小花',
      'CtgId': 102,
      'CtgName': '百合科－芦荟属－多叶芦荟'
    };
  });
