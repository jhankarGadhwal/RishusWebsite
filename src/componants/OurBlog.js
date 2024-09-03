import React from 'react'
import "./OurBlog.css";
import digital from "../image/digital-marketing.jpg";
import woman from "../image/women-holding.jpg";
import website from "../image/Website-Loading.png";

function OurBlog() {
  return (
    <div>
        <div className="blogs">
        <div className="center">
          <div className="service-button">
            <span className="button-text">Our Blog</span>
          </div>
          <h3>Latest Blog & Articles</h3>
          <p className="para1">Check out our latest blog and articles for insightful updates and informative
            <br></br> content. Stay informed with our latest industry news, trends, and tips.</p>
        </div>

        <div className="blog-section">
          <div className="blogCard">
            <img src={digital} alt="Image 1" className="blogimage" />
            <div className="card-content">
              <h3 className="card-heading1">Digital Marketing Analytics Tools and Techniques for 2024</h3>
              <p className="card-date">March 7, 2024</p>
              <p className="para1">Digital Marketing Analytics: Tools and Techniques for 2024 cybernikhil2023 March 7, 2024 Social Media In today's digital age, every....</p>
            </div>
          </div>
          <div className="blogCard">
            <img src={woman} alt="Image 2" className="blogimage" />
            <div className="card-content">
              <h3 className="card-heading1">How to Get More Recruiter Views on linkedin2</h3>
              <p className="card-date">March 7, 2024</p>
              <p className="para1">How to Get More Recruiter Views on linkedin cybernikhil2023 March 7, 2024 Marketing,Social Media In today's competitive job market,...</p>
            </div>
          </div>
          <div className="blogCard">
            <img src={website} alt="Image 3" className="blogimage" />
            <div className="card-content">
              <h3 className="card-heading1">How can optimize website’s loading speed for better SEO</h3>
              <p className="card-date">February 26, 2024</p>
              <p className="para1">How can optimize website’s loading speed for better SEO cybernikhil2023 February 26, 2024 Blog,Marketing,Social Media In the digital landscape,...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurBlog