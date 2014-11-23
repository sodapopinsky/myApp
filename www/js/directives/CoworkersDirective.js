/**
 * Directive: Coworkers
 */
angular.module('starter')
  .directive('coworkers', function coworkers () {
    'use strict';

    return {
      restrict: 'EA',
      replace: true,
      scope: true,
      templateUrl: "js/directives/coworkers.tmpl.html",
      controllerAs: 'coworkers',

      controller: function (CoworkersFactory) {
        
        this.messages = [];
      
        
        CoworkersFactory.getCoworkers()
          .then( angular.bind( this, function then() {
              this.messages = CoworkersFactory.messages;
            }) );

      },

      link: function (scope, element, attrs, ctrl) {
        /* 
          by convention we do not $ prefix arguments to the link function
          this is to be explicit that they have a fixed order
        */
      }
    }
  });