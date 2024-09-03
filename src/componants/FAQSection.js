import React, { useState } from 'react';
import './FAQSection.css';
import untitleimage from '../image/Untitleimage.png';

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What services do you offer in the digital marketing category?",
            answer: "We provide diverse digital marketing services like web development, Facebook Ads, Google Ads, logo and graphics design, social media management, and more."
        },
        {
            question: "Which is the top 10 IT company?",
            answer: `As of my last update, the top 10 IT companies globally often include giants like:
            
            1. Microsoft
            2. Apple Inc.
            3. Alphabet Inc. (Google)
            4. Amazon
            5. Facebook (now Meta Platforms)
            6. IBM
            7. Oracle Corporation
            8. Cisco Systems
            9. Intel Corporation
            10. SAP SE

            Keep in mind that rankings can fluctuate based on various factors like market capitalization, revenue, and innovation.`
        },
        {
            question: "What are the top 10 types of digital marketing?",
            answer: `Here are the ten types of digital marketing we'll be talking about today:
            
            1. Content marketing
            2. Search engine optimization (SEO)
            3. Email marketing
            4. Social media marketing
            5. Mobile marketing
            6. Pay-per-click
            7. Affiliate marketing
            8. ADS
            9. Website Migration
            10. Portfolio`
        },
        {
            question: "What is the best front-end technology?",
            answer: `1. React.js: Open-source JavaScript library for dynamic applications and UI/UX enhancement.
            2. Angular.js: Google's framework for robust web applications.
            3. Vue.js: Simple and flexible JavaScript framework for modern UIs.
            4. Flutter: Google's UI toolkit for mobile, web, and desktop apps.
            5. Bootstrap: Popular framework for responsive and visually appealing websites.
            6. Ionic: Cross-platform framework for mobile app development.
            7. HTML5 Boilerplate: Starting template for web projects with optimized performance.
            8. npm: JavaScript package manager for code sharing and productivity.`
        }
    ];

    return (
        <div className="background">
            <div className="content">
                <div className="faq-section">
                    <div className="button-text">FAQ</div>
                    <div className="faq-title">Frequently asked<br />Questions</div>

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
                <div className="image">
                    <img className="back" src={untitleimage} alt="Profile" />
                </div>
            </div>
        </div>
    );
};

export default FAQSection;
