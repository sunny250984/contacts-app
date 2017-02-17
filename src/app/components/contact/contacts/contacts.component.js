const contacts = {
  bindings: {
    contacts: '<',
    filter: '<',
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
        url: '/contacts?filter',
        component: 'contacts',
        params: {
          filter: {
            value: 'none',
          },
        },
        resolve: {
          contacts(ContactService) {
            return ContactService.getContactList().$loaded();
          },
          filter($transition$) {
            return $transition$.params();
          },
        },
      });
  });
