import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid text-center identity">
                <a href="https://github.com/suraj-singh12/" target="_blank" rel="noreferrer">suraj-singh12 (Suraj Singh)</a>
            </div>
            <hr />
            <div className="container-fluid footer">
                <div className="row footer-cols">
                    <div className="col text-center">
                        <p>Contact Us</p>
                        <p>About Us</p>
                    </div>
                    <div className="col text-center">
                        <p>Contact Us</p>
                        <p>About Us</p>
                    </div>
                    <div className="col text-center">
                        <p>Contact Us</p>
                        <p>About Us</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;