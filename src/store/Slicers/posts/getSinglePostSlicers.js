import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getSinglePostApiFun = createAsyncThunk(
  "posts/getById",
  async (id) => {
    return await fetch(
      `${process.env.REACT_APP_BACKURL}/post/getsingle/${id}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .catch((err) => err);
  }
);

const getSinglePostSlicers = createSlice({
  name: "get single post",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(getSinglePostApiFun.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getSinglePostApiFun.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getSinglePostApiFun.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default getSinglePostSlicers.reducer;
