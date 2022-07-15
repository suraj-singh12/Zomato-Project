import React, { Component } from 'react';
import axios from 'axios';

const url = 'https://app1api.herokuapp.com/filter/1?cuisineId=2'
//  requires : mealType, and cuisineId


class CuisineFilter extends Component {
    render() {

        // the value="" given to each input, is according to the cuisine_id in the database.
        // they are not random.

        /* tip: instead of writing this again & again, you should have an api, that returns all the cuisine type
         & here you can just call that api & render the data using data.map()*/
        return (
            <div className="listing-sub-heading">
                <p>From CusineFilter : Cuisine</p>
                <label htmlFor="north-indian">
                    <input type="checkbox" id="north-indian" value="1" />North Indian
                </label>
                <label htmlFor="south-indian">
                    <input type="checkbox" id="south-indian" value="2" />South Indian
                </label>
                <label htmlFor="chinese">
                    <input type="checkbox" id="chinese" value="3" />Chinese
                </label>
                <label htmlFor="fast-food">
                    <input type="checkbox" id="fast-food" value="4" />Fast Food
                </label>
                <label htmlFor="street-food">
                    <input type="checkbox" id="street-food" value="5" />Street Food
                </label>
                <hr />
            </div>
        )
    }
}


export default CuisineFilter;