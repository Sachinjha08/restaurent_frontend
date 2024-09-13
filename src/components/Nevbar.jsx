import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LuMenuSquare } from "react-icons/lu";
import { MdCancel } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const logo = "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurants-logo-design-template-eb1f6d0e8eb2cf27acf51800b738626d_screen.jpg?ts=1695699117"
const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => {
        setIsMobile(!isMobile);
    };

    return (
        <nav className="navbar">
            <img src={logo} alt={"Logo"} />
            <h2 className='logo'>Reataurent Delicious Food</h2>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
                <Link to="/" className="home"><li>Home</li></Link>
                <Link to="/about" className="about"><li>About</li></Link>
                <Link to="/categories" className="categories"><li>Categories</li></Link>
                <Link to="/review" className="team"><li>Reviews</li></Link>
                <Link to="/reservation" className="reservation"><li>Reservation</li></Link>
                <Link to="/search" className="search"><li><FaSearch /></li></Link>

            </ul>
            <button className="mobile-menu-icon" onClick={toggleMenu}>
                {isMobile ? <i className="fas fa-times"><MdCancel /></i> : <i className="fas fa-bars"><LuMenuSquare /></i>}
            </button>
        </nav>
    );
};

export default Navbar;
