export default function ContactBoxCard({ title, description, icon,onClick }) {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12 " onClick={onClick}>
        <div className="card contact-box">
          <div className="inner-content">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <i className={icon} />
        </div>
      </div>
    </>
  );
}
