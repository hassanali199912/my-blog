import Wrapper from "./components/Wrapper";

export default function About() {
  return (
    <>
      <section className="section-div about-page">
        <Wrapper>
          <div className="row">
            <div className="col-12 about-title">
              <h1>About Us</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, quia.
              </p>
            </div>
            <div className="col-12">
              <div className="row about-content">
                <div className="col-lg-6 col-md-12 col-sm-12 text-div">
                  <h3>Our History</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quia. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quisquam, quia. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quisquam, quia.
                  </p>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 image-div">
                  <img
                    src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D"
                    alt="this is card image"
                  />
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
}
