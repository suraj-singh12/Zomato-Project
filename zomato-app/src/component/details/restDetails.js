// There are 4 ways of calling api
// using `fetch`, `axios`, `fetch & async await`, `axios and async await`

// here we will use async await to call api

import React, {Component} from 'react';
import axios from 'axios';
import './details.css'
import {Link} from 'react-router-dom';

// 1. fetch way of calling  api
/*
    fetch(url, {method: 'GET'})
    .then((res) => res.json())
    .then((data) => {
        this.setState({restData: data})
    }
*/

// 2. fetch & async await way of calling api

// 3. axios way of calling api
/*
    axios.get(url)
    .then((res) => {
        this.setState({restData: res.data})
    }
*/

// 4. axios async await way of calling api


// const url = 'https://app1api.herokuapp.com/details/5'
// const menuUrl = 'https://app1api.herokuapp.com/menu/7'
const url='https://app1api.herokuapp.com'

class RestDetails extends Component {
    // note: we cannot declare a variable like this
    // let a = 5; var b = 10; const c = 15; 
    // this is not allowed, 
    // that's why we use state, also any update in state 
    // triggers re-rendering of the component
    // this is what we would definitely want.

    constructor() {
        super();

        this.state={
            details: '',        // details of the restaurant
            menuList: '',       // menu of the restaurant
            userItem: '', 
            mealId: sessionStorage.getItem('mealId')?sessionStorage.getItem('mealId'):'',         // which meal id you have selected.
        }
    }

    render() {
        return (
            <>
            {this.state.details.restaurant_name}
            </>
        )
    }

    // calling with async await
    async componentDidMount() {
        // getting restaurantId from the default props
        let restId = this.props.location.search.split('=')[1];

        // get the restaurant details for given restaurantId
        let response = await axios.get(`${url}/details/${restId}`);
        console.log(response.data);
        // get the menu for given restaurantId
        let menu = await axios.get(`${url}/menu/${restId}`);
        // update the states of restaurantDetails, & menu
        this.setState({details: response.data[0], menuList: menu.data});
    }
}

export default RestDetails;