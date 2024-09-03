import React from 'react'
import "./Achievement.css";
import { SiTicktick } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";
import { FaHandshakeSimple } from "react-icons/fa6";

function Achievement() {
    return (
        <div>
            <div className="section">
                <div className="leftAchievement">
                    <div className="button-container">
                        <span className="button-text">Achievement</span>
                    </div>
                    <h2>
                        Some Number Of Our
                        <br />
                        Achievement
                    </h2>
                    <p className="para2">
                        We take pride in our achievements, including a high number of
                        satisfied clients, successful campaigns,
                        and partnerships with
                        renowned brands. These accomplishments reflect our
                        commitment to delivering exceptional results and building strong
                        relationships.
                    </p>
                    <a href='http://localhost:3000/services'>
                    <button className="allProject">Read more</button>
                    </a>
                </div>


                <div className="right" style={{ position: 'relative', width: '100%', height: '100%' }}>
                    {/* Circle Container */}
                    <div
                        style={{
                            position: 'absolute',
                            right: '40%',
                            width: '220px',
                            height: '220px',
                            border: '1px dashed black',
                            borderRadius: '50%',
                        }}
                    >
                    </div>
                    <div
                        style={{
                            position: 'absolute',
                            top: '140px',
                            left: '90px',
                            width: '160px',
                            height: '130px',
                            backgroundColor: '#EEEDFE',
                            borderRadius: '5%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            marginLeft:'30px',
                            
                        }}
                    >
                        <FaHandshakeSimple
                            style={{
                                fontSize: '40px',
                                color: '#333',
                                marginBottom: '10px',
                            }}
                        />
                    
                        <h6
                            style={{
                                margin: '0',
                                fontSize: '16px',

                                color: '#333',
                            }}
                        >
                            180 +
                        </h6>

                     
                        <p
                            style={{
                                margin: '5px 0 0',
                                fontSize: '12px',
                                color: '#666',
                            }}
                        >
                            Brands Joined
                        </p>
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            top: '140px',
                            right: '60px',
                            width: '160px',
                            height: '130px',
                            backgroundColor: '#FFE0CC',
                            borderRadius: '5%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            marginRight: '130px',
                        }}
                    >
                        <IoIosPeople
                            style={{
                                fontSize: '40px',
                                color: '#333',
                                marginBottom: '10px',
                            }}
                        />

                        <h6
                            style={{
                                margin: '0',
                                fontSize: '16px',

                                color: '#333',
                            }}
                        >
                            30 +
                        </h6>


                        <p
                            style={{
                                margin: '5px 0 0',
                                fontSize: '12px',
                                color: '#666',
                            }}
                        >
                            Marketing Experts
                        </p>
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            bottom: '-110px',
                            left: '90px',
                            width: '160px',
                            height: '130px',
                            backgroundColor: '#FFE0CC',
                            borderRadius: '5%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            marginLeft:'30px',

                        }}
                    >
                        <IoIosPeople
                            style={{
                                fontSize: '40px',
                                color: '#333',
                                marginBottom: '10px',
                            }}
                        />

                        <h6
                            style={{
                                margin: '0',
                                fontSize: '16px',

                                color: '#333',
                            }}
                        >
                            557 +
                        </h6>

                        <p
                            style={{
                                margin: '5px 0 0',
                                fontSize: '12px',
                                color: '#666',
                            }}
                        >
                            Satisfied Clients
                        </p>
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            bottom: '-110px',
                            right: '60px',
                            width: '160px',
                            height: '130px',
                            backgroundColor: '#EEEDFE',
                            borderRadius: '5%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            marginRight: '130px',
                        }}
                    >
                        <SiTicktick
                            style={{
                                fontSize: '40px',
                                color: '#333',
                                marginBottom: '10px',
                            }}
                        />

                        <h6
                            style={{
                                margin: '0',
                                fontSize: '16px',
                                color: '#333',
                            }}
                        >
                            383 +
                        </h6>

                        <p
                            style={{
                                margin: '5px 0 0',
                                fontSize: '12px',
                                color: '#666',
                            }}
                        >
                            Successful Campaigns
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achievement