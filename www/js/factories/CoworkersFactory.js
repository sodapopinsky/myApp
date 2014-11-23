angular.module('starter')
  .factory('CoworkersFactory', function CoworkersFactory ($q, $http, $location) {
    'use strict';
    var exports = {};
exports.messages = [];
    exports.getCoworkers = function () {
      var deferred = $q.defer();
      return $http.get('json/emails.json')
        .success(function (data) {
          exports.messages = data;
          deferred.resolve(data);
        })
        .error(function (data) {
          deferred.reject(data);
        });
      return deferred.promise;
    };

    return exports;
  });