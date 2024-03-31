import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const toggleLikesApiFun = createAsyncThunk(
  "posts/likes/like-unlike",
  async (id) => {
    const token = JSON.parse(localStorage.getItem("user")).token;
    return await fetch(`${process.env.REACT_APP_BACKURL}/post/like/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .catch((err) => err);
  }
);

const toggelLikesSlicers = createSlice({
  name: "single post toggle likes",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(toggleLikesApiFun.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(toggleLikesApiFun.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(toggleLikesApiFun.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default toggelLikesSlicers.reducer;
