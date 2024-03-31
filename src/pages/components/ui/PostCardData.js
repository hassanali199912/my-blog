import { useNavigate } from "react-router-dom";

export default function PostCardData({ data }) {
  const navegate = useNavigate();
  const handleClick = () => {
    navegate(`/post/${data._id}`);
  };

  const formateDate = (date) => {
    console.log(date);
    const d = new Date(date);
    const arr = d.toString().split(" ");
    return `${arr[0]} , ${arr[1]} , ${arr[2]}, ${arr[3]}`;
  };

  const calcAverveReview = (reviews) => {
    let sum = 0;
    reviews.forEach((review) => {
      sum += review;
    });
    const revArra = (sum / reviews.length).toFixed(1).split(".");
    let rev = "";
    if (revArra[1] !== "0") {
      rev = revArra[0] + "." + revArra[1];
    } else {
      rev = revArra[0];
    }

    return rev ? rev : 0;
  };

  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12" onClick={handleClick}>
        <div className="card custom-card">
          <div className="custom-card-auther">
            {data?.auther?.image ? (
              <img src={data?.auther?.image} alt="this is auther image" />
            ) : (
              <img
                src="https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png"
                alt="this is auther image"
              />
            )}
            <span>{data?.auther?.name ? data?.auther?.name : "unknown"}</span>
          </div>
          <div className="custom-card-title">
            <h3>{data?.title ? data?.title : "post title"} </h3>
            <h5>{formateDate(data.createdAt)}</h5>
          </div>
          <div className="custom-card-image">
            {data?.imageUrl ? (
              <>
                <img src={data?.imageUrl} alt="this is card image" />
              </>
            ) : (
              <>
                <img
                  src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                  alt="this is card image"
                />
              </>
            )}
          </div>
          <div className="custom-card-reviews">
            <ul>
              <li className="likes-item">
                <i className="fa-regular fa-heart" />
                {data.likes ? data.likes.length : 0}
                <span className="tooltip-text">likes</span>
              </li>
              <li className="comment-item">
                <i className="fa-regular fa-comment" />
                {data.comments ? data.comments.length : 0}
                <span className="tooltip-text">comments</span>
              </li>
              <li className="review-item">
                <i className="fa-regular fa-star"></i>
                {data.reviews ? calcAverveReview(data.reviews) : 0}
                <span className="tooltip-text">review</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
