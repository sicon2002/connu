'use strict';

angular.module('starter.services',[]).factory('MemberService', function($http) {
  return {
    all: function() {
      return $http({
        url: './scripts/services/data/members.json',
        method: 'GET'
      });
    },

    get: function(id) {
      return $http({
        url: './scripts/services/data/members.json',
        method: 'GET'
      });
    }
  };
});

