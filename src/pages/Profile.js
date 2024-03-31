import { useEffect, useState } from "react";
import UserData from "./components/profile-components/UserData";
import UserWrites from "./components/profile-components/UserWrites";
import UserCreateArtical from "./components/profile-components/UserCreateArtical";
import Wrapper from "./components/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { getUserDataApiFun } from "../store/Slicers/users/getUserSlicers";
import Placeholder from "react-bootstrap/Placeholder";
import UserDataLoading from "./components/loadings/UserDataLoading";
import { updateUserDataApiFun } from "../store/Slicers/users/userUpdateDataSlicers";
import CustomLoader from "./components/ui/CustomLoader";

export default function Profile() {
  const { loading, data, error } = useSelector((s) => s.getUserSlicers);
  const { loading: userUpdatedataLoading, user: userUpdateData } = useSelector(
    (s) => s.userUpdateDataSlicers
  );
  const dispatch = useDispatch();
  const [userData, setUserData] = useState();
  const [userPosts, setUserPosts] = useState([]);
  const [changeProfileImagSelsctor, setChangeProfileImagSelsctor] =
    useState(false);
  const handleMenueClick = (index) => {
    const alldiv = document.querySelectorAll(".card-profile-2");
    const minueList = document.querySelectorAll(".porfile-options-menue li");
    minueList.forEach((li) => {
      li.classList.remove("active");
    });
    alldiv.forEach((div) => {
      div.classList.remove("active");
    });
    minueList[index].classList.add("active");
    alldiv[index].classList.add("active");
  };

  const getUserData = async () => {
    setUserData(null);
    dispatch(getUserDataApiFun())
      .then((res) => {
        if (res.payload.message === "User fetched successfully") {
          setUserData(res.payload.data.user);
          setUserPosts(res.payload.data.posts);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onFinshed = () => {
    getUserData();
  };

  const handleChangeImageProfile = (e) => {
    setChangeProfileImagSelsctor(false);
    const imageUrl = e.target.src;
    const data = {
      feild: "image",
      value: imageUrl,
    };
    dispatch(updateUserDataApiFun(data))
      .then((res) => {
        if (res.payload.status === "success") {
          getUserData();
        } else {
          console.log(res.payload.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <section className="section-div profile-page">
        <Wrapper>
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12  user-options-side">
              {userData ? (
                <>
                  <div className="card card-profile-1">
                    <div
                      className="custom-user-image"
                      onClick={() =>
                        setChangeProfileImagSelsctor(!changeProfileImagSelsctor)
                      }
                    >
                      <img
                        src={userData.image}
                        className="rounded-circle img-fluid "
                        alt="profile"
                      />
                    </div>
                    <h2>{userData.name}</h2>
                    {userUpdatedataLoading ? (
                      <>
                        <CustomLoader />
                      </>
                    ) : (
                      <>
                        <div
                          className={`image-selector ${
                            changeProfileImagSelsctor && "active"
                          }`}
                        >
                          <img
                            alt="image profile"
                            onClick={handleChangeImageProfile}
                            src="https://cdn-icons-png.freepik.com/256/149/149071.png"
                          />
                          <img
                            alt="image profile"
                            onClick={handleChangeImageProfile}
                            src="https://cdn-icons-png.freepik.com/256/11195/11195330.png"
                          />
                          <img
                            alt="image profile"
                            onClick={handleChangeImageProfile}
                            src="https://cdn-icons-png.freepik.com/256/7235/7235981.png"
                          />
                          <img
                            alt="image profile"
                            onClick={handleChangeImageProfile}
                            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                          />
                          <img
                            alt="image profile"
                            onClick={handleChangeImageProfile}
                            src="https://cdn-icons-png.freepik.com/256/2320/2320975.png"
                          />
                          <img
                            alt="image profile"
                            onClick={handleChangeImageProfile}
                            src="https://cdn-icons-png.freepik.com/512/7077/7077313.png"
                          />
                          <img
                            alt="image profile"
                            onClick={handleChangeImageProfile}
                            src="https://cdn-icons-png.freepik.com/512/2726/2726000.png"
                          />
                          <img
                            alt="image profile"
                            onClick={handleChangeImageProfile}
                            src="https://cdn-icons-png.freepik.com/512/1870/1870038.png"
                          />
                          <img
                            alt="image profile"
                            onClick={handleChangeImageProfile}
                            src="https://cdn-icons-png.freepik.com/512/4974/4974985.png"
                          />
                          <img
                            alt="image profile"
                            onClick={handleChangeImageProfile}
                            src="https://cdn-icons-png.freepik.com/512/714/714928.png"
                          />
                          <img
                            alt="image profile"
                            onClick={handleChangeImageProfile}
                            src="https://cdn-icons-png.freepik.com/256/9600/9600935.png"
                          />
                          <img
                            alt="image profile"
                            onClick={handleChangeImageProfile}
                            src="https://cdn-icons-png.freepik.com/256/11194/11194921.png"
                          />
                          <img
                            alt="image profile"
                            onClick={handleChangeImageProfile}
                            src="https://cdn-icons-png.freepik.com/256/146/146024.png"
                          />
                          <img
                            alt="image profile"
                            onClick={handleChangeImageProfile}
                            src="https://cdn-icons-png.freepik.com/256/7088/7088403.png"
                          />
                          <img
                            alt="image profile"
                            onClick={handleChangeImageProfile}
                            src="https://cdn-icons-png.freepik.com/256/3011/3011386.png"
                          />
                          <img
                            alt="image profile"
                            onClick={handleChangeImageProfile}
                            src="https://cdn-icons-png.freepik.com/256/4323/4323013.png"
                          />
                          <img
                            alt="image profile"
                            onClick={handleChangeImageProfile}
                            src="https://cdn-icons-png.freepik.com/256/8352/8352187.png"
                          />
                        </div>
                      </>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="card card-profile-1">
                    <div className="img-placeholder rounded-circle img-fluid"></div>
                    <Placeholder as="p" animation="glow" className="col-6">
                      <Placeholder xs={12} />
                    </Placeholder>
                  </div>
                </>
              )}

              <div className="card card-profile-list ">
                {userData ? (
                  <>
                    <h2 className="manue-title">Manue</h2>
                    <ul className="porfile-options-menue">
                      <li onClick={() => handleMenueClick(0)}>
                        <a onClick={() => handleMenueClick(0)}>
                          <i
                            onClick={() => handleMenueClick(0)}
                            className="fa fa-user"
                          ></i>
                          User
                        </a>
                      </li>
                      <li onClick={() => handleMenueClick(1)}>
                        <a onClick={() => handleMenueClick(1)}>
                          <i
                            onClick={() => handleMenueClick(1)}
                            className="fa-solid fa-newspaper"
                          />{" "}
                          My Writes
                        </a>
                      </li>
                      <li onClick={() => handleMenueClick(2)}>
                        <a onClick={() => handleMenueClick(2)}>
                          <i
                            className="fa fa-plus"
                            onClick={() => handleMenueClick(2)}
                          />
                          Create Artical
                        </a>
                      </li>
                    </ul>
                  </>
                ) : (
                  <>
                    <Placeholder as="p" animation="glow" className="col-12">
                      <Placeholder xs={12} />
                    </Placeholder>
                    <Placeholder as="p" animation="glow" className="col-12">
                      <Placeholder xs={12} />
                    </Placeholder>
                    <Placeholder as="p" animation="glow" className="col-12">
                      <Placeholder xs={12} />
                    </Placeholder>
                  </>
                )}
              </div>
            </div>

            <div className="col-lg-8 col-md-12 col-sm-12 user-action-side">
              {userData ? (
                <>
                  <UserData userData={userData} onFinshed={onFinshed} />
                  <UserWrites postes={userPosts} onFinshed={onFinshed} />
                  <UserCreateArtical onFinshed={onFinshed} />
                </>
              ) : (
                <UserDataLoading />
              )}
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
}
