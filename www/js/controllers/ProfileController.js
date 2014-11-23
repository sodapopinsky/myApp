angular.module('starter')
.controller('ProfileController', function($scope,$ionicModal,$stateParams,$timeout) {   
  'use strict'; 
$scope.username = $stateParams.username;

 $ionicModal.fromTemplateUrl('templates/messagemodal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
$scope.closeLogin = function() {
    $scope.modal.hide();
  };


  $scope.showModal = function() {
  
    $scope.modal.show();
  };

  $scope.sendMessage = function() {
    console.log('sendimgmessage', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 300);
  };

})