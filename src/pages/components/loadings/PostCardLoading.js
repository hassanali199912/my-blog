import { Placeholder } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function PostCardLoading() {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card custom-card">
          <div className="custom-card-auther">
          <div className="img-placeholder-post-card-auther img-fluid"></div>
            <Placeholder as="span" animation="glow" className="col-6">
              <Placeholder xs={12} />
            </Placeholder>
          </div>
          <div className="custom-card-title">
            {/* <h3>this is card title </h3> */}
            <Placeholder as="h3" animation="glow" className="col-8">
              <Placeholder xs={12} className={"py-3"} />
            </Placeholder>
            <Placeholder as="h5" animation="glow" className="col-6">
              <Placeholder xs={12} />
            </Placeholder>
          </div>
          <div className="custom-card-image">
          <div className="img-placeholder-post-card-home img-fluid"></div>
          </div>
          <div className="custom-card-reviews">
          <Placeholder as="h5" animation="glow" className="col-12 my-2">
              <Placeholder xs={12}  className="py-3"/>
            </Placeholder>
          </div>
        </div>
      </div>
    </>
  );
}
