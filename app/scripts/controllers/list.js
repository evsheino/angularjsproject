'use strict';
var app = angular.module('angularjsprojectApp');

app.controller('ListsCtrl', function ($scope, $routeParams, fbutil, user) {

  $scope.users = fbutil.syncArray('users');

});

app.controller('ListCtrl', function ($scope, $routeParams, fbutil, user) {

  var wishPath = 'wishes/' + $routeParams.userId;
  var owner = fbutil.syncObject('users/' + $routeParams.userId);

  $scope.wishes = fbutil.syncArray(wishPath);
  $scope.owner = owner;

  $scope.addWish = function(wish) {
    $scope.wishes.$add(wish)
      .catch(function(error) { $scope.err = error.message; });
  };

  $scope.editWish = function(wish) {
    wish.userId = owner.$id;
    $scope.wishes.$save(wish)
      .catch(function(error) { $scope.err = error.message; });
  };
});
