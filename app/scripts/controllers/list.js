'use strict';
var app = angular.module('angularjsprojectApp');

app.controller('ListsCtrl', function ($scope, $routeParams, fbutil, user) {

  $scope.currentUserId = user.uid;
  $scope.users = fbutil.syncArray('users');

});

app.controller('ListCtrl', function ($scope, $routeParams, fbutil, user, $firebase, FBURL) {

  var wishPath = 'wishes/' + user.uid;
  var owner = fbutil.syncObject('users/' + user.uid);
  $scope.owner = owner;

  var fb = new Firebase(FBURL);
  $firebase(fb.child(wishPath)).$asObject().$bindTo($scope, 'wishes');

  $scope.addWish = function(wish) {
    $firebase(fb.child(wishPath)).$push(wish)
      .catch(function(error) { $scope.err = error.message; });
  };

  $scope.editWish = function(wish) {
    wish.userId = owner.$id;
    $scope.wishes.$save(wish)
      .catch(function(error) { $scope.err = error.message; });
  };
  $scope.deleteWish = function(wishId) {
    $firebase(fb.child(wishPath)).$remove(wishId)
      .catch(function(error) { $scope.err = error.message; });
  };
});
