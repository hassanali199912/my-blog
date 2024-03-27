export default function UserData() {
  return (
    <>
      <div className="card-profile-2 user-data">
        <h1> Profile Data</h1>
        <p>this is profile data for the user </p>
        <form className="form-profile">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name.."
              value={"Muhammad Ali"}
            />
          </div>
          <div className="form-group">
            <input
              disabled
              readOnly
              type="email"
              className="form-control"
              placeholder="Email.."
              value={"mohammed@email.com"}
            />
          </div>
          <hr />
          <h3>Password change</h3>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="old password.."
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="new password.."
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block">Save</button>
          </div>
        </form>
      </div>
    </>
  );
}
