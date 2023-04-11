export const selectFilterValue = state => state.filter;
export const selectContactsLoading = state => state.contacts.isLoading;
export const selectContactsError = state => state.contacts.error;
export const selectContactsList = state => state.contacts.items;
