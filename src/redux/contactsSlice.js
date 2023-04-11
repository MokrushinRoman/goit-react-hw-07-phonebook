import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './operations';

const handleOperationPending = state => {
  state.error = null;
  state.isLoading = true;
};

const handleRejectedOperation = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    isLoading: false,
    error: null,
    items: [],
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handleOperationPending)
      .addCase(fetchContacts.rejected, handleRejectedOperation)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(deleteContact.pending, handleOperationPending)
      .addCase(deleteContact.rejected, handleRejectedOperation)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = state.items.filter(({ id }) => id !== payload.id);
      })
      .addCase(addContact.pending, handleOperationPending)
      .addCase(addContact.rejected, handleRejectedOperation)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = [...state.items, payload];
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
