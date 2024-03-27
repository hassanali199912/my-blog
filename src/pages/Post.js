import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState({});

  const getAll = async () => {
    const response = await fetch(`http://localhost:3000/posts/${id}`);
    const data = await response.json();
    setPost(data);
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <section className="main post-page">
        <div className="row m-auto">
         {post&& <>
            <div className="col-8">
            <h1 className="post-title">{post.title}</h1>
            <h5 className="post-subtitle">By : {post.auther}</h5>
            <p className="post-subtitle">Written at : 20 feb 2022</p>
            <div className="post-badge">
            Tags :
            {post.tags ? post.tags.map((tag, index) => (
              <span key={index} className="badge badge-primary">
                {tag}
              </span>
            )) : "No Tages"}
          </div>

            <div className="box-img">
            {post.image && (<img src={post.image} alt="this is image" />)}
            </div>
            <p className="post-description">
            {post.body}
            </p>
          </div>
         </>}
        </div>
      </section>
    </>
  );
}
