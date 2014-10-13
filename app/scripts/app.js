'use strict';

/**
 * @ngdoc overview
 * @name angularjsprojectApp
 * @description
 * # angularjsprojectApp
 *
 * Main module of the application.
 */
angular.module('angularjsprojectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'firebase.utils',
    'simpleLogin'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
     .when('/list/:listId', {
      templateUrl: 'views/list.html',
      controller: 'ListCtrl'/*,
      resolve: {
        list: function($routeParams, fbutil) {
          console.log($routeParams);
          return fbutil.syncArray($routeParams.listId);
        }
      }*/
     }
     )
    }
  );
