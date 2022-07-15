import React, { Component } from 'react';
import axios from 'axios';

const url = 'https://app1api.herokuapp.com/filter'
// const url = 'https://app1api.herokuapp.com/filter/1?cuisineId=2'
//  requires : mealType, and cuisineId


class CuisineFilter extends Component {

    /* event is the value of the input box that you select (i.e. cuisineId) */
    filterCuisine = (event) => {
        let mealId = this.props.mealId;    // (passed by listing.js (parent component ))
        let cuisineId = event.target.value;
        let cuisineUrl;

        if(cuisineId === "") {
            cuisineUrl = `${url}/${mealId}`;
        } else {
            cuisineUrl = `${url}/${mealId}?cuisineId=${cuisineId}`;
        }

        console.log(cuisineUrl);
        // calling the api & passing data to the restPerCuisine function
        // this function is in parent component (listing.js)
        // this function calls setDataPerFilter(data) inside itself which updates the state of restaurants
        // & hence listing component re-renders.
        axios.get(cuisineUrl)
        .then((res) => {this.props.restPerCuisine(res.data)})
    }

    render() {
        // the value="" given to each input, is according to the cuisine_id in the database.
        // they are not random.

        /* tip: instead of writing this again & again, you should have an api, that returns all the cuisine type
         & here you can just call that api & render the data using data.map()*/
        return (
            <div className="listing-sub-heading" onChange={this.filterCuisine}>
                <p>From CusineFilter : Cuisine</p>
                <label htmlFor="all">
                    <input type="radio" id="all" name="cuisine" value="" />All
                </label>
                <label htmlFor="north-indian">
                    <input type="radio" id="north-indian" name="cuisine" value="1" />North Indian
                </label>
                <label htmlFor="south-indian">
                    <input type="radio" id="south-indian" name="cuisine" value="2" />South Indian
                </label>
                <label htmlFor="chinese">
                    <input type="radio" id="chinese" name="cuisine" value="3" />Chinese
                </label>
                <label htmlFor="fast-food">
                    <input type="radio" id="fast-food" name="cuisine" value="4" />Fast Food
                </label>
                <label htmlFor="street-food">
                    <input type="radio" id="street-food" name="cuisine" value="5" />Street Food
                </label>
                <hr />
            </div>
        )
    }
}


export default CuisineFilter;