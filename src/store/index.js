import { configureStore } from "@reduxjs/toolkit";
import loginSlicers from "./Slicers/users/loginSlicers";
import createUserSlicers from "./Slicers/users/createUserSlicers";
import getUserSlicers from "./Slicers/users/getUserSlicers";
import userUpdateDataSlicers from "./Slicers/users/userUpdateDataSlicers";

//posts
import createPostSlicers from "./Slicers/posts/createPostSlicers";
import updatePostSlicers from "./Slicers/posts/updatePostSlicers";
import deletePostSlicers from "./Slicers/posts/deletePostSlicers";

//posts user
import getAllPostsSlicers from "./Slicers/posts/getAllPostsSlicers";
import getSinglePostSlicers from "./Slicers/posts/getSinglePostSlicers";

//comments
import getAllCommentSlicers from "./Slicers/comments/getAllCommentSlicers";
import createCommentSlicers from "./Slicers/comments/createCommentSlicers";

//likes
import getAllLikesSlicers from "./Slicers/likes/getAllLikesSlicers";
import toggelLikesSlicers from "./Slicers/likes/toggelLikesSlicers";

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
    updatePostSlicers,

    //posts user
    getAllPostsSlicers,
    getSinglePostSlicers,

    //comments
    getAllCommentSlicers,
    createCommentSlicers,

    //Likes
    getAllLikesSlicers,
    toggelLikesSlicers

  },
});

export default store;
