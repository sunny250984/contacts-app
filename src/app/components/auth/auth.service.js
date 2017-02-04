function AuthService($firebaseAuth) {
  const auth = $firebaseAuth();
  let authData = null;

  function storeAuthData(response) {
    authData = response;
    return authData;
  }
  function onSignIn(user) {
    authData = user;
    return auth.$requireSignIn();
  }
  function clearAuthData() {
    authData = null;
  }

  this.login = (user) =>
    auth
      .$signInWithEmailAndPassword(user.email, user.password)
      .then(storeAuthData);

  this.register = (user) =>
    auth
      .$createUserWithEmailAndPassword(user.email, user.password)
      .then(storeAuthData);
  
  this.logout = () => 
    auth
      .$signOut()
      .then(clearAuthData);
  
  this.requireAuthentication = () => 
    auth
      .$waitForSignIn()
      .then(onSignIn);
  
  this.isAuthenticated = () => !!authData; // null || {user}

  this.getUser = function() {
    if (authData) {
      return authData;
    }
  }

}

angular
  .module('components.auth')
  .service('AuthService', AuthService);
  