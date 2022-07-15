import React, { Component } from 'react';
import axios from 'axios';

const url = 'https://app1api.herokuapp.com/filter'
// const url = 'https://app1api.herokuapp.com/filter/1?lcost=700&hcost=1200'
//  takes : mealType, hightCost, and lowCost


class CostFilter extends Component {

    /* event is the value of the input box that you select (i.e. cuisineId) */
    filterCost = (event) => {
        let mealId = sessionStorage.getItem('mealId');    // getting mealId from sessionStorage (was saved in listing.js, after reaching there when user clicked a mealType on homePage)
        let cost = (event.target.value).split('-');
        let lcost = cost[0];
        let hcost = cost[1];

        let costUrl;

        if (event.target.value === "") {
            costUrl = `${url}/${mealId}`;
        } else {
            costUrl = `${url}/${mealId}?lcost=${lcost}&hcost=${hcost}`;
        }

        console.log(costUrl);
        // calling the api & passing data to the restPerCost function
        // this function is in parent component (listing.js)
        // this function calls setDataPerFilter(data) inside itself which updates the state of restaurants
        // & hence listing component re-renders.
        axios.get(costUrl)
            .then((res) => { this.props.restPerCost(res.data) })
    }

    render() {
        // the value="" given to each input, is according to the cuisine_id in the database.
        // they are not random.
        return (
            <div className="listing-sub-heading" onChange={this.filterCost}>
                <p>Cost Filter </p>
                <label htmlFor="all">
                    <input type="radio" name="cost" value="" id="all" /> All
                </label>
                <label htmlFor="L400">
                    <input type="radio" name="cost" value="100-400" id="L400" /> Less than 400
                </label>
                <label htmlFor="401to700">
                    <input type="radio" name="cost" value="401-700" id="401to700" /> 401 - 700
                </label>
                <label htmlFor="701to1000">
                    <input type="radio" name="cost" value="701-1000" id="701to1000" /> 701 - 1000
                </label>
                <label htmlFor="1001to2000">
                    <input type="radio" name="cost" value="1001-2000" id="1001to2000" /> 1001 - 2000
                </label>
                <label htmlFor="2001plus">
                    <input type="radio" name="cost" value="2001-5000" id="2001plus" /> 2001 +
                </label>
            </div>
        )
    }
}


export default CostFilter;