/**
 * Angular.js application configuration
 *
 * @author eugene.trounev(a)gmail.com
 */

angular.module('app', [
  'ngRoute',
  'ngResource',
  'com.likalo.ui'
])
 .constant('APP_META', {
     title: 'Web App',
     description: '',
     icon: 'url'
 })
 .constant('APP_API', {
     user: '/api/users'
 })
 .config([
    '$routeProvider',
    '$locationProvider',
    function($routeProvider, $locationProvider){
        
      /*
       * Setting up router
       */
      $routeProvider
        .when('/', {
          title: 'Home',
          description: 'Home page',
          url: '#/',
          icon: 'url',
          templateUrl: 'templates/page.home.html',
          controller: 'HomeCtrl'
        })
        .when('/profile', {
          title: 'Profile',
          description: 'User profile page',
          url: '#/profile',
          icon: 'user',
          templateUrl: 'templates/page.profile.html',
          controller: 'ProfileCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });

      $locationProvider
        .html5Mode(false);
     
 }]);
