import React, { useState } from 'react';
import './FAQService.css';

const FAQService = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What technology is used for web development?",
            answer: "We utilize a variety of technologies and platforms for web development, including HTML, CSS, JavaScript, and popular frameworks like React and Angular. Our approach is tailored to meet the specific needs of each project, ensuring optimal performance and user experience."
        },
        {
            question: "How is social media marketing effective in business?",
            answer: "Social media marketing is effective in business because it allows companies to reach a large audience, engage with customers directly, build brand awareness, drive website traffic, and increase sales and leads through targeted advertising and engaging content."

        },
        {
            question: "What services does your IT company offer?",
            answer: "We offer a wide range of services including web development, software development, digital marketing, graphic design, and IT consulting."

        },
        {
            question: "Do you provide ongoing support after project completion?",
            answer: "Yes, we offer ongoing support and maintenance to ensure that your systems and solutions continue to perform optimally. Our dedicated support team is always available to assist you with any issues or updates.."

        },


    ];

    return (
        <div className="backgroundMyService">
            <div className="leftService1">
                <div className="faq-section1">
                    <h1 className="button-text">FAQ</h1>
                    <h1 className="headProcess1">General Questions</h1>
                    <p className="para2">
                        Do you have a question? Don’t hesitate to reach out to us. Our team is
                        <br /> here to assist you every step of the way.
                    </p>

                    {faqs.map((faq, index) => (
                        <div className="faq" key={index}>
                            <div
                                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => handleToggle(index)}
                            >
                                {faq.question}
                                <span className={`arrow ${activeIndex === index ? 'up' : 'down'}`}>&#x25BC;</span>
                            </div>
                            <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="rightService">
                    <h4>Don't See The Answer You Need? Contact us</h4>
                    <p className="para2">
                        If you don’t see the answer you<br />need, don’t hesitate to contact us.
                    </p>
                    <a href="http://localhost:3000/contact">
                        <button type="button" className="button-style">Contact Us</button>
                    </a>

                </div>
            </div>
        </div>
    );
};

export default FAQService;
