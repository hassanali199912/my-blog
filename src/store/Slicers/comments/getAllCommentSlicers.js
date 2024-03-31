import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getSinglePostCommentApiFun = createAsyncThunk(
  "posts/comment/getAll",
  async (id) => {
    return await fetch(
      `${process.env.REACT_APP_BACKURL}/post/comment/get/${id}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .catch((err) => err);
  }
);

const getAllCommentSlicers = createSlice({
  name: "get single post comments",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getSinglePostCommentApiFun.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSinglePostCommentApiFun.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getSinglePostCommentApiFun.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default getAllCommentSlicers.reducer;
