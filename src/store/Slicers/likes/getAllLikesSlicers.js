import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPostLikesApiFun = createAsyncThunk(
  "posts/likes/getAll",
  async (id) => {
    return await fetch(
      `${process.env.REACT_APP_BACKURL}/post/getAllLikes/${id}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .catch((err) => err);
  }
);

const getAllLikesSlicers = createSlice({
  name: "single post likes",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getPostLikesApiFun.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPostLikesApiFun.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getPostLikesApiFun.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default getAllLikesSlicers.reducer;
