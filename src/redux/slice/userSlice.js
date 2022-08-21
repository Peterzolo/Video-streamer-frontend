import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {
    logInStart: (state) => {
      state.loading = true;
    },
    logInSuccess: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
      
    },
    logInFailure: (state,action) => {
      state.loading = false; 
      state.error = action.payload;
    },
    logOut: (state) => {
   return initialState
    },
  },
});

// Action creators are generated for each case reducer function
export const { logInStart, logInSuccess, logInFailure, logOut } = userSlice.actions;

export default userSlice.reducer;
