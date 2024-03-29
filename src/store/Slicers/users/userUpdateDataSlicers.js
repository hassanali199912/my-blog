import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const updateUserDataApiFun = createAsyncThunk(
  "user/updateData",
  async (data) => {
    const token = JSON.parse(localStorage.getItem("user")).token;

    return await fetch(`${process.env.REACT_APP_BACKURL}/users/update`, {
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

const userUpdateDataSlicers = createSlice({
  name: "update data",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(updateUserDataApiFun.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateUserDataApiFun.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(updateUserDataApiFun.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      console.log("this is error", state.error);
    });
  },
});

export default userUpdateDataSlicers.reducer;
