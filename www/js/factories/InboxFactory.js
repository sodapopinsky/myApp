/**
 * Factory: InboxFactory
 */
angular.module('starter')
  .factory('InboxFactory', function InboxFactory ($q, $http, $location) {
    'use strict';
    var exports = {};

    exports.messages = [];

    exports.goToMessage = function(id) {
      if ( angular.isNumber(id) ) {
        console.log('inbox/email/' + id)
        $location.path('inbox/email/' + id)
      }
    }

    exports.deleteMessage = function (id, index) {
      this.messages.splice(index, 1);
    }

    exports.getMessages = function () {
      var deferred = $q.defer();
      return $http.get('http://atomicbeehive.herokuapp.com/json')
        .success(function (data) {
          console.log(data);
          exports.messages = data;
          deferred.resolve(data);
        })
        .error(function (data) {   console.log("error");
          deferred.reject(data);
        });
      return deferred.promise;
    };

    return exports;
  });
