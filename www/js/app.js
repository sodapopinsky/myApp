// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
  if(window.cordova && window.cordova.plugins.Keyboard) {
    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
  }
  if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })
  
  .state('app.beehive', {
    url: "/beehive",
    views: {
      'menuContent' :{
        templateUrl: "templates/beehive.html",
        controller: 'BeehiveCtrl as beehive'
      }
    }
  })
  .state('app.login', {
    url: "/login",
    views: {
      'menuContent' :{
        templateUrl: "templates/login.html",
        controller: 'LoginCtrl as login'
      }
    }
  })
  .state('app.schedule', {
    url: "/schedule",
    views: {
      'menuContent' :{
        templateUrl: "templates/schedule.html",
        controller: 'ScheduleCtrl as schedule'
      }
    }
  })
  .state('app.messages', {
    url: "/messages",
    views: {
      'menuContent' :{
        templateUrl: "templates/messages.html",
        controller: 'MessagesCtrl as messages'
      }
    }
  })
  .state('app.coworkers', {
    url: "/coworkers",
    views: {
      'menuContent' :{
        templateUrl: "templates/coworkers.html",
        controller: 'CoworkersCtrl as coworkers'
      }
    }
  })  
    .state('app.profile', {
    url: "/profile/:userid/:username",
    views: {
      'menuContent' :{
        templateUrl: "templates/profile.html",
        controller: 'ProfileController'
      }
    }
  })
  .state('app.settings', {
    url: "/settings",
    views: {
      'menuContent' :{
        templateUrl: "templates/settings.html",
        controller: 'SettingsCtrl as settings'
      }
    }
  })
  .state('app.facebook', {
    url: "/facebook",
    views: {
      'menuContent' :{
        templateUrl: "templates/facebook.html",
        controller: 'FacebookCtrl as facebook'
      }
    }
  })
    .state('app.conversation', {
    url: "/conversation?userid&username",
    views: {
      'menuContent' :{
        templateUrl: "templates/conversation.html",
        controller: 'MessagesCtrl as messages',
         params: ['userid','username']
      }
    }
  })
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});

