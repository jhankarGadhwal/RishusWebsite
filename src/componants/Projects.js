import React from 'react'
import './Projects.css';
import Achievement from "./Achievement";
import Clients from "./OurClients";
import LogoGrid from './LogoGrid';


function Projects() {
    return (
        <div>
            <div className="backgroundService">
                <h1>Our Projects</h1>
                <p className="backgroundPara">
                    Home <span className="arrow"> &gt;</span> Projects
                </p>
            </div>
            <div className="services">
                <div className="center">
                    <div className="service-button">
                        <span className="button-text">Our Projects</span>
                    </div>
                    <div>
                        <h2>Project We Have Done</h2>
                    </div>
                    <div>
                        <p className="para1">
                            We know how to make special apps and online marketing plans that really
                            <br></br>show off your business and help it achieve its goals.
                        </p>
                    </div>
                </div>
            </div>
            <LogoGrid />
            <br></br>
            <br></br>
            <div className="backgroundProject1">
                <h1 className='myBack'>Need Advice For Your Social Media Marketing?</h1>
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
            <br></br>
            <br></br>
            <br></br>
            <Achievement />
            <Clients />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

export default Projects