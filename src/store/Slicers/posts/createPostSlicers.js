import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createPostApiFun = createAsyncThunk(
  "post/create",
  async (data) => {
    const token = JSON.parse(localStorage.getItem("user")).token;

    return await fetch(`${process.env.REACT_APP_BACKURL}/admin/post/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .catch((err) => err);
  }
);

const createPostSlicers = createSlice({
  name: "create post",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(createPostApiFun.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createPostApiFun.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(createPostApiFun.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      console.log("this is error", state.error);
    });
  },
});

export default createPostSlicers.reducer;
