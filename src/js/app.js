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
        .when('/icons', {
          title: 'Icon theme',
          description: 'A list of icons used in the project',
          url: '#/icons',
          icon: 'color-lens',
          templateUrl: 'templates/page.icons.html',
          controller: 'GenericCtrl'
        })
        .when('/profile', {
          title: 'Profile',
          description: 'User profile page',
          url: '#/profile',
          icon: 'person',
          templateUrl: 'templates/page.profile.html',
          controller: 'ProfileCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });

      $locationProvider
        .html5Mode(false);
     
 }]);
