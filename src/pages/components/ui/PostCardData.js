import { useNavigate } from "react-router-dom";

export default function PostCardData({ data }) {
  const navegate = useNavigate();
  const handleClick = () => {
    navegate(`/post`);
  };
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12" onClick={handleClick}>
        <div className="card custom-card">
          <div className="custom-card-auther">
            <img
              src="https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png"
              alt="this is auther image"
            />
            <span >Hassan Ali Hassan</span>
          </div>
          <div className="custom-card-title">
            <h3>this is card title </h3>
            <h5>Mar 22 2024</h5>
          </div>
          <div className="custom-card-image">
            <img
              src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
              alt="this is card image"
            />
          </div>
          <div className="custom-card-reviews">
            <ul>
              <li className="likes-item">
                <i className="fa-regular fa-heart" />5
                <span className="tooltip-text">likes</span>
              </li>
              <li className="comment-item">
                <i className="fa-regular fa-comment" />
                10
                <span className="tooltip-text">comments</span>
              </li>
              <li className="review-item">
                <i class="fa-regular fa-star"></i>45
                <span className="tooltip-text">review</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
