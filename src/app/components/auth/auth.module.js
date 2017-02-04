angular
  .module('components.auth', [
    'ui.router',
    'firebase',
  ])
  .config(function($firebaseRefProvider) {
    var config = {
      apiKey: "AIzaSyC16LQLVXzNt-Nytfgp3Qw74WPwMXeK1dw",
      authDomain: "contacts-manager-9bb5a.firebaseapp.com",
      databaseURL: "https://contacts-manager-9bb5a.firebaseio.com",
      storageBucket: "contacts-manager-9bb5a.appspot.com",
      messagingSenderId: "611486551780",
    };

    $firebaseRefProvider
      .registerUrl({
        default: config.databaseURL,
        contacts: `${config.databaseURL}/contacts`,
      });

    firebase.initializeApp(config);
  })
  .run(function($transitions, $state, AuthService) {
    $transitions.onStart({
      to: function(state) {
        return !!(state.data && state.data.requiredAuth);
      }
    }, function() {
      return AuthService
        .requireAuthentication()
        .catch(() => $state.target('auth.login'));
    });

    $transitions.onStart({
      to: 'auth.*'
    }, function() {
      if (AuthService.isAuthenticated()) {
        return $state.target('app');
      }
    });
  });
