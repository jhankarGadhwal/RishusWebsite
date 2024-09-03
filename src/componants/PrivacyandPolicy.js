import React from 'react';
import './PrivacyandPolicy.css';

function PrivacyandPolicy() {
    return (
        <div>
            {/* Privacy and Policy Section */}
            <div className="backgroundService1">
                <div className="left-box">
                    <h1 className="heading">Privacy and Policy</h1>
                    <p className="MybackgroundPara">
                        RishusInfotech respects your privacy and is committed to protecting your personal information. This
                        <br />Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit
                        <br />our website. Please read this Privacy Policy carefully. By accessing or using our website, you agree
                        <br />to be bound by the terms and conditions described in this Privacy Policy.
                    </p>
                </div>
                <div className="right-box">
                    <a href="http://localhost:3000/about">
                        <button type="button" className="button-style">About Us</button>
                    </a>
                </div>
            </div>
            <div className='privacyHeading'>
                <h2>1. Information We Collect:</h2>
                <p className='para1'> 1.1. Personal Information:
                    When you visit our website, we may collect certain personal information from you, such as your name, email address, phone number, and any other
                    <br></br>information you voluntarily provide to us.</p>
                <p className='para1'> 1.2. Non-Personal Information:
                    We may also collect non-personal information about your visit to our website, such as the type of browser you use, your IP address, the pages you visit,
                    <br></br>the links you click, and other actions you take while using our websit</p>

                <h2>2. We may use the information we collect from you to:</h2>
                <p className='para1'>2.1. Provide, operate, and maintain our website;</p>
                <p className='para1' >2.2. Improve, personalize, and expand our website;</p>
                <p className='para1'> 2.3. Communicate with you, either directly or through one of our partners,</p>
                <p className='para1'>2.4. including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes;</p>
                <p className='para1'>2.5.   Send you emails, newsletters, and other communications that you have opted-in to receive;</p>
                <p className='para1'>2.6.   Respond to your comments, questions, and requests;</p>
                <p className='para1'>2.7.  Protect, investigate, and deter against unauthorized or illegal activity.</p>

                <h2>3.How We Share Your Information:</h2>
                <p className='para1'>3.1. We may share your information with third parties who perform services on our behalf, such as website hosting, data analysis, email delivery, and other similar services.</p>
                <p className='para1'> 3.2. We may also share your information with third-party advertisers, analytics providers, and other third parties for marketing, advertising, or other purposes.</p>
                <p className='para1'> 3.3. We may disclose your information if required to do so by law or in response to a subpoena, court order, or other legal request.</p>

                <h2>4.Data Security:</h2>
                <p className='para1'>4.1. We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, we cannot guarantee that unauthorized third parties will never be able to defeat those measures or use your personal information for improper purposes.es.</p>

                <h2>5.Your Choices:</h2>
                <p className='para1'>   5.1. You can choose not to provide us with certain information, but that may result in you being unable to use certain features of our website.</p>
                <p className='para1'>   5.2. You can opt-out of receiving promotional emails from us by following the unsubscribe instructions provided in those emails.</p>

                <h2>6.Changes to This Privacy Policy:</h2>
                <p className='para1'>  6.1. We may update this Privacy Policy from time to time in our sole discretion. We encourage you to review this Privacy Policy periodically for any changes. Your continued use of our website after any changes to this Privacy Policy will constitute your acceptance of those changes.</p>

                <h2>7.Contact Us:</h2>
                <p className='para1'> 7.1. If you have any questions about this Privacy Policy, please contact us at [contact@email.com].
                    This Privacy Policy was last updated on [11/02/2024]</p>
            </div>
            <br></br>
            <br></br>
            <br></br>
        </div >
    );
}

export default PrivacyandPolicy;

