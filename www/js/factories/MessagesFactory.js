angular.module('starter')
  .factory('MessagesFactory', function MessagesFactory ($q, $http, $location) {
    'use strict';
    var exports = {};
exports.conversations = [];
    exports.getConversations = function () {
      var deferred = $q.defer();
      return $http.get('json/conversations.json')
        .success(function (data) {
          console.dir(data);
          exports.conversations = data;
          deferred.resolve(data);
        })
        .error(function (data) {
          deferred.reject(data);
        });
      return deferred.promise;
    };

    return exports;
  });