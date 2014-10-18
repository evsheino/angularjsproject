'use strict';
var app = angular.module('angularjsprojectApp');

app.controller('ListsCtrl', function ($scope, $routeParams, fbutil) {
  $scope.lists = fbutil.syncArray('lists');
  $scope.addList = function() {
    $scope.wish.listId = listId;
    $scope.wishes.$add($scope.wish)
  .catch(alert);
  };
});

app.controller('ListCtrl', function ($scope, $routeParams, fbutil) {
  var listId = $routeParams.listId;
  console.log($routeParams);

  var wishPath = 'wishes/' + $routeParams.listId;

  $scope.wishes = fbutil.syncArray(wishPath);
  $scope.listName = $routeParams.listId;

  $scope.addWish = function() {
    $scope.wish.listId = listId;
    $scope.wishes.$add($scope.wish)
      .catch(alert);
  };
});
