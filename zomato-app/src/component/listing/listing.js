// Following this way;
// listing.js: class Component 
// listingDisplay.js : functional Component

// will use axios to fetch data from api this time

import React, { Component } from 'react';
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
            <div id="listing-main-div">
                {/* <!-- filter div (left hand side)--> */}
                <div id="listing-filter-div">
                    {/* <!-- headings/subheadings --> */}
                    <p id="listing-filter-heading1">Filter</p>
                    <p id="listing-filter-subheading1">Cuisine Filter</p>

                    {/* <!-- cuisine filter --> */}
                    <div id="listing-cuisine-filter">
                        <label for="all">
                            <input type="checkbox" name="food" id="all" />All
                        </label>
                        <label for="north-indian">
                            <input type="checkbox" name="food" id="north-indian" />North Indian
                        </label>
                        <label for="south-indian">
                            <input type="checkbox" name="food" id="south-indian" />South Indian
                        </label>
                        <label for="chinese">
                            <input type="checkbox" name="food" id="chinese" />Chinese
                        </label>
                        <label for="fast-food">
                            <input type="checkbox" name="food" id="fast-food" />Fast Food
                        </label>
                        <label for="street-food">
                            <input type="checkbox" name="food" id="street-food" />Street Food
                        </label>
                    </div>
                </div>

                <div id="listing-content-div">
                    {/* <!-- card 1 --> */}
                    <a href="/">
                        <div className="card listing-card">
                            <div className="listing-pic">
                                {/* <!-- side left (of card)--> */}
                                <img src="https://i.ibb.co/Bc8p4pT/pizza.jpg" alt="pizza" title="pizza" />
                            </div>
                            <div className="listing-info">
                                {/* <!-- side right (of card)--> */}
                                <p className="listing-info-heading">Domino's Pizza</p>
                                <div className="listing-info-desc">
                                    <p>Ashok Vihar Phase 3, New Delhi</p>
                                    <p>Very Good</p>
                                    <p>Rs. 666</p>
                                </div>
                                <div className="listing-buttons">
                                    <div className="listing-breakfast-button">BreakFast</div>
                                    <div className="listing-lunch-button">Lunch</div>
                                    <div className="listing-north-indian-button">North Indian</div>
                                    <div className="listing-south-indian-button">Fast Food</div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default Listing;