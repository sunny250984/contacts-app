function RegisterController(AuthService, $state) {
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
        $state.go('app');
      }, function(reason) {
        ctrl.error = reason.message;
      });
  };
}

angular
  .module('components.auth')
  .controller('RegisterController', RegisterController);