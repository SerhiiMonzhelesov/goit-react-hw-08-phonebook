export const selectContacts = state => state.contacts.users;
export const selectFilter = state => state.contacts.filter;

export const selectUserData = state => state.user.userData;
export const selectToken = state => state.user.token;

export const selectLoading = state => state.root.isLoading;
export const selectError = state => state.root.error;
