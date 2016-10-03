// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', [
  'ionic',
  'starter.controllers.choiceCtrl',
  'starter.controllers.quizController',
  'starter.controllers.navBarController',
  'starter.controllers.registerController',
  'starter.controllers.lastpageController',
  'starter.services.choiceservice',
  'starter.services.mongoservice',
  'starter.services.lastpageservice',
  'starter.services.quizService'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();

    }

  });
})

.config(function($stateProvider, $urlRouterProvider, $httpProvider, $ionicConfigProvider){

    $ionicConfigProvider.views.maxCache(0);
  $stateProvider
    // .state('quiz', {
    //   url: '/quiz',
    //   abstract:true,
    //   controller: 'navBarController',
    //   templateUrl: 'templates/blockchain.html'
    // })
    .state('state0', {
      url: '/register',

        templateUrl:'templates/register.html',
        controller:'registerController'

    })
    .state('state1', {
      url: '/quizOne',

        templateUrl:'templates/choice.html',
        controller:'choiceCtrl'

    })
    .state('state2', {
        url: '/quizTwo',
        templateUrl:'templates/choice.html',
        controller:'choiceCtrl'
    })
    .state('state3', {
        url: '/quizThree',
        templateUrl:'templates/choice.html',
        controller:'choiceCtrl'
    })
    .state('state4', {
        url: '/quizFour',
        templateUrl:'templates/choice.html',
        controller:'choiceCtrl'
    })
    .state('state5', {
        url: '/quizFive',
        templateUrl:'templates/choice.html',
        controller:'choiceCtrl'
    })
    .state('state6', {
        url: '/quizSix',
        templateUrl:'templates/choice.html',
        controller:'choiceCtrl'
    })
    .state('state7', {
        url: '/quizSeven',
        templateUrl:'templates/choice.html',
        controller:'choiceCtrl'
    })
    .state('state8', {
        url: '/lastpage',
        templateUrl:'templates/lastpage.html',
        controller:'lastpageController'
    })
    .state('admin', {
        url: '/select-questions',
        templateUrl:'templates/select-questions.html',
        controller:'quizController'
    })

    $urlRouterProvider.otherwise('/register')


})
