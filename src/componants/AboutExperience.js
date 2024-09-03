import React from 'react'
import "./AboutExperience.css";
import myhome2 from "../image/myhome2.png";
import { IoMdCheckmark } from "react-icons/io";

function AboutExperience() {
    return (
        <div>
          <div className="Home2">
    <div
        style={{
            display: "flex",
            flexDirection: "row", /* Ensure items are in a row by default */
            justifyContent: "space-between",
            alignItems: "center",
            padding: "50px 0",
            flexWrap: "wrap", /* Allow items to wrap to the next row */
        }}
    >
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%", /* Full width by default */
                maxWidth: "50%", /* Limit maximum width for larger screens */
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

        <div className="right-content" style={{ width: "100%", maxWidth: "50%" }}>
            <div className="button-container">
                <span className="button-text">ABOUT EXPERIENCE</span>
            </div>
            <h2>
                3 Years Of Experience In IT <br /> & Digital Marketing
            </h2>
            <p className="para1">
                With three years of IT and digital marketing experience, Rishus Infotech
                <br />
                offers effective solutions to boost your business.
            </p>
            <div>
                <div className="container">
                    <div className="icon2">
                        <IoMdCheckmark />
                    </div>
                    <div className="text-content">
                        <h3 className="h3">Optimization Engine Rank</h3>
                        <p className="para1">Specializes in optimizing search engine rankings, ensuring
                            <br /> your business.
                        </p>
                    </div>
                </div>
                <br />
                <div className="container1">
                    <div className="icon3">
                        <IoMdCheckmark />
                    </div>
                    <div className="text-content">
                        <h3 className="h3">Listen & Engage with Followers</h3>
                        <p className="para1">We listen and engage with followers, building strong
                            relationships and enhancing brand loyalty.
                        </p>
                    </div>
                </div>
                <br />
                <div className="container">
                    <div className="icon2">
                        <IoMdCheckmark />
                    </div>
                    <div className="text-content">
                        <h3 className="h3">Higher Customer Satisfaction</h3>
                        <p className="para1">We prioritize customer satisfaction by providing excellent
                            <br /> service and personalized solutions that precisely meet their<br /> needs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        </div>
    )
}

export default AboutExperience