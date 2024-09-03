import React from 'react'
import "./AboutSocial.css";
import myhome2 from "../image/myhome2.png";
import { IoMdCheckmark } from "react-icons/io";

function AboutSocial() {
    return (
        <div>
            <div className="Home2">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "50px 0",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "50%",
                            position: "relative",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                borderRadius: "50%",
                                width: "80%",
                                height: "100%",
                                backgroundColor: "#FFC29A",
                                zIndex: -1,
                            }}
                        ></div>


                        <img
                            className="homepic"
                            src={myhome2}
                            alt="Profile"
                        />
                    </div>

                    <div className="right-content" style={{ width: "50%" }}>
                        <div className="button-container">
                            <span className="button-text">ABOUT EXPERIENCE</span>
                        </div>
                        <h2>
                            3 Years Of Experience In IT <br /> & Digital Marketing
                        </h2>
                        <p className="para1">
                            With three years of IT and digital marketing experience, Rishus Infotech
                            offers effective solutions to boost your business.
                        </p>
                        <div>
                            <div className="container">
                                <div className="icon2">
                                    <IoMdCheckmark />
                                </div>
                                <div className="text-content">
                                    <h3 className="h3">Optimization Engine Rank</h3>
                                    <p className="para1">Specializes in optimizing search engine rankings, ensuring your business.</p>
                                </div>
                            </div>
                            <br />
                            <div className="container1">
                                <div className="icon3">
                                    <IoMdCheckmark />
                                </div>
                                <div className="text-content">
                                    <h3 className="h3">Listen & Engage with Followers</h3>
                                    <p className="para1">We listen and engage with followers, building strong relationships and enhancing brand loyalty.</p>
                                </div>
                            </div>
                            <br />
                            <div className="container">
                                <div className="icon2">
                                    <IoMdCheckmark />
                                </div>
                                <div className="text-content">
                                    <h3 className="h3">Higher Customer Satisfaction</h3>
                                    <p className="para1">We prioritize customer satisfaction by providing excellent service and personalized solutions that precisely meet their needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSocial