import React from 'react'
import './About.css';
import AboutSocial from './AboutSocial';
import { IoEyeOutline } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { LiaAwardSolid } from "react-icons/lia";
import aboutImage from "../image/aboutImage.jpg";
import { IoMdClock } from "react-icons/io";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import OurSolution from './OurSolution';
import Pratyaksh from "../image/PratyakshLutare.jpg"
import Yogesh from "../image/yogesh.png";
import Akshay from "../image/AkshayDharawal.jpg";
import Pankaj from "../image/PankajMeena.jpg";
import Rohit from "../image/Rohit.jpg";
import Ankit from "../image/ankitPic.jpg"
import manish from "../image/manish.jpg";
import Divyani from "../image/divyani.jpg";
import jahnkar from "../image/jahnkar.jpg"
import { FaLinkedin } from "react-icons/fa";





function About() {
    return (
        <div>
            <div className="backgroundService">
                <h1>About Us</h1>
                <p className="backgroundPara">
                    Home <span className="arrow"> &gt;</span> About
                </p>
            </div>
            <AboutSocial />

            <div className="main-container1">
                <div className="ourCard card1">
                    <div className="card-icon"><IoEyeOutline /></div>
                    <h4 className="card-heading">Our Vision</h4>
                    <p className="card-para">Creating a brighter tomorrow through tech solutions that simplify and inspire.</p>
                </div>
                <div className="ourCard card2">
                    <div className="card-icon"><TbTargetArrow /></div>
                    <h4 className="card-heading">Our Mission</h4>
                    <p className="card-para">Making a positive impact through tech, one solution at a time.</p>
                </div>
                <div className="ourCard card3">
                    <div className="card-icon"><BiSupport /></div>
                    <h4 className="card-heading">Our Support</h4>
                    <p className="card-para">"Count on us for dependable and friendly support whenever you need it."</p>
                </div>
                <div className="ourCard card4">
                    <div className="card-icon"><LiaAwardSolid /></div>
                    <h4 className="card-heading">Our Awards</h4>
                    <p className="card-para">We're honored to receive awards for our dedication to excellence and innovation.</p>
                </div>
            </div>
            <br></br>
            <div className="main-container2">
                <div className="section section-left">
                    <div className="button-text1">
                        Why Choose Us
                    </div>
                    <h2 className="headProcess">
                        We Provide Best Service For Social
                        <br /> Media Marketing
                    </h2>
                    <p className="para1">
                        We offer exceptional social media marketing services to help you stand out online. Let us elevate your
                        <br /> digital presence!
                    </p>

                    <div className="main-container3">
                        <div className="ourCard1">
                            <div className="card-icon1"><IoMdClock /></div>
                            <h4 className="card-heading1">Save Your Time</h4>
                            <p className="card-para">Let us handle the heavy lifting, so you can focus
                                <br></br> on what matters most. Time-saving solutions
                                <br></br> tailored just for you.</p>
                        </div>
                        <div className="ourCard1">
                            <div className="card-icon1"><HiOutlineLightBulb /></div>
                            <h4 className="card-heading1">Best Strategy</h4>
                            <p className="card-para">Crafting winning strategies that deliver results, tailored to your goals and needs.</p>
                        </div>
                        <div className="ourCard1">
                            <div className="card-icon1"><FaHandHoldingDollar /></div>
                            <h4 className="card-heading1">Affordable Price</h4>
                            <p className="card-para">Get great value without breaking the bank.
                                <br></br> Quality services at prices that fit your budget.</p>
                        </div>
                        <div className="ourCard1">
                            <div className="card-icon1"><HiMiniComputerDesktop /></div>
                            <h4 className="card-heading1">24/7 Support</h4>
                            <p className="card-para">Always here for you, 24/7</p>
                        </div>
                    </div>

                </div>
                <div className="section section-right"></div>
            </div>
            <OurSolution />
            <div className="backgroundProject1">
                <h1>Need Advice For Your Social Media Marketing?</h1>
                <p className="backgroundPara">
                    Looking for social media marketing advice? Let’s chat and strategize to elevate your online
                    <br /> presence.
                </p>
                <a href="http://localhost:3000/contact" className="project-button-link">
                    <div className="project-button1">
                        Contact Us
                    </div>
                </a>
            </div>
            <div className='TeamMember'>
                <div className="service-button1">
                    <span className="button-text">Our Team</span>
                </div>
                <h2>Meet With Expert Team</h2>
                <p className="para1">
                    Connect with our expert team today. Let’s work together to achieve our goals.
                </p>
            </div>


            <div className="main-container4">
                <div className="card5">
                    <img src={manish} alt="Manish Bhayal" className="card-image" />
                    <div className="card-name">Manish Bhayal</div>
                    <div className="card-position">BDE & Human Resources</div>
                    <div className="card-icons">
                        <a href="https://www.linkedin.com/in/manish-bhayal-48745a18b/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                            <FaLinkedin size={22} />
                        </a>
                    </div>
                </div>
                <div className="card5">
                    <img src={Pratyaksh} alt="Pratyaksh Lutare" className="card-image" />
                    <div className="card-name">Pratyaksh Lutare</div>
                    <div className="card-position">UI-UX and Graphic Designer</div>
                    <div className="card-icons">
                        <a href="https://www.linkedin.com/in/pratyaksh-lutare-3620a2235/">
                            <FaLinkedin size={22} />
                        </a>
                    </div>
                </div>
                <div className="card5">
                    <img src={jahnkar} alt="Jahnkar Gadhwal" className="card-image" />
                    <div className="card-name">Jahnkar Gadhwal</div>
                    <div className="card-position">Front-end Developer</div>
                    <div className="card-icons">
                        <a href="https://www.linkedin.com/in/jahnkar-gadhwal-583724175/">
                            <FaLinkedin size={22} />
                        </a>
                    </div>
                </div>
                <div className="card5">
                    <img src={Akshay} alt="Akshay Dharawal" className="card-image" />
                    <div className="card-name">
                        Akshay Dharawal</div>
                    <div className="card-position">Backend Developer</div>
                    <div className="card-icons">
                        <a href="https://www.linkedin.com/in/akshay-daharwal-bab093262/">
                            <FaLinkedin size={22} />
                        </a>
                    </div>
                </div>
                <div className="card5">
                    <img src={Divyani} alt="Divyani Chhapre" className="card-image" />
                    <div className="card-name">Divyani Chhapre</div>
                    <div className="card-position">Node.js developer</div>
                    <div className="card-icons">
                        <a href="https://www.linkedin.com/in/divyani-chhapre-89616722a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                            <FaLinkedin size={22} />
                        </a>
                    </div>
                </div>
                <div className="card5">
                    <img src={Yogesh} alt="Yogesh Rathor" className="card-image" />
                    <div className="card-name">Yogesh Rathor</div>
                    <div className="card-position">Front-end Developer</div>
                    <div className="card-icons">
                        <a href="https://www.linkedin.com/in/yogesh-rathor-838636214/">
                            <FaLinkedin size={22} />
                        </a>
                    </div>
                </div>
                <div className="card5">
                    <img src={Pankaj} alt="Pankaj Meena" className="card-image" />
                    <div className="card-name">Pankaj Meena</div>
                    <div className="card-position">React JS Developer</div>
                    <div className="card-icons">
                        <a href="https://www.linkedin.com/in/pankaj-meena83/">
                            <FaLinkedin size={22} />
                        </a>
                    </div>
                </div>
                <div className="card5">
                    <img src={Rohit} alt="Rohit jat" className="card-image" />
                    <div className="card-name">Rohit Jat</div>
                    <div className="card-position">Front-end Developer</div>
                    <div className="card-icons">
                        <a href="https://www.linkedin.com/in/rohit-jat-96739a222/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                            <FaLinkedin size={22} />
                        </a>
                    </div>
                </div>
                <div className="card5">
                    <img src={Ankit} alt="Ankit Gurjar" className="card-image" />
                    <div className="card-name">Ankit Gurjar</div>
                    <div className="card-position">Front-end Developer</div>
                    <div className="card-icons">
                        <a href="https://www.linkedin.com/in/mr-ankit-gurjar-1004b4272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ">
                            <FaLinkedin size={22} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About