import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api/authApi";

export const loginAction = createAsyncThunk(
  "auth/login",
  async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.signInApi(formValue);
      console.log('RESPONSE',response)
      toast.success("logged in Successfully");
      navigate("/");
      return response.data.result;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const registerAction = createAsyncThunk(
  "auth/register",
  async ({ formValue, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.registerApi(formValue);
      toast.success("Registered Successfully");
      navigate("/");
      return response.data.result;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: "",
    loading: false,
  },

  extraReducers: {
    [loginAction.pending]: (state, action) => {
      state.loading = true;
    },
    [loginAction.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [loginAction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [registerAction.pending]: (state, action) => {
      state.loading = true;
    },
    [registerAction.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [registerAction.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default authSlice.reducer;
