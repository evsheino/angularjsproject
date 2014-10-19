'use strict';
var app = angular.module('angularjsprojectApp');

app.controller('PurchaseCtrl', function ($scope, $routeParams, fbutil, FBURL, user, $firebase) {
    console.log(user);

  var ownerId = $routeParams.userId;
  var owner = fbutil.syncObject('users/' + ownerId);
  var user = fbutil.syncObject('users/' + user.uid);

  var wishPath = 'wishes/' + ownerId;
  var purchasePath = 'purchases/' + ownerId;
  var userPath = 'users';

  var fb = new Firebase(FBURL);
  $scope.joined = $firebase(Firebase.util.join(
      fb.child(wishPath),
      fb.child(purchasePath)))
    .$asArray();

  $scope.purchases = fbutil.syncArray(purchasePath);
  $scope.wishes = fbutil.syncArray(wishPath);
  $scope.owner = owner;

  $scope.addPurchase = function(purchase, wishId) {
    purchase.buyerName = user.name;
 
    $firebase(fb.child(purchasePath)).$set(wishId, purchase)
      .catch(function(error) { $scope.err = error.message; });
  };

});
