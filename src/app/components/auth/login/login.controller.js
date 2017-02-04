function LoginController(AuthService) {
  const ctrl = this;

  ctrl.$onInit = () => {
    ctrl.error = null;
    ctrl.user = {
      email: '',
      password: ''
    };
  };

  ctrl.loginUser = (event) => {
    return AuthService
      .login(event.user)
      .then(function () {
        console.log('Success Login');
      }, function(reason) {
        ctrl.error = reason.message;
      });
  };
}

angular
  .module('components.auth')
  .controller('LoginController', LoginController);