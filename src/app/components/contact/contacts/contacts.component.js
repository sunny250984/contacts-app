const contacts = {
  bindings: {
    contacts: '<',
  },
  templateUrl: './contacts.html',
  controller: 'ContactsController',
};

angular
  .module('components.contact')
  .component('contacts', contacts)
  .config(($stateProvider) => {
    $stateProvider
      .state('contacts', {
        parent: 'app',
        url: '/contacts',
        component: 'contacts',
        resolve: {
          contacts(ContactService) {
            return ContactService.getContactList().$loaded();
          },
        },
      });
  });
