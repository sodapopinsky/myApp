/**
 * Directive: Coworkers
 */
angular.module('starter')
  .directive('messages', function coworkers () {
    'use strict';

    return {
      restrict: 'EA',
      replace: true,
      scope: true,
      templateUrl: "js/directives/messages.tmpl.html",
      controllerAs: 'messages',

      controller: function (MessagesFactory) {
        

       
        this.conversations = [];
      
        
        MessagesFactory.getConversations()
          .then( angular.bind( this, function then() {
              this.conversations = MessagesFactory.conversations;
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