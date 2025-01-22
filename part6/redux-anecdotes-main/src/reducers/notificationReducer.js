import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: 'Notification message',
  isShown: true,
};

const filterSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    show(state, action) {
      state.message = action.payload;
      state.isShown = true;
    },
  }
})

export const { set } = filterSlice.actions
export default filterSlice.reducer