export default function CommentComponent({ data }) {
  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <div className="card coment-card">
        <div className="row">
          <div className="col-2 comment-user-image">
            {data.user && data.user.image ? (
              <>
                <img src={data.user.image} alt="this is auther image" />
              </>
            ) : (
              <>
                <img
                  src="https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png"
                  alt="this is auther image"
                />
              </>
            )}
          </div>
          <div className="col-10 comment-user-body">
            <p className="comment-user-body-date">
              {data.createdAt ? formatDate(data.createdAt) : "No date"}
            </p>
            <h4 className="comment-user-body-name">
              {data.user && data.user.name ? data.user.name : "Annonemonuse"}{" "}
              Say:
            </h4>
            <p className="comment-user-body-text">
              {data.comment ? data.comment : "No comment"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
