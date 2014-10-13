'use strict';

/**
 * @ngdoc function
 * @name angularjsprojectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsprojectApp
 */
angular.module('angularjsprojectApp')
  .controller('MainCtrl', function ($scope, $firebase, $routeParams) {

    $scope.params = $routeParams;
      var ref = new Firebase("https://intense-heat-6905.firebaseio.com");
      // create an AngularFire reference to the data
      var sync = $firebase(ref);
      // download the data into a local object
      var syncObject = sync.$asObject();
      syncObject.$bindTo($scope, "data");
  });
