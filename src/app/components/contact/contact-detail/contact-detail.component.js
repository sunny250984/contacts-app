const contactDetail = {
  bindings: {
    contact: '<',
    onSave: '&',
    onDelete: '&',
    onUpdate: '&',
  },
  templateUrl: './contact-detail.html',
  controller: 'ContactDetailController',
};

angular
  .module('components.contact')
  .component('contactDetail', contactDetail);
