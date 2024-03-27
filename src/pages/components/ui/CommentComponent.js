export default function CommentComponent() {
  return (
    <>
      <div className="card coment-card">
        <div className="row">
          <div className="col-2 comment-user-image">
            <img
              src="https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png"
              alt="this is auther image"
            />
          </div>
          <div className="col-10 comment-user-body">
            <p className="comment-user-body-date">20 mar 2024 </p>
            <h4 className="comment-user-body-name">Hassan Ali Say:</h4>
            <p className="comment-user-body-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry dummy text of the printing and typesetting industry dummy
              text of the printing and typesetting
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
