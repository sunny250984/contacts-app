function ContactDetailController() {
  const ctrl = this;

  ctrl.$onInit = () => {
    ctrl.isNewContact = !ctrl.contact.$id;
  };

  ctrl.saveContact = () => {
    ctrl.onSave({
      $event: {
        contact: ctrl.contact,
      },
    });
  };
}

angular
  .module('components.contact')
  .controller('ContactDetailController', ContactDetailController);
