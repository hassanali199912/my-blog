import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const regesterApiFun = createAsyncThunk(
  "user/regester",
  async (data) => {
    return await fetch(`${process.env.REACT_APP_BACKURL}/users/regester`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((err) => err);
  }
);

const createUserSlicers = createSlice({
  name: "regester",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(regesterApiFun.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(regesterApiFun.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(regesterApiFun.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      console.log("this is error", state.error);
    });
  },
});

export default createUserSlicers.reducer;
