import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { regesterApiFun } from "../store/Slicers/users/createUserSlicers";
import CustomLoader from "./components/ui/CustomLoader";

export default function Singup() {
  const { loading, user, error } = useSelector((s) => s.createUserSlicers);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameErrorMessage, setNameErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userCrdintional = {
      name,
      email,
      password,
    };
    dispatch(regesterApiFun(userCrdintional))
      .then((result) => {
        setNameErrorMessage("");
        setEmailErrorMessage("");
        setPasswordErrorMessage("");
        if (result.payload.message === "User created successfully") {
          localStorage.setItem("user", JSON.stringify(result.payload.data));
          window.location.href = "/";
        } else {
          if (result.payload.message === "Invaild User Data") {
            result.payload.data.forEach((item) => {
              if (item.path === "name") {
                setNameErrorMessage(item.msg);
              } else if (item.path === "email") {
                setEmailErrorMessage(item.msg);
              } else if (item.path === "password") {
                setPasswordErrorMessage(item.msg);
              } else {
                console.log(item);
              }
            });
          }
        }
      })
      .catch((err) => {
        console.log("this is error", err);
      });
  };

  return (
    <>
      <section className="section-div login-page">
        <div className="row">
          <div className=" card m-auto login-form-div">
            <img
              src="https://banner2.cleanpng.com/20180402/bje/kisspng-computer-icons-avatar-login-user-avatar-5ac207e69ecd41.2588125315226654466505.jpg"
              alt="login"
              className="img-fluid"
            />
            <h1>welcome</h1>
            <h3>Create An Account To Share Your Knowledge</h3>
            <form onSubmit={handleSubmit}>
              <div className={`form-group  ${nameErrorMessage ? "error" : ""}`}>
                <label htmlFor="name">Name</label>
                <input
                required
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter name..."
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <div className="error-feild">
                  <p>{nameErrorMessage}</p>
                </div>
              </div>
              <div
                className={`form-group  ${emailErrorMessage ? "error" : ""}`}
              >
                <label htmlFor="email">Email address</label>
                <input
                required
                  placeholder="Enter email..."
                  type="email"
                  className="form-control"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <div className="error-feild">
                  <p>{emailErrorMessage}</p>
                </div>
              </div>
              <div
                className={`form-group  ${passwordErrorMessage ? "error" : ""}`}
              >
                <label htmlFor="password">Password</label>
                <input
                required
                  placeholder="Enter password..."
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <div className="error-feild">
                  <p>{passwordErrorMessage}</p>
                </div>
              </div>
              <div className="form-group">
                {loading ? (
                  <>
                    <button disabled className="btn btn-primary">
                      <CustomLoader />
                    </button>
                  </>
                ) : (
                  <>
                    <button type="submit" className="btn btn-primary">
                      Singup
                    </button>
                  </>
                )}
              </div>
              <p className="m-4 text-center">
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
