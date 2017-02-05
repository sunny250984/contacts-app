function ContactEditController(
  ContactService,
  cfpLoadingBar,
  $window,
  $state,
  ) {
  const ctrl = this;

  ctrl.updateContact = (event) => {
    cfpLoadingBar.start();
    return ContactService
      .updateContact(event.contact)
      .then(cfpLoadingBar.complete, cfpLoadingBar.complete);
  };

  ctrl.deleteContact = (event) => {
    const message = `Delete ${event.contact.name} from contacts?`;
    if ($window.confirm(message)) {
      cfpLoadingBar.start();
      return ContactService
        .deleteContact(event.contact)
        .then(() => {
          cfpLoadingBar.complete();
          $state.go('contacts');
        });
    }
  };
}

angular
  .module('components.contact')
  .controller('ContactEditController', ContactEditController);
