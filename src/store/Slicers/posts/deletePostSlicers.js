import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const deletePostApiFun = createAsyncThunk(
  "post/delete",
  async (postId) => {
    const token = JSON.parse(localStorage.getItem("user")).token;

    return await fetch(
      `${process.env.REACT_APP_BACKURL}/admin/post/delete/${postId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .catch((err) => err);
  }
);

const deletePostSlicers = createSlice({
  name: "delete Data",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(deletePostApiFun.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deletePostApiFun.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(deletePostApiFun.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      console.log("this is error", state.error);
    });
  },
});

export default deletePostSlicers.reducer;
