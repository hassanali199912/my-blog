import { Placeholder } from "react-bootstrap";

export default function UserDataLoading() {
  return (
    <>
      <div className="card-profile-2 user-data">
        <h1> Profile Data</h1>
        <p>this is profile data for the user </p>
        <form className="form-profile">
          <div className="form-group">
            <Placeholder as="p" animation="glow" className="col-12">
              <Placeholder xs={12} className="py-3" />
            </Placeholder>
          </div>
          <div className="form-group">
            <Placeholder as="p" animation="glow" className="col-12">
              <Placeholder xs={12} className="py-3" />
            </Placeholder>
          </div>
          <hr />
          <h3>
            <Placeholder as="p" animation="glow" className="col-4">
              <Placeholder xs={12} />
            </Placeholder>
          </h3>
          <div className="form-group">
            <Placeholder as="p" animation="glow" className="col-12">
              <Placeholder xs={12} className="py-3" />
            </Placeholder>
          </div>
          <div className="form-group">
            <Placeholder as="p" animation="glow" className="col-12">
              <Placeholder xs={12} className="py-3" />
            </Placeholder>
          </div>
          <div className="form-group">
            <Placeholder as="p" animation="glow" className="col-4">
              <Placeholder xs={12} />
            </Placeholder>
          </div>
        </form>
      </div>
    </>
  );
}
