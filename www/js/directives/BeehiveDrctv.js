
angular.module('starter')
  .directive('beehive', function BeehiveDrctv () {
    'use strict';

    return {

      restrict: 'EA',
      replace: true,
      scope: true,
      templateUrl: "js/directives/beehive.tmpl.html",
      controllerAs: 'beehive',

      controller: function () {
        this.title = "beehive";
      },

      link: function (scope, element, attrs, ctrl) {
        /* 
          by convention we do not $ prefix arguments to the link function
          this is to be explicit that they have a fixed order
        */
      }
    }
  });