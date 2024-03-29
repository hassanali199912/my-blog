import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentComponent from "./components/ui/CommentComponent";
import Wrapper from "./components/Wrapper";

export default function SinglePostPage() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  const handleStarClick = (index) => {
    const allStart = document.querySelectorAll(".fa-star");
    allStart.forEach((star) => {
      star.classList.remove("active");
    });

    [...Array(index)].map((star, index) => {
      allStart[index].classList.add("active");
    });
  };

  return (
    <>
      <section className="image-single-post">
        <div className="row">
        <div className="col-12 inner-image">
              <img
                src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                alt="this is card image"
              />
            </div>
            <div className="col-12 auther-single-div">
              <div className="box-img">
                <img
                  src="https://static-00.iconduck.com/assets.00/profile-circle-icon-256x256-cm91gqm2.png"
                  alt="this is auther image"
                />
                <h2>
                  <em>Hassan Ali Hassan</em>
                </h2>
              </div>
            </div>
        </div>
        <Wrapper>
          <div className="row ">
            
            <div className="col-12 post-content">
              <h1 className="post-title">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </h1>
              <p className="post-subtitle"> 20 feb 2022</p>
              <div className="post-reactive">
                <h3>Give Us A Like ?</h3>
                <button>
                  <i className="fa-regular fa-heart" />5
                </button>
              </div>
              <div className="post-badge">
                <span className="badge badge-primary">#HTML</span>
                <span className="badge badge-primary">#HTML</span>
                <span className="badge badge-primary">#HTML</span>
                <span className="badge badge-primary">#HTML</span>
              </div>
              <p className="post-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <br />
              <p className="post-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <br />
              <p className="post-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <p className="post-description">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div className="col-lg-8 col-md-12 post-comment">
              <h3 className="comments-title">Comments</h3>
              <CommentComponent />
              <CommentComponent />
              <CommentComponent />
            </div>
            <div className="col-lg-8 col-md-12 post-comment-form">
              <h3 className="comments-title">Leave a Comment</h3>
              <p className="comment-note">
                Your email address will not be published, Required field ware
                marked *
              </p>
              <form>
                <div className="form-group">
                  <label>Artical Reating</label>
                  <div className="rating-star">
                    {[...Array(5)].map((star, index) => {
                      return (
                        <i
                          key={index}
                          className="fa fa-star"
                          onClick={() => handleStarClick(index + 1)}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="emial">Emial *</label>
                  <input type="email" className="form-control" id="emial" />
                </div>
                <div className="form-group">
                  <label htmlFor="comment">Comment *</label>
                  <textarea className="form-control" id="comment" rows={5} />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn">
                    Submitte
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
}
