'use strict';

/**
 * @ngdoc function
 * @name angularjsprojectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsprojectApp
 */
angular.module('angularjsprojectApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
