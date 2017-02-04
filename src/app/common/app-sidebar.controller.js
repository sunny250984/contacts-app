function AppSidebarController() {
  const ctrl = this;

  ctrl.contactTags = [{
    label: 'All Contacts',
    icon: 'star'
  }, {
    label: 'Friends',
    icon: 'people'
  },{
    label: 'Family',
    icon: 'child_care'
  },{
    label: 'Acquaintances',
    icon: 'accessibility'
  }, {
    label: 'Following',
    icon: 'remove_red_eye'
  }];
}

angular
  .module('common')
  .controller('AppSidebarController', AppSidebarController);