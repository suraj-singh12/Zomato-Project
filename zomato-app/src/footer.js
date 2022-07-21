import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container-fluid text-center">
                <div className="footer-heading">
                    <h2>Connect With Me</h2>
                </div>
                <div className="footer-socials" style={{ fontSize: '1rem', textAlign: 'center', padding: '1%' }}>
                    <a href="https://github.com/suraj-singh12" target="_blank" rel="noreferrer">
                        <i className="bi bi-github" style={{color: 'black'}}></i>
                    </a>

                    <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <i className="bi bi-linkedin" style={{ color: 'blue' }}></i>
                    </a>
                    <a href="https://twitter.com/suraj_singh_12" target="_blank" rel="noreferrer">
                        <i className="bi bi-twitter" style={{ color: 'lightblue' }}></i>
                    </a>

                    <a href="https://youtube.com" target="_blank" rel="noreferrer">
                        <i className="bi bi-youtube" style={{ color: 'red' }}></i>
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer">
                        <i className="bi bi-facebook" style={{ color: 'blue' }}></i>
                    </a>
                    <a href="https://instagram.com/my_emerging_thoughts" target="_blank" rel="noreferrer">
                        <i className="bi bi-instagram" style={{ color: 'red' }}></i>
                    </a>


                </div>

                <hr />
                <div className="copyright">
                    <a href="https://github.com/suraj-singh12" target="_blank" rel="noreferrer">&copy; 2022 Copyright: suraj-singh12 (Suraj Singh)</a>
                </div>
            </div>
            {/* <div className="container-fluid text-center identity">
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
            </div> */}
        </footer>
    )
}

export default Footer;