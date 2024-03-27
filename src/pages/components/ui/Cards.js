import { useNavigate } from "react-router-dom";

export default function Card({ data }) {
  const navegate = useNavigate();
  const handleClick = () => {
    navegate(`/post/${data.id}`);
  };
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12" onClick={handleClick}>
        <div className="card">
          {data.image && <img src={data.image} alt="this is image" />}

          <h3 className="card-title">{data.title}</h3>
          <h5 className="card-subtitle">{data.auther}</h5>
          <p className="card-descriotion">{data.body}</p>
          {data.tags && (
            <>
              <div className="card-badge">
                {data.tags.map((tag, index) => (
                  <span key={index} className="badge badge-primary">
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

