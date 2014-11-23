angular.module('starter')
 .controller('LoginCtrl', function($scope,$q, $http,$state, $ionicViewService) {
   // Perform the login action when the user submits the login form
  $scope.doLogin =  function () {

     if($scope.loginData.username && $scope.loginData.password){
        console.log('Doing login', $scope.loginData.username);
          var deferred = $q.defer();
      return $http.get('http://localhost:8080/api/dologin?username=' + $scope.loginData.username + '&password=' + $scope.loginData.password)
        .success(function (data) {
          console.log(data);
    
          deferred.resolve(data);

           $ionicViewService.nextViewOptions({
      disableAnimate: true,
      disableBack: true
    });  

           if(!data.errors){
         $("#username").html(data.firstName + " " + data.lastName);
         $state.go('app.messages');
                }
                else{
                      alert("Please try again.");
                }
        })
        .error(function (data) {   console.log("error");
          deferred.reject(data);
        });
      return deferred.promise;

     }
     else{
        alert("Please fill out all fields");
     }  

    };

});