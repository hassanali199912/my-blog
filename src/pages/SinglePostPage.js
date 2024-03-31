import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CommentComponent from "./components/ui/CommentComponent";
import Wrapper from "./components/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePostApiFun } from "../store/Slicers/posts/getSinglePostSlicers";
import { Button, Modal, Placeholder } from "react-bootstrap";
import SinglePostLoading from "./components/loadings/SinglePostLoading";
import CommentComponentLoading from "./components/loadings/CommentComponentLoading";
import { getSinglePostCommentApiFun } from "../store/Slicers/comments/getAllCommentSlicers";
import CommentFrom from "./components/ui/CommentFrom";
import { getPostLikesApiFun } from "../store/Slicers/likes/getAllLikesSlicers";
import { toggleLikesApiFun } from "../store/Slicers/likes/toggelLikesSlicers";
import CustomLoader from "./components/ui/CustomLoader";
import { getUserDataApiFun } from "../store/Slicers/users/getUserSlicers";

export default function SinglePostPage() {
  const { id } = useParams();

  // #region Selectors
  const { loading, data, error } = useSelector((e) => e.getSinglePostSlicers);
  const {
    loading: commnetLoading,
    data: commnetData,
    error: commnetError,
  } = useSelector((e) => e.getAllCommentSlicers);

  const {
    loading: likesLoading,
    data: likesData,
    error: likesError,
  } = useSelector((e) => e.getAllLikesSlicers);

  const {
    loading: toggleLikesLoading,
    data: toggleLikesData,
    error: toggleLikesError,
  } = useSelector((e) => e.toggelLikesSlicers);
  // #endregion Selectors

  const dispatch = useDispatch();

  // #region States

  const [post, setPost] = useState();
  const [comment, setComment] = useState();
  const [likes, setLikes] = useState();
  const [userData, setUserData] = useState();
  const [bottonActive, setButtonActive] = useState(false);
  const [show, setShow] = useState(false);
  // #endregion States

  //#region Fuctions

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const getSinglePost = async () => {
    dispatch(getSinglePostApiFun(id));
  };

  const getPostCommnets = async () => {
    dispatch(getSinglePostCommentApiFun(id));
  };

  const getPostLikes = async () => {
    dispatch(getPostLikesApiFun(id));
  };

  const toggleLike = async () => {
    if (userData) {
      dispatch(toggleLikesApiFun(id)).then((res) => {
        if (res.payload.status === "success") {
          getPostLikes(id);
        }
      });
    } else {
      setShow(true);
    }
  };

  const getUserData = async () => {
    const token = localStorage.getItem("user");
    if (token) {
      dispatch(getUserDataApiFun()).then((res) => {
        if (res.payload.status === "success") {
          setUserData(res.payload.data.user);
        }
      });
    }
  };
  //#endregion Fuctions

  // #region useEffects

  useEffect(() => {
    getSinglePost();
    getUserData();
  }, []);

  useEffect(() => {
    data && setPost(data.data);
    getPostCommnets();
    getPostLikes();
  }, [data]);

  useEffect(() => {
    commnetData && setComment(commnetData.data);
  }, [commnetData]);

  useEffect(() => {
    if (likesData) {
      setLikes(likesData.data);
      if (likesData.data.length != 0) {
        if (userData) {
          if (likesData.data.find((e) => e === userData._id)) {
            setButtonActive(true);
          } else {
            setButtonActive(false);
          }
        }
        // if (likesData.data.find((e) => e === userData._id)) {
        //   setButtonActive(true)
        // }
      }
    }
  }, [likesData]);

  //#endregion useEffects
  return (
    <>
      {loading ? (
        <SinglePostLoading />
      ) : (
        post && (
          <section className="image-single-post">
            <div className="row">
              <div className="col-12 inner-image">
                {post.imageUrl ? (
                  <>
                    <img src={post.imageUrl} alt="this is card image" />
                  </>
                ) : (
                  <>
                    <img
                      src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                      alt="this is card image"
                    />
                  </>
                )}
              </div>
              <div className="col-12 auther-single-div">
                <div className="box-img">
                  {post.auther.image ? (
                    <img
                      src={post.auther && post.auther.image}
                      alt="this is auther image"
                    />
                  ) : (
                    <img
                      src="https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png"
                      alt="this is auther image"
                    />
                  )}

                  <h2>
                    <em>{post.auther.name}</em>
                  </h2>
                </div>
              </div>
            </div>
            <Wrapper>
              <div className="row ">
                <div className="col-12 post-content mb-5">
                  <h1 className="post-title">{post.title}</h1>
                  <p className="post-subtitle">{formatDate(post.createdAt)}</p>
                  <div className="post-badge">
                    Tages : {""}
                    {post.tages &&
                      post.tages.length != 0 &&
                      post.tages.map((tag, index) => (
                        <span className="badge badge-primary" key={index}>
                          {tag}
                        </span>
                      ))}
                  </div>
                  <p className="post-description">
                    {/* {} */}
                    <MyComponent htmlString={post.description} />
                  </p>
                </div>
                <hr />
                <div className="col-lg-8 col-md-12 post-comment-form">
                  <div className="post-reactive">
                    <h3>Give Us A Like ?</h3>
                    {likesLoading || toggleLikesLoading ? (
                      <>
                        <CustomLoader />
                      </>
                    ) : (
                      <>
                        {likes && (
                          <>
                            <button
                              onClick={toggleLike}
                              className={`${bottonActive && "active"}`}
                            >
                              <i className="fa-regular fa-heart" />
                              {likes.length ? likes.length : 0}
                            </button>
                          </>
                        )}
                      </>
                    )}
                  </div>
                  <CommentFrom postId={id} onFinshed={getPostCommnets} />
                </div>
                <div className="col-lg-8 col-md-12 post-comment">
                  <h3 className="comments-title">Comments</h3>
                  {commnetLoading ? (
                    <>
                      <CommentComponentLoading />
                      <CommentComponentLoading />
                    </>
                  ) : (
                    <>
                      {comment && comment.length != 0 ? (
                        comment.map((comment, index) => (
                          <CommentComponent key={index} data={comment} />
                        ))
                      ) : (
                        <p>No Commnets</p>
                      )}
                    </>
                  )}
                </div>
              </div>
            </Wrapper>
          </section>
        )
      )}
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Log in to continue</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3 className="text-center mb-4">
            Login / register to open some cool features !
          </h3>
          <div className="row">
            <div className="col-6 m-auto">
              <Link to={"/login"} className="d-block btn btn-primary">
                Login
              </Link>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

const MyComponent = ({ htmlString }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};
