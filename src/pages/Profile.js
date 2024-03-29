import { useEffect, useState } from "react";
import UserData from "./components/profile-components/UserData";
import UserWrites from "./components/profile-components/UserWrites";
import UserCreateArtical from "./components/profile-components/UserCreateArtical";
import Wrapper from "./components/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { getUserDataApiFun } from "../store/Slicers/users/getUserSlicers";
import Placeholder from "react-bootstrap/Placeholder";
import UserDataLoading from "./components/profile-components/UserDataLoading";
import UserWritesLoading from "./components/profile-components/UserWritesLoading";

export default function Profile() {
  const { loading, data, error } = useSelector((s) => s.getUserSlicers);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState();
  const [userPosts,setUserPosts] = useState([]);

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
    //setUserData(null);
    dispatch(getUserDataApiFun())
      .then((res) => {
        if (res.payload.message === "User fetched successfully") {
          handleMenueClick(0);
          setUserData(res.payload.data.user);
          setUserPosts(res.payload.data.posts);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onFinshed =()=>{
    window.location.reload(); //reload the page
  }

  useEffect(() => {
    getUserData();
    handleMenueClick(0);
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
                    <img
                      src={userData.image}
                      className="rounded-circle img-fluid"
                      alt="profile"
                    />
                    <h2>{userData.name}</h2>
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
                <h2 className="manue-title">Manue</h2>
                <ul className="porfile-options-menue">
                  <li onClick={() => handleMenueClick(0)}>
                    <a href="#" onClick={() => handleMenueClick(0)}>
                      <i
                        onClick={() => handleMenueClick(0)}
                        className="fa fa-user"
                      ></i>
                      User
                    </a>
                  </li>
                  <li onClick={() => handleMenueClick(1)}>
                    <a href="#" onClick={() => handleMenueClick(1)}>
                      <i
                        onClick={() => handleMenueClick(1)}
                        className="fa-solid fa-newspaper"
                      />{" "}
                      My Writes
                    </a>
                  </li>
                  <li onClick={() => handleMenueClick(2)}>
                    <a href="#" onClick={() => handleMenueClick(2)}>
                      <i
                        className="fa fa-plus"
                        onClick={() => handleMenueClick(2)}
                      />
                      Create Artical
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-8 col-md-12 col-sm-12 user-action-side">
              {userData ? (
                <UserData userData={userData} onFinshed={onFinshed} />
              ) : (
                <UserDataLoading />
              )}

              {userData ? (
                <UserWrites postes={userPosts} onFinshed={onFinshed} />
              ) : (
                <UserWritesLoading />
              )}

              <UserCreateArtical onFinshed={onFinshed} />
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
}
