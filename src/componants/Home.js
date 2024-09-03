import React from "react";
import AboutExperience from "./AboutExperience";
import OurService from './OurService';
import Achievement from "./Achievement";
import OurClients from "./OurClients";
import OurTeam from "./OurTeam";
import OurBlog from "./OurBlog";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FaArrowRight } from "react-icons/fa";
import "./Home.css";
import myhome from "../image/myhome.png";
import team1 from "../image/team.jpg";
import team2 from "../image/team2.jpg";
import team3 from "../image/team3.jpg";
import team4 from "../image/team4.jpg";
import service from "../image/service.jpg";
import service2 from "../image/service2.png";
import service3 from "../image/service3.png";
import service4 from "../image/service4.png";
import service5 from "../image/service5.png";
import service6 from "../image/service6.png";
import nodeImage from "../image/node.jpg";
import cssImage from "../image/CSS.jpg";
import jsImage from "../image/js.jpg";
import angularImage from "../image/angular.jpg";
import work1 from "../image/work1.jpg";
import work2 from "../image/work2.jpg";
import work3 from "../image/work3.jpg";
import work4 from "../image/work4.jpg";
import FAQSection from "./FAQSection";
import untitleimage from "../image/Untitleimage.png";


function Home() {
  return (
    <>
      <div className="Home1">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="left-content" style={{ width: "50%" }}>
            <div className="button-container">
              <span className="button-text">WELCOME TO RISHUS INFOTECH</span>
            </div>
            <h1>
              Innovate Today <br /> Dominate Tomorrow
            </h1>
            <p>
              Rishus Infotech is a young Product and Services development company
              based in Indore. We do everything related to web and mobile app
              development and are extremely passionate about building world-class
              products. We are a young team of developers with creative minds and
              strong skills.
            </p>

            <div className="buttons">
              <a href="http://localhost:3000/contact" class="get-started-link">
                <button class="get-started">
                  Contact us <FontAwesomeIcon icon={faCircleRight} />
                </button>
              </a>
              <a href="https://youtu.be/MLpWrANjFbI?list=TLGG9m1lwPUk9SEyOTA4MjAyNA">
                <button className="watch-intro">
                  <FontAwesomeIcon icon={faPlay} />
                </button>
              </a>
              Watch Intro
            </div>
            <div className="team">
              <img src={team1} alt="Team Member 1" />
              <img src={team2} alt="Team Member 2" />
              <img src={team3} alt="Team Member 3" />
              <img src={team4} alt="Team Member 4" />
            </div>
          </div>

          <div
            style={{
              width: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                border: "1px dashed black",
                borderRadius: "50%",
                width: "83%",
                height: "95%",
              }}
            ></div>

            <div
              style={{
                position: "absolute",
                top: "3%",
                left: "20%",
              }}
            >
              <img
                src={nodeImage}
                style={{ width: "48px", height: "48px" }}
                alt="Main"
              />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "3%",
                right: "20%",
              }}
            >
              <img
                src={cssImage}
                style={{ width: "45px", height: "45px" }}
                alt="Main"
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: "3%",
                right: "20%",
              }}
            >
              <img
                src={jsImage}
                style={{ width: "45px", height: "45px" }}
                alt="Main"
              />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "3%",
                left: "25%",
              }}
            >
              <img
                src={angularImage}
                style={{ width: "45px", height: "45px" }}
                alt="Main"
              />
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "3%",
                left: "20%",
              }}
            ></div>

            <div
              style={{
                position: "absolute",
                borderRadius: "50%",
                width: "70%",
                height: "80%",
                backgroundColor: "#3D3568",


              }}
            ></div>
            <div
              style={{
                position: "absolute",
                backgroundColor: "#564691",
                borderRadius: "50%",
                width: "55%",
                height: "65%",

              }}
            ></div>
            <div style={{ position: "relative", top: "-2%", left: "12%" }}>
              <img
                className="myhome"
                src={myhome}
                style={{ width: "60%", height: "60%" }}
                alt="Main"
              />
            </div>
          </div>
        </div>
      </div>


      <AboutExperience />
      <OurService />

      <div className="card-section1">
        <div className="cardImage">
          <img src={service} alt="Service 1" />
        </div>

        <div className="card">
          <img src={service2} alt="Service 2" />
          <h3>Website & App <br />Development</h3>
          <p className="para1">We provide expert website & app
            <br></br> development services customized to
            <br></br>meet your specific needs and goals</p>
          <br></br>
          <a href="http://localhost:3000/services" target="_blank" rel="noopener noreferrer">
            <button className="readMore">
              read more <FaArrowRight />
            </button>
          </a>
        </div>


        <div className="card">
          <img src={service3} alt="Service 3" />
          <h3>Software Development</h3>
          <p className="para1">rafting customized software to
            <br></br> streamline your operations.
            <br></br>Let's bring
            your ideas to life with our
            <br></br>expertise in
            software development.</p>
          <br></br>
          <a href="http://localhost:3000/services" target="_blank" rel="noopener noreferrer">
            <button className="readMore">
              read more <FaArrowRight />
            </button>
          </a>
        </div>
      </div>
      <br></br>
      <br></br>

      <div className="card-section2">
        <div className="card">
          <img src={service4} alt="Service 4" />
          <h3>SEO</h3>
          <p className="para1">Improve your online visibility with
            <br></br>effective SEO strategies. Let's get your
            <br></br>website ranking higher and attracting
            <br></br> more visitors.</p>
          <br></br>
          <a href="http://localhost:3000/services" target="_blank" rel="noopener noreferrer">
            <button className="readMore">
              read more <FaArrowRight />
            </button>
          </a>
        </div>


        <div className="card">
          <img src={service5} alt="Service 5" />
          <h3>Digital Marketing</h3>
          <p className="para1">Boost your online presence with
            <br></br>strategic digital marketing. Let's drive
            <br></br> growth and engagement together.</p>
          <br></br>
          <a href="http://localhost:3000/services" target="_blank" rel="noopener noreferrer">
            <button className="readMore">
              read more <FaArrowRight />
            </button>
          </a>
        </div>



        <div className="card">
          <img src={service6} alt="Service 6" />
          <h3>Training and Placement</h3>
          <p className="para1">Unlock your potential with our training
            <br></br> programs. Let's help you find the perfect
            <br></br>placement to kickstart your career.</p>
          <br></br>
          <a href="http://localhost:3000/services" target="_blank" rel="noopener noreferrer">
            <button className="readMore">
              read more <FaArrowRight />
            </button>
          </a>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>


      <div className="nextSection">
        <div className="section">
          <div className="left">
            <div className="button-container">
              <span className="button-text">Our Projects</span>
            </div>
            <h2>Project We Have Done</h2>
          </div>
          <div className="right">
            <p className="para1">
              we’ve completed numerous projects in web designing, software development, SEO,
              <br></br>and SMM. Our expertise spans various industries, delivering top-notch solutions
              <br></br>tailored to each client’s needs. With a focus on quality and client satisfaction, we
              <br></br> ensure successful outcomes for every project.
            </p>
            <a href="http://localhost:3000/projects"></a>
            <button className="allProject">
              View All Projects
            </button>
          </div>
        </div>
      </div>

      <div className="work">
        <div className="cards">
          <div className="cardWork">
            <img src={work1} alt="work1" />
          </div>
          <div className="cardWork">
            <img src={work2} alt="work2" />
          </div>
          <div className="cardWork">
            <img src={work3} alt="work3" />
          </div>
          <div className="cardWork">
            <img src={work4} alt="work 4" />
          </div>
        </div>
      </div>


      <Achievement />
      <OurClients />
      <OurTeam />
      <OurBlog />
      <FAQSection />


      <div className="ready">
        <div className="left1">
          <h1>Ready To Think Big?</h1>
          <p>Let’s Make a Call with Us</p>
        </div>
        <div className="right1">
          <button className="right2">
            <a
              href="https://api.whatsapp.com/send/?phone=%2B918959409296&text&type=phone_number&app_absent=0" className="project-button-link"
            >
              CONTACT US <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </button>
        </div>

      </div>

    </>

  );
}


export default Home;
