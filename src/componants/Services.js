import React from 'react';
import "./Services.css";
import service from "../image/service.jpg";
import service2 from "../image/service2.png";
import service3 from "../image/service3.png";
import service4 from "../image/service4.png";
import service5 from "../image/service5.png";
import service6 from "../image/service6.png";
import service7 from "../image/app.png";
import service8 from "../image/game.png";
import service9 from "../image/graphic-designer.png";
import service10 from "../image/adwords.png";
import service11 from "../image/google.png";
import service12 from "../image/content-writing.png";
import OurSolution from './OurSolution';
import FAQService from './FAQService';




function Services() {
    return (
        <>
            <div className="backgroundService">
                <h1>Our Services</h1>
                <p className="backgroundPara">
                    Home <span className="arrow"> &gt;</span> Services
                </p>
            </div>
            <div className="services">
                <div className="center">
                    <div className="service-button">
                        <span className="button-text">Our Services</span>
                    </div>
                    <div>
                        <h2>We Provide The Best Service For You</h2>
                    </div>
                    <div>
                        <p className="para1">
                            We’re experts in creating custom apps and digital marketing strategies that
                            <br /> make your business shine online and reach its objectives.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="card-section1">
                        <div className="cardImage">
                            <img src={service} alt="Service 1" />
                        </div>
                        <div className="card">
                            <img src={service2} alt="Service 2" />
                            <h3>Website & App <br />Development</h3>
                            <p className="para1">
                                We provide expert website & app
                                <br /> development services customized to
                                <br /> meet your specific needs and goals
                            </p>
                        </div>
                        <div className="card">
                            <img src={service3} alt="Service 3" />
                            <h3>Software Development</h3>
                            <p className="para1">
                                Crafting customized software to
                                <br /> streamline your operations.
                                <br /> Let's bring your ideas to life with our
                                <br /> expertise in software development.
                            </p>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="card-section2">
                        <div className="card">
                            <img src={service4} alt="Service 4" />
                            <h3>SEO</h3>
                            <p className="para1">
                                Improve your online visibility with
                                <br /> effective SEO strategies. Let's get your
                                <br /> website ranking higher and attracting
                                <br /> more visitors.
                            </p>
                        </div>
                        <div className="card">
                            <img src={service5} alt="Service 5" />
                            <h3>Digital Marketing</h3>
                            <p className="para1">
                                Boost your online presence with
                                <br /> strategic digital marketing. Let's drive
                                <br /> growth and engagement together.
                            </p>
                        </div>
                        <div className="card">
                            <img src={service6} alt="Service 6" />
                            <h3>Training and Placement</h3>
                            <p className="para1">
                                Unlock your potential with our training
                                <br /> programs. Let's help you find the perfect
                                <br /> placement to kickstart your career.
                            </p>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="card-section1">
                        <div className="card">
                            <img src={service7} alt="Service 7" />
                            <h3>App Development</h3>
                            <p className="para1">
                                Transforming your ideas into functional
                                <br /> apps. Let's bring your vision to life with
                                <br /> our expertise in app development.
                            </p>
                        </div>
                        <div className="card">
                            <img src={service8} alt="Service 8" />
                            <h3>Game Development</h3>
                            <p className="para1">
                                Bringing your gaming ideas to life.
                                <br /> Let's create an immersive experience
                                <br /> together.
                            </p>
                        </div>
                        <div className="card">
                            <img src={service9} alt="Service 9" />
                            <h3>Graphic Designing</h3>
                            <p className="para1">
                                From logos to banners, we've got your
                                <br /> graphic design needs covered. Let's
                                <br /> bring your vision to life with stunning
                                <br /> visuals.
                            </p>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="card-section2">
                        <div className="card">
                            <img src={service10} alt="Service 10" />
                            <h3>ADS Marketing</h3>
                            <p className="para1">
                                Boost your brand's visibility with
                                <br /> targeted ads. Let's drive results with
                                <br /> strategic marketing campaigns.
                            </p>
                        </div>
                        <div className="card">
                            <img src={service11} alt="Service 11" />
                            <h3>Google My Business</h3>
                            <p className="para1">
                                Optimize your presence on Google
                                <br /> with ease. Let's ensure your
                                <br /> business shines in local searches.
                            </p>
                        </div>
                        <div className="card">
                            <img src={service12} alt="Service 12" />
                            <h3>Content Writing</h3>
                            <p className="para1">
                                Engage your audience with captivating
                                <br /> content. Let's tell your story with words
                                <br /> that resonate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <OurSolution />
            <FAQService />



        </>
    );
}

export default Services;
