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
      console.log(response);
      $scope.myplants = response;
    });

    $scope.loginData = {"username": "sicon", "password": "pwd"};
    $scope.searchData = {"kw": ""};
    console.log("after init.");

    $scope.addnew = function () {
      console.log("before go to plant add");
      $state.go("app.plantadd", {}, {reload: false});
      console.log("after go to plant add");
    };
  })


  .controller('PlantCtrl', function ($scope, $stateParams) {
    console.log("you are inside plant ctrl");
  })

  .controller('PlantAddCtrl', function ($scope) {
    $scope.Plant = {
      'Name': '带斑点的小花',
      'CtgId':102,
      'CtgName':'百合科－芦荟属－多叶芦荟'
    };
  });
