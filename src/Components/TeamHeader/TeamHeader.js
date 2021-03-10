import React from 'react';
import "./TeamHeader.css"



const TeamHeader = ({ banner, logo }) => {

    const teamDynamicBanner = {
        backgroundImage: `url(${banner})`
    };
    const teamLocalBanner = {
        backgroundImage: 'url(https://i.ibb.co/9gtsCTW/header-banner.jpg)'
    };

    return (
        <header style={banner ? teamDynamicBanner : teamLocalBanner} className="team-header">
            <div className="team-badge">
                <img src={logo} alt={logo} />
            </div>
        </header>
    );
};

export default TeamHeader;