import React from 'react'
import "./OurClients.css";
import bytbillion from "../image/Bytbillion.png";
import sdm from "../image/SDM.png";
import emrald from "../image/EMRALD.png";
import sandhav from "../image/SENDHAV.png";
import water from "../image/WATER.png";
import ghaviSports from "../image/GHAVISPORTS.png";
import shreeRam from "../image/Shree-ram.png";
import untitled from "../image/Untitled-design.png";
import peLogo from "../image/PE-logo-black.png";

function OurClients() {
    return (
        <div>
            <div className=" client">
                <div className="center">
                    <div className="service-button">
                        <span className="button-text">Meet Our Clients</span>
                    </div>
                </div>
                <div className="clientsection1">
                    <img src={bytbillion} />
                    <img src={sdm} />
                    <img src={water} />
                    <img src={sandhav} />
                </div>
                <div className="clientsection2">
                    <img src={ghaviSports} />
                    <img src={shreeRam} />
                    <img src={peLogo} />
                    <img src={untitled} />
                </div>
            </div>

        </div>
    )
}

export default OurClients