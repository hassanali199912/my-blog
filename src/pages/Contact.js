import Wrapper from "./components/Wrapper";
import ContactBoxCard from "./components/ui/ContactBoxCard";

export default function Contact() {
  const goToLinkedin = () => {
    window.open("https://www.linkedin.com/in/hassan-ali-510b39192/", "_blank");
  };
  const goToFacebook = () => {
    window.open("https://www.facebook.com/albashmohnds.hassan/", "_blank");
  };
  const goToFGithub = () => {
    window.open("https://github.com/hassanali199912", "_blank");
  };

  const goToWhatsapp = () => {
    window.open("https://api.whatsapp.com/send?phone=01553880080", "_blank");
  };
  const goToMyemail = () => {
    window.location.href = "mailto:hassanalihassan1203@gmail.com";
  };
  const goToMyCv = () => {
    window.open(
      "https://drive.google.com/file/d/1MrLe_ZlwDE9Sx3JePMUUd8jPorC674gn/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <>
      <section className="section-div contact">
        <Wrapper>
          <div className="row">
            <div className="col-12 contact-content">
              <div className="contact-header">
                <h1 className="contact-title">Let's get in touch!</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took
                </p>
              </div>
              <div className="row contact-cards">
                <ContactBoxCard
                  title={"Linkedin"}
                  description={"Click To Visit My Linkedin"}
                  icon={"fa-brands fa-linkedin-in"}
                  onClick={goToLinkedin}
                />
                <ContactBoxCard
                  title={"Facebook"}
                  description={"Click To Visit My Facebook"}
                  icon={"fa-brands fa-facebook-f"}
                  onClick={goToFacebook}
                />
                <ContactBoxCard
                  title={"Github"}
                  description={"Click To Visit My Github"}
                  icon={"fa-brands fa-github"}
                  onClick={goToFGithub}
                />

                <ContactBoxCard
                  title={"Email"}
                  description={"email : hassanalihassan1203@gmail.com"}
                  icon={"fa-regular fa-envelope"}
                  onClick={goToMyemail}
                />
                <ContactBoxCard
                  title={"Phone"}
                  description={"my mobile : 01553880080"}
                  icon={"fa-solid fa-phone"}
                  onClick={goToWhatsapp}
                />
                <ContactBoxCard
                  title={"CV"}
                  description={"download my cv"}
                  icon={"fa-regular fa-file"}
                  onClick={goToMyCv}
                />
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
}
