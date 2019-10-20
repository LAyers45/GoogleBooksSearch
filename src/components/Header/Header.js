import React from 'react';
import "./Header.css";

function Header(props) {
    return (
        <div className="jumbotron">
            <h1 className="display-4">(React) Google Books Search</h1>
            <p className="lead">Search for and save blooks of interest.</p>
        </div>
    )
}

export default Header;