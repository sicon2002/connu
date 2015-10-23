"use strict";

var app = angular.module('starter.directives', []);

app.directive('homeMenu', function() {
  return {
    restrict: 'AE',
    replace: 'true',
    templateUrl: 'templates/common/home.html',
    link: function(scope, elem, attrs) {
      //var titleElement = angular.element(element.children().eq(0));
      var homeItem = $("#main-item");
      var helpItem = $("#item-help");

      homeItem.bind('click', function(e) {
        /*elem.css('background-color', 'white');
        scope.$apply(function() {
          scope.color = "white";
        });*/
        alert('home');
      });
      helpItem.bind('click', function(e) {
        /*elem.css('cursor', 'pointer');*/
        alert('help');
      });
    }
  };
});
