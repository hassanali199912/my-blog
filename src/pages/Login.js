import { Link } from "react-router-dom";

export default function Login() {
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
            <form>
              <div className="form-group">
                <label htmlFor="email">Email </label>
                <input
                  type="email"
                  placeholder="Enter email..."
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Enter password..."
                  className="form-control"
                  id="password"
                  aria-describedby="passwordHelp"
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
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