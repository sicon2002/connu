"use strict";
// Ionic Starter App

/********
 * http://localhost:63342/ConnU/app/index.html#/app/mygarden
 * http://localhost:8000/p/users/queryAll
 * open -a "google Chrome" --args --disable-web-security & -allow-file-access-from-files
 */

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.directives'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
      // navigator.splashscreen.hide();
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/common/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.diary', {
        url: '/diary',
        views: {
          'menuContent': {
            templateUrl: 'templates/diary/diary.html',
            controller: 'DiaryCtrl'
          }
        }
      })

      .state('app.keepanote', {
        url: '/keepanote',
        views: {
          'menuContent': {
            templateUrl: 'templates/diary/keepanote.html',
            controller: 'KeepANoteCtrl'
          }
        }
      })
      .state('app.plantlibs', {
        url: '/plantlibs',
        views: {
          'menuContent': {
            templateUrl: 'templates/plantlibs/plantlibs.html'
          }
        }
      })
      .state('app.mygarden', {
        url: '/mygarden',
        views: {
          'menuContent': {
            templateUrl: 'templates/mygarden/mygarden.html',
            controller: 'MyGardenCtrl'
          }
        }
      })
      .state('app.plantadd', {
        url: '/plantadd',
        views: {
          'menuContent': {
            templateUrl: 'templates/mygarden/plantadd.html',
            controller: 'PlantAddCtrl'
          }
        }
      })
      .state('app.profile', {
        url: '/profile',
        views: {
          'menuContent': {
            templateUrl: 'templates/my/profile.html',
            controller: 'MyProfileCtrl'
          }
        }
      })
      .state('app.account', {
        url: '/account',
        views: {
          'menuContent': {
            templateUrl: 'templates/my/account.html',
            controller: 'AccountCtrl'
          }
        }
      })

      .state('app.plants', {
        url: '/plants/:playlistId',
        views: {
          'menuContent': {
            templateUrl: 'templates/mygarden/plant.html',
            controller: 'PlantCtrl'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/mygarden');
  });
