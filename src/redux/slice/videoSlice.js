import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  video: null,
  videos: null,
  trend: null,
  sub: null,
  random: null,
  search: "",
  view: null,
  tags: null,
  loading: false,
  error: false,
};

export const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    fetchAllVideosRequest: (state) => {
      state.loading = true;
    },
    fetchAllVideosSucess: (state, action) => {
      state.loading = false;
      state.videos = action.payload;
    },
    fetchAllVideosFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchSingleVideoRequest: (state) => {
      state.loading = true;
    },
    fetchSingleVideoSucess: (state, action) => {
      state.loading = false;
      state.videos = action.payload;
    },
    fetchSingleVideoFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchTrendVideosRequest: (state) => {
      state.loading = true;
    },
    fetchTrendVideosSucess: (state, action) => {
      state.loading = false;
      state.videos = action.payload;
    },
    fetchTrendVideoFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchRandomVideosRequest: (state) => {
      state.loading = true;
    },
    fetchRandomVideosSucess: (state, action) => {
      state.loading = false;
      state.videos = action.payload;
    },
    fetchRandomVideoFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  fetchAllVideosRequest,
  fetchAllVideosSucess,
  fetchAllVideosFailure,
  fetchSingleVideoRequest,
  fetchSingleVideoSucess,
  fetchSingleVideoFailure,
  fetchTrendVideosRequest,
  fetchTrendVideosSucess,
  fetchTrendVideoFailure,
  fetchRandomVideosRequest,
  fetchRandomVideosSucess,
  fetchRandomVideoFailure,
} = videoSlice.actions;

export default videoSlice.reducer;
