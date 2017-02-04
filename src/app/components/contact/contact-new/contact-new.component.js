const contactNew = {
  templateUrl: './contact-new.html',
  controller: 'ContactNewController',
};

angular
  .module('components.contact')
  .component('contactNew', contactNew)
  .config(($stateProvider) => {
    $stateProvider
      .state('new', {
        parent: 'app',
        url: '/new',
        component: 'contactNew',
      });
  });
