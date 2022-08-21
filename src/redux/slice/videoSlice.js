import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: null,
  loading: false,
  error: false,
};

export const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    fetchVideoStart: (state) => {
      state.loading = true;
    },
    fetchVideoSucess: (state, action) => {
      state.loading = false;
      state.videos = action.payload;
      
    },
    fetchVideoFailure: (state,action) => {
      state.loading = false; 
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchVideoStart, fetchVideoSucess, fetchVideoFailure } = videoSlice.actions;

export default videoSlice.reducer;
