/**
 * Factory: InboxFactory
 */
angular.module('starter')
  .factory('LoginFactory', function LoginFactory ($q, $http, $location) {
    'use strict';
    var exports = {};

    exports.messages = [];

    exports.doLogin = function () {
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
