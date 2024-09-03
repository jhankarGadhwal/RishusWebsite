import React from 'react'
import "./OurTeam.css";
import kahna from "../image/kanha.png";
import hr from "../image/Hr.png";
import pratyaksh from "../image/Pratyaksh.jpeg";
import rohit from "../image/Rohit.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function OurTeam() {
    return (
        <div>
            <div className="meet">
                <div className="center">
                    <div className="service-button">
                        <span className="button-text">Our Team</span>
                    </div>
                    <h3>Meet our Team Member</h3>
                    <p className="para1">We’re a skilled team of young professionals with valuable experience. Our
                        <br></br>energy and productivity fuWe’re a skilled team of young professionals with
                        <br></br>valuable experience. Our energy and productivity fuel our team’s success.</p>
                </div>
            </div>
            <div className="our-team-section">
                <div className="teamSection">
                    <img src={kahna} alt="Team Member 1" className="our-cardImage" />
                    <div className="cardContent">
                        <h3 className="cardName">Kanhaiya Meena</h3>
                        <p className="cardPosition">Director
                        </p>
                        <a href="https://www.linkedin.com/in/kanhaiya-meena-537a7521b/">
                            <FaLinkedin size={22} />
                        </a>
                        <a href="https://www.instagram.com/kanha_meena04/?igsh=ajFpcWpteDN6MmZl">
                            <FaInstagramSquare  size={22} />
                        </a>
                    </div>
                </div>
                <div className="teamSection">
                    <img src={hr} alt="Team Member 2" className="our-cardImage" />
                    <div className="cardContent">
                        <h3 className="cardName">Srashti Sharma</h3>
                        <p className="cardPosition">Sr. HR Manager</p>
                        <a href="https://www.linkedin.com/in/srishti-sharma-930116212/">
                            <FaLinkedin size={22} />
                        </a>
                        <a href="https://www.instagram.com/rishus_infotech/">
                            <FaInstagramSquare  size={22}/>
                        </a>
                    </div>
                </div>
                <div className="teamSection">
                    <img src={pratyaksh} alt="Team Member 3" className="our-cardImage" />
                    <div className="cardContent">
                        <h3 className="cardName">
                            Pratyaksh Lutare</h3>
                        <p className="cardPosition">UI / UX Designer</p>
                        <a href="https://www.linkedin.com/in/pratyaksh-lutare-3620a2235/">
                            <FaLinkedin size={22} />
                        </a>
                        <a href="https://www.instagram.com/rishus_infotech/">
                            <FaInstagramSquare size={22} />
                        </a>
                    </div>
                </div>
                <div className="teamSection">
                    <img src={rohit} alt="Team Member 4" className="our-cardImage" />
                    <div className="cardContent">
                        <h3 className="cardName">Rohit Jat</h3>
                        <p className="cardPosition">Frontend Developer</p>
                        <a href="https://www.linkedin.com/in/rohit-jat-96739a222/">
                            <FaLinkedin size={22}/>
                        </a>
                        <a href="https://www.instagram.com/rishus_infotech/">
                            <FaInstagramSquare size={22} />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OurTeam