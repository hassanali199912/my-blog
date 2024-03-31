import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const createPostCommentApiFun = createAsyncThunk(
  "post/commant/create",
  async (data) => {
    const token = JSON.parse(localStorage.getItem("user")).token;

    return await fetch(`${process.env.REACT_APP_BACKURL}/post/comment/create`, {
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

const createCommentSlicers = createSlice({
  name: "create commnet",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(createPostCommentApiFun.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createPostCommentApiFun.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(createPostCommentApiFun.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      console.log("this is error", state.error);
    });
  },
});

export default createCommentSlicers.reducer;
