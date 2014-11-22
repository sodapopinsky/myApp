/**
 * Directive: Inbox <inbox></inbox>
 */
angular.module('starter')
  .directive('schedule', function ScheduleDrctv () {
    'use strict';

    return {

      restrict: 'EA',
      replace: true,
      scope: true,
      templateUrl: "js/directives/schedule.tmpl.html",
      controllerAs: 'schedule',

      controller: function () {
        this.test = "testeroo";
      },

      link: function (scope, element, attrs, ctrl) {
        /* 
          by convention we do not $ prefix arguments to the link function
          this is to be explicit that they have a fixed order
        */
      }
    }
  });