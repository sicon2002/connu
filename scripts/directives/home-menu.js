"use strict";

// this should be included in the init
var app = angular.module('starter.directives', []);

app.directive('homeMenu', function ($state) {
  return {
    restrict: 'AE',
    replace: 'true',
    scope: {theid: '=myId'},
    templateUrl: './templates/common/home-menu.html',
    link: function (scope, elem, attrs) {
      var homeItem = "#main-item-" + scope.theid + "";

      var itemGarden = "#item-garden-" + scope.theid + "";
      var itemNotes = "#item-notes-" + scope.theid + "";
      var itemPlants = "#item-plants-libs-" + scope.theid + "";
      var itemSettings = "#item-settings-" + scope.theid + "";

      $(document).on('click', function (e) {
        var targetId = "#" + $(e.target).attr("id");

        switch (targetId) {
          case homeItem:
            homeAction();
            break;
          case itemGarden:
            menuAction("app.mygarden");
            break;
          case itemNotes:
            menuAction("app.diary");
            break;
          case itemPlants:
            menuAction("app.plantlibs");
            break;
          case itemSettings:
            menuAction("app.settings");
            break;
          default :
            break;
        }
      });

      // click home action
      var homeAction = function () {
        var r = 3; //radius
        var speed = 400;

        if ($(itemGarden).css("display") == "none") {
          $(itemGarden + "," + itemNotes + "," + itemPlants + "," + itemSettings).show();
          $(itemGarden).animate({opacity: 1, top: "-" + 2 * r + "em", right: "0em"}, speed, "swing");
          $(itemNotes).animate({opacity: 1, top: "-" + r + "em", right: "" + 1.732 * r + "em"}, speed, "swing");
          $(itemPlants).animate({
            opacity: 1,
            top: "" + r + "em",
            right: "" + 1.732 * r + "em"
          }, speed, "swing");
          $(itemSettings).animate({opacity: 1, top: "" + 2 * r + "em", right: "0em"}, speed, "swing");
        } else {
          $(itemGarden + "," + itemNotes + "," + itemPlants + "," + itemSettings).animate({
            opacity: 0, top: "0em", right: "0em"
          }, speed * 3 / 5, "swing").fadeOut();
        }
      };

      // click menu action
      var menuAction = function (stateId) {
        homeAction();
        $state.go(stateId);
      };
    }
  };
});
