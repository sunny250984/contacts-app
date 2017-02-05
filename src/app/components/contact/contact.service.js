function ContactService(
  AuthService,
  $firebaseRef,
  $firebaseArray,
  $firebaseObject,
  ) {
  const ref = $firebaseRef.contacts;
  const uid = AuthService.getUser().uid;

  return {
    createNewContact(contact) {
      return $firebaseArray(ref.child(uid)).$add(contact);
    },
    getContactById(id) {
      return $firebaseObject(ref.child(uid).child(id));
    },
    getContactList() {
      return $firebaseArray(ref.child(uid));
    },
    updateContact(contact) {
      return contact.$save();
    },
    deleteContact(contact) {
      return contact.$remove();
    },
  };
}

angular
  .module('components.contact')
  .factory('ContactService', ContactService);
