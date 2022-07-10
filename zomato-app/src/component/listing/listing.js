// Following this way;
// listing.js: class Component 
// listingDisplay.js : functional Component

// will use axios to fetch data from api this time

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './listing.css';

const url = "https://app1api.herokuapp.com/restaurants?mealId=";

class Listing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurants: ""
        }
    }

    render() {
        return (
            <>
                {/* <!-- main section of the page --> */}
                <div id="listing-main-section">
                    <h1>Breakfast Places in Mumbai</h1>
                    {/* <!-- filter div (left hand side) --> */}
                    <div id="listing-filter">
                        <p id="listing-heading">Filters</p>

                        <div className="listing-sub-heading">
                            <p>Select Location</p>
                            <select>
                                <option value="no-location" selected>Select Location</option>
                                <option value="mathura">Mathura</option>
                                <option value="agra">Agra</option>
                                <option value="delhi">Delhi</option>
                                <option value="mumbai">Mumbai</option>
                            </select>
                        </div>
                        {/* <!-- cuisine --> */}
                        <div className="listing-sub-heading">
                            <p>Cuisine</p>
                            <label for="north-indian">
                                <input type="checkbox" id="north-indian" />North Indian
                            </label>
                            <label for="south-indian">
                                <input type="checkbox" id="south-indian" />South Indian
                            </label>
                            <label for="chinese">
                                <input type="checkbox" id="chinese" />Chinese
                            </label>
                            <label for="fast-food">
                                <input type="checkbox" id="fast-food" />Fast Food
                            </label>
                            <label for="street-food">
                                <input type="checkbox" id="street-food" />Street Food
                            </label>
                        </div>
                        {/* <!-- cost --> */}
                        <div className="listing-sub-heading">
                            <p>Cost For Two </p>
                            <label for="L500">
                                <input type="radio" name="cost" value="L500" id="L500" /> Less than 500
                            </label>
                            <label for="500to1000">
                                <input type="radio" name="cost" value="500-100" id="500to1000" /> 500 to 1000
                            </label>
                            <label for="1000to1500">
                                <input type="radio" name="cost" value="1000-1500" id="1000to1500" /> 1000 - 1500
                            </label>
                            <label for="1500to2000">
                                <input type="radio" name="cost" value="1500-2000" id="1500to2000" /> 1500 - 2000
                            </label>
                            <label for="2000plus">
                                <input type="radio" name="cost" value="2000 plus" id="2000plus" /> 2000+
                            </label>
                        </div>
                        {/* <!-- sort according to cost --> */}
                        <div id="listing-sort">
                            <p>Sort</p>
                            <label for="LtoH">
                                <input type="radio" name="sort" value="Low to high" id="LtoH" /> Price Low to High
                            </label>
                            <label for="HtoL">
                                <input type="radio" name="sort" value="High to low" id="HtoL" /> Price High to Low
                            </label>
                        </div>
                    </div>

                    {/* <!-- these are the cards in Right hand side --> */}
                    <div id="listing-cards">
                        {/* <!-- card 1 --> */}
                        <Link to="/">
                            <div className="listing-card">
                                <div className="listing-card-upper">
                                    <div className="listing-image">
                                        <img src="https://i.ibb.co/Jkcft9N/burger.jpg" alt="burger" title="burger" />
                                    </div>
                                    
                                    <div className="listing-content">
                                        <p className="listing-content-heading">The Big Rich Burger</p>
                                        <p className="listing-content-subheading1">Fort</p>
                                        <p className="listing-place">Shop 1, Plot D, Samruddhi Complex, Chincholi ...</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="listing-card-below">
                                    <div className="listing-text-below-img">
                                        <p>CUISINES:</p>
                                        <p>COST FOR TWO:</p>
                                    </div>
                                    <div className="listing-text-below-content">
                                        <p>Bakery</p>
                                        <p>&#8377;700</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        {/* <!-- cards div ends here --> */}

                        <div id="listing-navigation">
                            <Link to="/"><div>&lt;</div></Link>
                            <Link to="/"><div id="listing-nav1">1</div></Link>
                            <Link to="/"><div>2</div></Link>
                            <Link to="/"><div>3</div></Link>
                            <Link to="/"><div>4</div></Link>
                            <Link to="/"><div>5</div></Link>
                            <Link to="/"><div>&gt;</div></Link>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Listing;