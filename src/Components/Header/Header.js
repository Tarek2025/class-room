import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1 className="text-center">Welcome to <span className="school">tech</span>haven</h1>
            <h2 className="text-center">An online tech education platform,like Coursera.</h2>
        </div>
    );
};

export default Header;