import React, { Component } from 'react';
import axios from 'axios';

const url = 'https://app1api.herokuapp.com/filter'
// const url = 'https://app1api.herokuapp.com/filter/1?lcost=700&hcost=1200&sort=-1'
//  takes : mealType, hightCost, and lowCost


class CostFilter extends Component {

    /* event is the value of the input box that you select (i.e. cuisineId) */
    filterCost = (event) => {
        let mealId = sessionStorage.getItem('mealId');    // getting mealId from sessionStorage (was saved in listing.js, after reaching there when user clicked a mealType on homePage)
        let cost = (event.target.value).split('-');
        let lcost = cost[0];
        let hcost = cost[1];

        let sort = 1;
        if(cost.length === 3) {
            sort = (cost[2] === "0") ? -1 : 1;
            // sorting 1 means ascending order, -1 means in descending order
        }
        let costUrl;

        if (event.target.value === "") {
            costUrl = `${url}/${mealId}`;
        } else if(cost.length === 2) {
            costUrl = `${url}/${mealId}?lcost=${lcost}&hcost=${hcost}`;
        } else {
            costUrl = `${url}/${mealId}?lcost=${lcost}&hcost=${hcost}&sort=${sort}`;
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

             {/* <!-- sort according to cost --> */}
                <div id="listing-sort">
                    <p>Sort</p>
                    <label htmlFor="LtoH">
                        <input type="radio" name="sort" value="10-5000-1" id="LtoH" /> Price Low to High
                    </label>
                    <label htmlFor="HtoL">
                        <input type="radio" name="sort" value="10-5000-0" id="HtoL" /> Price High to Low
                        {/* passing 0 instead of -1, because in the filterCost fn, we split by '-', so sending -1 would make things confusing there.
                        this 0 we are sending instead of -1, we will decode it to -1 there in function itself. */}
                    </label>
                </div>
            </div>
        )
    }
}


export default CostFilter;