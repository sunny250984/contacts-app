function ContactsController($filter, $state) {
  const ctrl = this;

  ctrl.$onInit = () => {
    const contacts = ctrl.contacts;
    ctrl.filteredContacts = $filter('contactsFilter')(contacts, ctrl.filter);
  };

  ctrl.goToContact = (event) => {
    $state.go('contact', {
      id: event.contactId,
    });
  };
}

angular
  .module('components.contact')
  .controller('ContactsController', ContactsController);
