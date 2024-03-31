import { Placeholder } from "react-bootstrap";

export default function CommentComponentLoading() {
  return (
    <>
      <div className="card coment-card">
        <div className="row">
          <div className="col-2 comment-user-image">
            <div className="img-placeholder-single-post img-fluid"></div>
          </div>
          <div className="col-10 comment-user-body">
            <p className="comment-user-body-date">
              <Placeholder as="span" animation="glow">
                <Placeholder xs={4} />
              </Placeholder>
            </p>
            <h4 className="comment-user-body-name">
              <Placeholder as="span" animation="glow">
                <Placeholder xs={4} />
              </Placeholder>
            </h4>
            <p className="comment-user-body-text">
              <Placeholder as="span" animation="glow">
                <Placeholder xs={12} />
                <Placeholder xs={4} />
              </Placeholder>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
