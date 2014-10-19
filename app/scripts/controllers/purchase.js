'use strict';
var app = angular.module('angularjsprojectApp');

app.controller('PurchaseCtrl', function ($scope, $routeParams, fbutil, Firebase, FBURL, user, $firebase) {

  var ownerId = $routeParams.userId;
  var owner = fbutil.syncObject('users/' + ownerId);
  var currentUser = fbutil.syncObject('users/' + user.uid);

  var wishPath = 'wishes/' + ownerId;
  var purchasePath = 'purchases/' + ownerId;

  var fb = new Firebase(FBURL);
  $scope.joined = $firebase(Firebase.util.join(
      fb.child(wishPath),
      fb.child(purchasePath)))
    .$asArray();

  $scope.purchases = fbutil.syncArray(purchasePath);
  $scope.wishes = fbutil.syncArray(wishPath);
  $scope.owner = owner;
  $scope.currentUser = currentUser;

  $scope.addPurchase = function(purchase, wishId) {
    if (!purchase) purchase = {};
    purchase.buyerName = currentUser.name;
 
    $firebase(fb.child(purchasePath)).$set(wishId, purchase)
      .catch(function(error) { $scope.err = error.message; });
  };

  $scope.deletePurchase = function(wishId) {

 
    var purchase = $scope.purchases.$getRecord(wishId);
    $scope.purchases.$remove(purchase)
      .catch(function(error) { $scope.err = error.message; });
  };

});
