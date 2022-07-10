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
            <div className="row">
                <div id="mainListing">
                    <div id="filter">
                        <center>
                            <h3> Filters </h3>
                        </center>
                    </div>
                </div>
            </div>
        )
    }
}

export default Listing;