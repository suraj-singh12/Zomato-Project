import React, { Component } from 'react';
import './search.css';

class Search extends Component {
    render() {
        return (
            <>
                <div className="container-fluid text-center food-img">
                    <div id="logo">
                        <span>E!</span>
                    </div>
                    <div></div>
                    <p id="heading" className="text-center">Find the Best Restaurants near You</p>
                    <div></div>

                    <div className="dropdown dropdown-enhancement">
                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">----Select Your
                            City----</button>
                        <ul className="dropdown-menu">
                            <li><a href="/" className="dropdown-item">Mathura</a></li>
                            <li><a href="/" className="dropdown-item">Agra</a></li>
                            <li><a href="/" className="dropdown-item">Mumbai</a></li>
                            <li><a href="/" className="dropdown-item">Delhi</a></li>
                        </ul>

                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">----Select Your
                            Restaurant----</button>
                        <ul className="dropdown-menu">
                            <li><a href="/" className="dropdown-item">Taj Hotel</a></li>
                            <li><a href="/" className="dropdown-item">BrijWasi</a></li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}

export default Search;