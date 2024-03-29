import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loginApiFun } from "../store/Slicers/users/loginSlicers";
import { useEffect, useState } from "react";
import CustomLoader from "./components/ui/CustomLoader";

export default function Login() {
  const { loading, user, error } = useSelector((s) => s.loginSlicers);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("hassan1@app.com");
  const [password, setPassword] = useState("123456789");

  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userCrdintional = { email, password };
    dispatch(loginApiFun(userCrdintional))
      .then((result) => {
        setEmailErrorMessage("");
        setPasswordErrorMessage("");
        if (result.payload.message === "Login successful") {
          localStorage.setItem("user", JSON.stringify(result.payload.data));
          window.location.href = "/";
        } else {
          if (result.payload.message === "Data not found") {
            setEmailErrorMessage("email is not found");
          } else if (result.payload.message === "Invalid credentials") {
            setPasswordErrorMessage("password is not correct");
          } else {
            setEmailErrorMessage("email is not found");
            setPasswordErrorMessage("password is not correct");
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
            <h3>Login To Write Your Knowledge</h3>
            <form onSubmit={handleSubmit}>
              <div className={`form-group ${emailErrorMessage ? "error" : ""}`}>
                <label htmlFor="email">Email </label>
                <input
                  required
                  type="email"
                  placeholder="Enter email..."
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
                className={`form-group ${passwordErrorMessage ? "error" : ""}`}
              >
                <label htmlFor="password">Password</label>
                <input
                  required
                  type="password"
                  placeholder="Enter password..."
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
                    <button className="btn btn-primary" disabled>
                      <CustomLoader />
                    </button>
                  </>
                ) : (
                  <>
                    <button type="submit" className="btn btn-primary">
                      Login
                    </button>
                  </>
                )}
              </div>
              <p className="m-4 text-center">
                Don't have an account? <Link to="/singup">Register</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
