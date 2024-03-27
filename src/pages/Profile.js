import { useEffect, useState } from "react";
import UserData from "./components/profile-components/UserData";
import UserWrites from "./components/profile-components/UserWrites";
import UserCreateArtical from "./components/profile-components/UserCreateArtical";

export default function Profile() {
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

  useEffect(() => {
    handleMenueClick(0);
  }, []);

  return (
    <>
      <section className="section-div profile-page">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12  user-options-side">
            <div className="card card-profile-1">
              <img
                src="https://i.ibb.co/5RgQjw/profile.jpg"
                className="rounded-circle img-fluid"
                alt="profile"
              />
              <h2>Muhammad Ali</h2>
            </div>

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
            <UserData />
            <UserWrites />
            <UserCreateArtical />
          </div>
        </div>
      </section>
    </>
  );
}
