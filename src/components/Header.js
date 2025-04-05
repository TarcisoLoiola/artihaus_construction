import React from "react";

const Header = ({ styleType, children }) => {
    // Dynamically apply a class based on the styleType prop
    // const headerClass = styleType === 'navMenu' ? navMenu : homePage;

    return (
        <header style={defaultStyle}>
            {children}
        </header>
    )
}; export default Header
const defaultStyle = {
    // marginTop: '90px',
}
