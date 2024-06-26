import { useEffect, useState } from "react";
import ArticalTR from "../ui/ArticalTR";
import ConfromationAlert from "../ui/ConfromationAlert";
import { useDispatch, useSelector } from "react-redux";
import { deletePostApiFun } from "../../../store/Slicers/posts/deletePostSlicers";
import Alart from "../ui/Alart";
import ArticalTRLoading from "../loadings/ArticalTRLoading";
import { useNavigate } from "react-router-dom";
import PostUpdateForm from "../ui/PostUpdateForm";

export default function UserWrites({ postes, onFinshed }) {
  const { loading, data, error } = useSelector((e) => e.deletePostSlicers);
  const dispatch = useDispatch();
  const navegator = useNavigate();

  const [userPosts, setUserPosts] = useState([]);
  const [alertValue, setAlertValue] = useState({
    show: false,
    message: "",
    variant: "",
  });

  const [show, setShow] = useState(false);
  const [postId, setPostId] = useState("");
  const [postData, setPostData] = useState();

  const onAction = (postId, action) => {
    if (action === "delete") {
      setShow(true);
      setPostId(postId);
    } else if (action === "edit") {
      setPostData(undefined);
      userPosts.map((post) => {
        if (post._id === postId) {
          setTimeout(() => {
            setPostData(post);
          }, 500);
        }
      });
    } else {
      navegator(`/post/${postId}`);
    }
  };

  const handleDelete = (postId) => {
    dispatch(deletePostApiFun(postId))
      .then((res) => {
        if (res.payload.status === "success") {
          setAlertValue({
            show: true,
            message: res.payload.message,
            variant: "success",
          });
        } else {
          setAlertValue({
            show: true,
            message: res.payload.message,
            variant: "error",
          });
        }
      })
      .catch((err) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (postes) {
      setUserPosts(postes);
    }
  }, []);

  return (
    <>
      <div className="card-profile-2 user-writes">
        <h1> My Artical</h1>
        <p>This is your articals </p>
        <div className="card-profile-2-artical-display">
          <div className="table-responsive">
            {userPosts.length === 0 ? (
              <h1>No Artical</h1>
            ) : (
              <>
                <table className=" table table-hover artical-table  ">
                  <thead>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Reviews</th>
                    <th scope="col">published</th>
                    <th scope="col">Action</th>
                  </thead>
                  <tbody className="table table-striped">
                    {loading ? (
                      <>
                        <ArticalTRLoading />
                        <ArticalTRLoading />
                        <ArticalTRLoading />
                      </>
                    ) : (
                      <>
                        {userPosts.map((post, index) => {
                          return (
                            <ArticalTR
                              key={index}
                              index={index}
                              post={post}
                              onAction={onAction}
                            />
                          );
                        })}
                      </>
                    )}
                  </tbody>
                </table>
              </>
            )}
          </div>
        </div>
        {postData && (
          <PostUpdateForm
            postData={postData}
            onFinshed={onFinshed}
            onCancel={() => setPostData(undefined)}
          />
        )}
      </div>

      {alertValue.show && (
        <Alart
          value={alertValue}
          change={(e) => {
            alertValue.variant === "success" && onFinshed();
            setAlertValue({
              show: false,
              message: "",
              variant: "",
            });
          }}
        />
      )}
      <ConfromationAlert
        show={show}
        post={postId}
        cansle={() => setShow(false)}
        onConform={handleDelete}
      />
    </>
  );
}
