import React, { useState } from 'react';
import './LogoGrid.css';

import logo1 from "../image/GHAVI-SPORTS-1536x1536.png";
import logo2 from "../image/PE-logo-black-1536x1536.png";
import logo3 from "../image/Untitled-design-1-1536x1536.png";
import logo4 from "../image/JHVKJN-1536x1536.png";
import logo5 from "../image/Shree-ram-1536x1536.png";
import logo6 from "../image/RTT-1536x1536.png";

const logos = [
    { id: 1, src: logo1, title: "GHAVRI SPORTS FOUNDATION", description: "WEB DESIGNING AND SEO, MARKETING" },
    { id: 2, src: logo2, title: "PRASHIL EXPORTS", description: "WEB DESIGNING AND APPLICATION DEVELOPMENT" },
    { id: 3, src: logo3, title: "TIMES NOW INDIA 24*7", description: "WEB DESIGNING AND APPLICATION DEVELOPMENT" },
    { id: 4, src: logo4, title: "MAA NARMADA MILK PRODUCTION", description: "WEB DESIGNING" },
    { id: 5, src: logo5, title: "SHREE RAM AGRO PRODUCTS", description: "WEB DESIGNING" },
    { id: 6, src: logo6, title: "RTT E-COMMERCE", description: "WEB DESIGNING" },
];

const LogoGrid = () => {
    const [activeLogo, setActiveLogo] = useState(null);

    const handleLogoClick = (logo) => {
        setActiveLogo(logo);
    };

    return (
        <div className="logo-container">
            <div className="logo-grid">
                {logos.map((logo) => (
                    <div
                        key={logo.id}
                        className={`logo-item ${activeLogo?.id === logo.id ? 'active' : ''}`}
                        onClick={() => handleLogoClick(logo)}
                    >
                        <img src={logo.src} alt={logo.title} />
                        {activeLogo?.id === logo.id && (
                            <div className="logo-details-overlay">
                                <h2>{logo.title}</h2>
                                <p>{logo.description}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoGrid;
