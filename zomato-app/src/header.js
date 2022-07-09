import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <>
                <header>
                    {/* <!-- navigation bar start--> */}
                    <nav className="navbar background-orange navbar-expand-sm navbar-dark py-0">
                        {/* <!-- Ensure full width cover --> */}
                        <div className="container-fluid py-0">
                            {/* <!-- give icon logo text --> */}
                            <Link to="/" className="navbar-brand icon py-0">Zomato</Link>
                            {/* <!-- now collapsible navbar toggler button --> */}
                            <button type="button" className="navbar-toggler" data-bs-toggle="collapse"
                                data-bs-target="#collapsibleNavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            {/* <!-- collapsible navbar items --> */}
                            <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                                <ul className="navbar-nav">
                                    {/* <!-- dark mode button --> */}
                                    <li className="nav-item">
                                        
                                        <Link to="/" className="nav-link" id="night-button" href="#">
                                            {/*onClick="ToggleDarkMode()" */}
                                            <i className="bi bi-brightness-high" style={{fontSize: '2.2rem', color:'black'}}></i>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                            <img className="navbar-img" src="https://i.ibb.co/kG506zF/facebook.png" alt="Facebook" title="Facebook" />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://www.instagram.com/my_emerging_thoughts/" target="_blank" rel="noreferrer">
                                            <img className="navbar-img" src="https://i.ibb.co/zR2VV2R/insta.png" alt="Instagram" title="Instagram" />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                                            <img className="navbar-img" src="https://i.ibb.co/cLM7wSf/youtube1.png" alt="YouTube" title="YouTube" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
            </>
        )
    }
}

export default Header;