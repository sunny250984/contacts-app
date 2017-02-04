function ContactService(AuthService, $firebaseRef, $firebaseArray) {
  const ref = $firebaseRef.contacts;
  const uid = AuthService.getUser().uid;

  return {
    createNewContact(contact) {
      return $firebaseArray(ref.child(uid)).$add(contact);
    },
  };
}

angular
  .module('components.contact')
  .factory('ContactService', ContactService);
