function ContactNewController(ContactService) {
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
      console.log(contact);
    });
}

angular
  .module('components.contact')
  .controller('ContactNewController', ContactNewController);
