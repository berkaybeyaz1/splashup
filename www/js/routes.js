angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('timeline', {
    url: '/home',
    templateUrl: 'templates/timeline.html',
    controller: 'timelineCtrl'
  })
  .state('intro', {
        url: '/intro',
        templateUrl: 'templates/intro.html',
        controller: 'introCtrl'
  })
  .state('login',{
      url: '/login',
      templateUrl:'templates/login.html',
      controller: 'loginCtrl'
  })

$urlRouterProvider.otherwise('/intro')

});