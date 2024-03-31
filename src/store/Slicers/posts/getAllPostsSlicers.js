import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllPostsApiFun = createAsyncThunk("posts/getAll", async () => {
  return await fetch(`${process.env.REACT_APP_BACKURL}/post/`, {
    method: "GET",
  })
    .then((res) => res.json())
    .catch((err) => err);
});

const getAllPostsSlicers = createSlice({
  name: "get All Posts",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPostsApiFun.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllPostsApiFun.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getAllPostsApiFun.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default getAllPostsSlicers.reducer;
