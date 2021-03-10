import React from 'react';
import "./TeamHeader.css"

const TeamHeader = (props) => {
    const logo = props.logo
    return (
        <header className="team-header">
            <div className="team-badge">
                <img src={logo} alt={logo} />
            </div>
        </header>
    );
};

export default TeamHeader;