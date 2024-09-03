import React from 'react'
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <div>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-row1">
                        <h3><span class="orange-text">R</span>ishus <span class="orange-text">I</span>nfotech</h3>
                        <p className="para2">
                            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: "#e87426", }} /> 104- samiksha Landmark Near Rajiv
                            <br></br> Gandhi Square, rau bypass road Indore
                        </p>
                        <p className="para2">
                            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#e87426", }} /> rishusinfotech4@gmail.com
                        </p>
                        <p className="para2">
                            <FontAwesomeIcon icon={faPhone} style={{ color: "#e87426", }} /> 91+ 8959409296
                        </p>
                    </div>
                    <div className="footer-row">
                        <h3>Other Pages</h3>
                        <ul class="orange-text">
                            <li><a href="http://localhost:3000/">Home</a></li>
                            <li><a href="http://localhost:3000/about">About Us</a></li>
                            <li><a href="http://localhost:3000/services">Services</a></li>
                            <li><a href="http://localhost:3000/projects">Projects</a></li>
                            <li><a href="http://localhost:3000/contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-row">
                        <h3>Quick Links</h3>
                        <ul class="orange-text">
                            <li><a href="http://localhost:3000/privacy">Privacy Policy</a></li>
                            <li><a href="http://localhost:3000/terms">Term Of Service</a></li>
                        </ul>
                    </div>
                    <div className="footer-row">
                        <h3>Newsletter</h3>
                        <form>
                            <input type="email" placeholder="Your Email Address" class="input-placeholder" />
                            <button type="submit" class="button-style">Subscribe</button>
                        </form>
                        <p className="para1">Get the latest news & updates</p>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/company/rishus-infotech/mycompany/" aria-label="LinkedIn">
                                <FontAwesomeIcon icon={faLinkedin} style={{ color: "#e87426", }} />
                            </a>
                            <a href="https://www.instagram.com/rishus_infotech/" aria-label="Instagram">
                                <FontAwesomeIcon icon={faInstagram} style={{ color: "#e87426", }} />
                            </a>
                            <a href="https://www.linkedin.com/company/rishus-infotech/mycompany/" aria-label="Twitter">
                                <FontAwesomeIcon icon={faTwitter} style={{ color: "#e87426", }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="leftPara">
                        <p className="para3">Design by Rishus Infotech Pvt Ltd.</p>
                    </div>
                    <div className="rightPara">
                        <p className="para4">Copyright © 2024 All rights reserved.</p>
                    </div>
                </div>

            </footer></div>
    )
}

export default Footer