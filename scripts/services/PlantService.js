'use strict';

angular.module('starter.services', []).factory('PlantService', function ($http) {

  return {
    getMyPlants: function () {
      var a = 0;
      return a;
    },

    all: function () {
      return $http({
        url: './scripts/services/data/members.json',
        method: 'GET'
      });
    },

    get: function (id) {
      return $http({
        url: './scripts/services/data/members.json',
        method: 'GET'
      });
    }
  };

});

