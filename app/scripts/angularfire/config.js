angular.module('firebase.config', [])
  .constant('FBURL', 'https://intense-heat-6905.firebaseio.com')
  .constant('SIMPLE_LOGIN_PROVIDERS', ['password','facebook'])

  .constant('loginRedirectPath', '/login');