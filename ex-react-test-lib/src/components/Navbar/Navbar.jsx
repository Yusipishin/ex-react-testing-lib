import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <Link to="/" data-testid="main-link">MAIN</Link>
            <Link to="/about" data-testid="about-link">ABOUT</Link>
            <Link to="/users" data-testid="users-link">USERS</Link>
        </>
    );
};

export default Navbar;