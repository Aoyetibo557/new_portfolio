import React from 'react';
import './Footer.css';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer">
            <div className="icon__container">
                <a title="LinkedIn" className="footer__link" rel="noreferrer" href="https://www.linkedin.com/in/anuoluwapo-oyetibo" target="_blank"> <FaLinkedin /> </a>
                <a title="Twitter" className="footer__link" rel="noreferrer" href="https://www.twitter.com/gabeoyetibo557" target="_blank"> <FaTwitter /> </a>
                <a title="Instagram" className="footer__link" rel="noreferrer" href="https://www.instagram.com/gahbby_557" target="_blank"> <FaInstagram /> </a>

            </div>
            <div>
                <p>Developed by O.A.G_Studios &copy; 2021</p>
            </div>
        </div>
    )
}

export default Footer
