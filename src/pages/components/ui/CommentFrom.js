import { useDispatch, useSelector } from "react-redux";
import { getUserDataApiFun } from "../../../store/Slicers/users/getUserSlicers";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createPostCommentApiFun } from "../../../store/Slicers/comments/createCommentSlicers";
import CustomLoader from "./CustomLoader";

export default function CommentFrom({ postId, onFinshed }) {
  const { loading, data, error } = useSelector(
    (state) => state.createCommentSlicers
  );

  const dispatch = useDispatch();
  const [userData, setUserData] = useState();
  const [comment, setComment] = useState("");
  const [review, setReview] = useState(5);
  const [commentErrorMessage, setCommentErrorMessage] = useState("");
  const [message, setMessage] = useState("");

  const handleStarClick = (index) => {
    const allStart = document.querySelectorAll(".fa-star");
    allStart.forEach((star) => {
      star.classList.remove("active");
    });

    [...Array(index)].map((star, index) => {
      allStart[index].classList.add("active");
    });
    setReview(index);
  };
  const getUserData = async () => {
    dispatch(getUserDataApiFun())
      .then((res) => {
        if (res.payload.message === "User fetched successfully") {
          setUserData(res.payload.data.user);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      postId: postId,
      comment: comment,
      review: review,
    };
    dispatch(createPostCommentApiFun(data)).then((res) => {
      if (res.payload.message === "Comment created successfully") {
        setMessage("Thank you for your review");
        onFinshed();
        setComment("");
        setReview(5);
        setTimeout(() => {
          setCommentErrorMessage("");
          setMessage("");
        }, 1500);
      } else if (res.payload.message === "Invaild User Data") {
        if (res.payload.data && res.payload.data[0].msg) {
          setCommentErrorMessage(res.payload.data[0].msg);
        }
      } else {
        setMessage("Something went wrong");
      }
    });
  };

  useEffect(() => {
    const userToken = JSON.parse(localStorage.getItem("user"));
    if (userToken) {
      getUserData();
    }
  }, []);

  return (
    <>
      <h3 className="comments-title">Leave a Comment</h3>

      {userData ? (
        <>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Artical Reating</label>
              <div className="rating-star">
                {[...Array(5)].map((star, index) => {
                  return (
                    <i
                      key={index}
                      className="fa fa-star active"
                      onClick={() => handleStarClick(index + 1)}
                    />
                  );
                })}
              </div>
            </div>
            <div className={`form-group ${commentErrorMessage ? "error" : ""}`}>
              <label htmlFor="comment">Comment *</label>
              <textarea
                className="form-control"
                id="comment"
                rows={5}
                onChange={(e) => setComment(e.target.value)}
                value={comment}
                required
              />
              <div className="error-feild">
                <p>{commentErrorMessage}</p>
              </div>
            </div>
            <div className="form-group">
              {loading ? (
                <>
                  <button type="button" className="btn">
                    <CustomLoader />
                  </button>
                </>
              ) : (
                <>
                  <button type="submit" className="btn">
                    Submitte
                  </button>
                </>
              )}
            </div>
            <div className="form-group">{message}</div>
          </form>
        </>
      ) : (
        <>
          <p className="comment-note">* You must login frist</p>
        </>
      )}
    </>
  );
}
