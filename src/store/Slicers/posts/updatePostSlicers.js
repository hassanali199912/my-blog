import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const updatePostApiFun = createAsyncThunk(
  "post/updatebyid",
  async (data) => {
    const token = JSON.parse(localStorage.getItem("user")).token;

    return await fetch(
      `${process.env.REACT_APP_BACKURL}/admin/post/update/${data.postId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data.data),
      }
    )
      .then((res) => res.json())
      .catch((err) => err);
  }
);

const updatePostSlicers = createSlice({
  name: "update post",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(updatePostApiFun.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updatePostApiFun.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(updatePostApiFun.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      console.log("this is error", state.error);
    });
  },
});

export default updatePostSlicers.reducer;
