import React from 'react';
import { Link } from "react-router-dom"
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h4>About Us</h4>
                    <p>
                        We are committed to providing the best services and experiences for our customers. Our mission is to make every moment memorable.
                    </p>
                </div>
                <div className="footer-column">
                    <h4>Contact Info</h4>
                    <p><strong>Email:</strong> sachin@example.com</p>
                    <p><strong>Phone:</strong> +123 456 7890</p>
                    <p><strong>Location:</strong> 123 Main Street, Indore, India</p>
                </div>
                <div className="footer-column">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/reservation">Reservation</Link></li>
                        <li><Link to="/categories">Categories</Link></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            <FaFacebookSquare />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <FaSquareXTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <FaSquareInstagram />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Your Company. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
