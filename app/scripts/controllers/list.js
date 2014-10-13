'use strict';
angular.module('angularjsprojectApp')
  .controller('ListCtrl', function ($scope, $routeParams, $firebase) {

    // synchronize a read-only, synchronized array of messages, limit to most recent 10
    //$scope.list = fbutil.syncObject('lists/' + $routeParams.listId);
    console.log($routeParams.listId);
      var ref = new Firebase("https://intense-heat-6905.firebaseio.com/lists/" + $routeParams.listId);
      // create an AngularFire reference to the data
      var sync = $firebase(ref);
      // download the data into a local object
      $scope.list = sync.$asObject();


/*
    // provide a method for adding a message
    $scope.addMessage = function(newMessage) {
      if( newMessage ) {
        // push a message to the end of the array
        $scope.messages.$add({text: newMessage})
          // display any errors
          .catch(alert);
      }
    };

    */
  });
