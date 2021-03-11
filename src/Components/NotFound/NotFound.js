import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content text-center">
                <h1>404</h1>
                <h3>Not Found</h3>
                <p>The resource requested could not be found on this server!</p>
            </div>
        </div>
    );
};

export default NotFound;