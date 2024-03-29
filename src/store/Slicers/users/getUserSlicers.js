import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUserDataApiFun = createAsyncThunk("user/getData", async () => {
  const token = JSON.parse(localStorage.getItem("user")).token;
  return await fetch(`${process.env.REACT_APP_BACKURL}/users/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => err);
});

const getUserSlicers = createSlice({
  name: "getData",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  extraReducers: (builder) => {
    // login
    builder.addCase(getUserDataApiFun.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserDataApiFun.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getUserDataApiFun.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default getUserSlicers.reducer;
