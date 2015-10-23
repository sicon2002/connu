"use strict";

var app = angular.module('starter.directives', []);

app.directive('homeMenu', function () {
  return {
    restrict: 'AE',
    replace: 'true',
    templateUrl: './templates/common/home-menu.html',
    link: function (scope, elem, attrs) {
      //var titleElement = angular.element(element.children().eq(0));
      var homeItem = $("#main-item");
      homeItem.bind('click', function (e) {
        /*elem.css('background-color', 'white');
         scope.$apply(function() {
         scope.color = "white";
         });*/
        // home button effect.
        var r = 3; //radius
        var speed = 400;
        if ($("#item-garden").css("display") == "none") {
          $("#item-garden,#item-notes,#item-plants-libs,#item-settings").show();
          $("#item-garden").animate({opacity: 1,top: "-" + 2 * r + "em", right: "0em"}, speed, "swing");
          $("#item-notes").animate({opacity: 1,top: "-" + r + "em", right: "" + 1.732 * r + "em"}, speed, "swing");
          $("#item-plants-libs").animate({opacity: 1,top: "" + r + "em", right: "" + 1.732 * r + "em"}, speed, "swing");
          $("#item-settings").animate({opacity: 1,top: "" + 2 * r + "em", right: "0em"}, speed, "swing");
        } else {
          $("#item-garden,#item-notes,#item-plants-libs,#item-settings").animate({
            opacity: 0,top: "0em",right: "0em"
          }, speed/2, "swing").fadeOut();
        }
      });
    }
  };
});
