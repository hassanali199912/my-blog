import { Placeholder } from "react-bootstrap";
import Wrapper from "../Wrapper";

export default function SinglePostLoading() {
    return<>
         <section className="image-single-post">
          <div className="row">
            <div className="col-12 inner-image">
              <div className="img-placeholder-single-post-main img-fluid"></div>
            </div>
            <div className="col-12 auther-single-div">
              <div className="box-img">
                <div className="img-placeholder-single-post img-fluid"></div>

                <h2>
                  <Placeholder as="span" animation="glow" className="col-4">
                    <Placeholder xs={4} />
                  </Placeholder>
                </h2>
              </div>
            </div>
          </div>
          <Wrapper>
            <div className="row ">
              <div className="col-12 post-content mb-5">
                <h1 className="post-title">
                  <Placeholder as="span" animation="glow" className="col-4">
                    <Placeholder xs={4} />
                  </Placeholder>
                </h1>
                <p className="post-subtitle">
                  <Placeholder as="span" animation="glow" className="col-4">
                    <Placeholder xs={4} />
                  </Placeholder>
                </p>
                <p className="post-description">
                  <Placeholder as="p" animation="glow">
                    <Placeholder xs={12} />
                  </Placeholder>
                  <Placeholder as="p" animation="glow">
                    <Placeholder xs={12} />
                  </Placeholder>
                  <Placeholder as="p" animation="glow">
                    <Placeholder xs={12} />
                  </Placeholder>
                  <Placeholder as="p" animation="glow">
                    <Placeholder xs={12} />
                  </Placeholder>
                  <Placeholder as="p" animation="glow">
                    <Placeholder xs={12} />
                  </Placeholder>
                </p>
                <p className="post-description">
                  <Placeholder as="p" animation="glow">
                    <Placeholder xs={12} />
                  </Placeholder>
                  <Placeholder as="p" animation="glow">
                    <Placeholder xs={12} />
                  </Placeholder>
                  <Placeholder as="p" animation="glow">
                    <Placeholder xs={12} />
                  </Placeholder>
                  <Placeholder as="p" animation="glow">
                    <Placeholder xs={12} />
                  </Placeholder>
                  <Placeholder as="p" animation="glow">
                    <Placeholder xs={12} />
                  </Placeholder>
                </p>
              </div>
            </div>
          </Wrapper>
        </section>
    </>
};
