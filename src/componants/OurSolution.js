import React from 'react'
import "./OurSolution.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faPeopleArrows, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

function OurSolution() {
    return (
        <div className='processService'>
            <div className="center1">
                <div className="service-button1">
                    <span className="button-text">Our Process</span>
                </div>
                <h2 className='headProcess'>Easy Steps To Get Your Solution</h2>
                <p className="para1">
                    Just three simple steps to unlock your solution hassle-free. Let’s make it easy
                    <br /> for you to get started!
                </p>

                <div className="steps-container">
                    <div className="step">
                        <div className='iconUpper'>
                            <div className="iconBack">
                                <FontAwesomeIcon icon={faBook} className="step-icon" />
                            </div>
                        </div>
                        <h4>Book A Service</h4>
                        <p>
                            Ready to get started? Schedule your service
                            <br /> with us today.
                        </p>
                    </div>

                    <div className="step">
                        <div className='iconUpper'>
                            <div className="iconBack">
                                <FontAwesomeIcon icon={faPeopleArrows} className="step-icon" />
                            </div>
                        </div>
                        <h4>Start Consultation</h4>
                        <p>
                            Ready to talk? Start your consultation with
                            <br /> us now and let’s find the perfect solution for
                            <br /> you.
                        </p>
                    </div>

                    <div className="step">
                        <div className='iconUpper'>
                            <div className='iconBack'>
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="step-icon" />
                            </div>
                        </div>
                        <h4>Check Your Growth</h4>
                        <p>
                            Keep track of your growth effortlessly. Let’s
                            <br /> measure your progress together.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurSolution