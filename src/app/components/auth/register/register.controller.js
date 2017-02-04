function RegisterController(AuthService) {
  const ctrl = this;
  ctrl.$onInit = () => {
    ctrl.error = null;
    ctrl.user = {
      email: '',
      password: ''
    };
  };

  ctrl.createUser = (event) => {
    return AuthService
      .register(event.user)
      .then(function () {
        console.log('Success Register');
      }, function(reason) {
        ctrl.error = reason.message;
      });
  };
}

angular
  .module('components.auth')
  .controller('RegisterController', RegisterController);