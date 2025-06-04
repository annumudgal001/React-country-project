import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="container">
            <div className="grid navbar-grid">
                <div className="logo">
                    <NavLink to="/">
                        <h1>WorldAtlas</h1>
                    </NavLink>
                </div>
                <nav className="menu-web">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/country">Country</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
                <div className="ham-menu" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>
                {isMobileMenuOpen && (
                    <nav className="menu-mobile">
                        <ul>
                            <li><NavLink to="/" onClick={toggleMobileMenu}>Home</NavLink></li>
                            <li><NavLink to="/about" onClick={toggleMobileMenu}>About</NavLink></li>
                            <li><NavLink to="/country" onClick={toggleMobileMenu}>Country</NavLink></li>
                            <li><NavLink to="/contact" onClick={toggleMobileMenu}>Contact</NavLink></li>
                        </ul>
                    </nav>
                )}
            </div>
        </div>
    );
};