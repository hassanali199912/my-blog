import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loginApiFun = createAsyncThunk("user/login", async (data) => {
  return await fetch(`${process.env.REACT_APP_BACKURL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .catch((err) => err);
});

const loginSlicers = createSlice({
  name: "login",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  extraReducers: (builder) => {
    // login
    builder.addCase(loginApiFun.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loginApiFun.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      console.log("this is fulfilled", state.user);
    });
    builder.addCase(loginApiFun.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      console.log("this is error", state.error);
    });
  },
});

export default loginSlicers.reducer;
