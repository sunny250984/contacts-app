function AuthFormController() {
  const ctrl = this;

  ctrl.$onChanges = (changes) => {
    if (changes.user) {
      ctrl.user = angular.copy(ctrl.user);
    }
  }

  ctrl.submitForm = () => {
    ctrl.onSubmit({
      $event: {
        user: ctrl.user
      }
    });
  };
}

angular
  .module('components.auth')
  .controller('AuthFormController', AuthFormController);