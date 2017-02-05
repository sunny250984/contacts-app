function ContactNewController(ContactService, $state) {
  const ctrl = this;

  ctrl.$onInit = () => {
    ctrl.contact = {
      name: '',
      email: '',
      job: '',
      location: '',
      social: {
        facebook: '',
        github: '',
        twitter: '',
        linkedin: '',
      },
      tag: 'none',
    };
  };

  ctrl.createNewContact = event => ContactService
    .createNewContact(event.contact)
    .then((contact) => {
      $state.go('contact', {
        id: contact.key,
      });
    });
}

angular
  .module('components.contact')
  .controller('ContactNewController', ContactNewController);
