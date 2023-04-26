import React, { useState } from "react";
import Modal from "react-modal";
import heroImgMobile from "../../../public/assets/img/hero/img-mobile.jpg";
import cancelImg from "../../../public/assets/img/cancel.svg";
import AboutMain from "../about";
import Image from "next/image";

const heroContent = {
  heroImage: "/assets/img/hero/dark.jpg",
  heroMobileImage: heroImgMobile,
  heroTitleName: "alexandru",
  heroDesignation: "Passionate Front-End Developer & Problem Solver",
  heroDescriptions: `As a resourceful and adaptable Front-end Developer, with 12 years of professional experience, I specialize in crafting innovative web applications and digital experiences backed by a strong foundation in HTML, CSS, JavaScript, and Python. My diverse background has honed my problem-solving, project management, and technical skills, enabling me to excel in any team environment.\n
Well-versed in full-stack development, I possess expertise in Adobe Creative Suite, Canva, Figma, Flask, Git/GitHub, Node.js, PostgreSQL, SQL, and TypeScript. With certifications in CSS, HTML, JavaScript, Python, Flask, SQL, and React, I am committed to continuous learning and keeping pace with industry trends.\n
Driven by a passion for delivering exceptional front-end experiences, I am eager to contribute to a forward-thinking company, tackling front-end, full-stack, or software engineering challenges.`,
  heroBtn: "more about me",
};


const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{ backgroundImage: `url(${heroContent.heroImage})` }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <Image
              src={heroContent.heroMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
              // style={{width:'100%',height:'100%'}}
            />
            <h1 className="text-uppercase poppins-font">
              {"Hello! I'm"} {heroContent.heroTitleName},
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font" style={{ whiteSpace: "pre-wrap" }}>
              {heroContent.heroDescriptions}
            </p>

            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <Image src={cancelImg} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-start text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              {/* End title */}
              <AboutMain />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default Hero;
