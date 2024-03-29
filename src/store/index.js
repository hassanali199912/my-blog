import { configureStore } from "@reduxjs/toolkit";
import loginSlicers from "./Slicers/users/loginSlicers";
import createUserSlicers from "./Slicers/users/createUserSlicers";
import getUserSlicers from "./Slicers/users/getUserSlicers";
import userUpdateDataSlicers from "./Slicers/users/userUpdateDataSlicers";

//posts
import createPostSlicers from "./Slicers/posts/createPostSlicers";
import deletePostSlicers from "./Slicers/posts/deletePostSlicers";

export const store = configureStore({
  reducer: {
    //user
    loginSlicers,
    createUserSlicers,
    getUserSlicers,
    userUpdateDataSlicers,

    //posts
    createPostSlicers,
    deletePostSlicers,
  },
});

export default store;
