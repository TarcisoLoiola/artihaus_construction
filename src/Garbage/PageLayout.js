// src/components/Navbar.js
import React from 'react';

const PageLayout = ({ children }) => {
    return (
        <div className="app_layout" /* root/Index.css */>
            {children}
        </div>
    );
}

export default PageLayout;
