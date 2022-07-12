// There are 4 ways of calling api
// using `fetch`, `axios`, `fetch & async await`, `axios and async await`

// here we will use async await to call api

import React, { Component } from 'react';
import axios from 'axios';
import './details.css'
import { Link } from 'react-router-dom';
import MenuDisplay from './menuDisplay';

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
const url = 'https://app1api.herokuapp.com'

class RestDetails extends Component {
    // note: we cannot declare a variable like this
    // let a = 5; var b = 10; const c = 15; 
    // this is not allowed, 
    

    constructor() {
        super();

        this.state = {
            details: '',        // details of the restaurant
            menuList: '',       // menu of the restaurant
            userItem: '',       // items that user selects from menu
            mealId: sessionStorage.getItem('mealId') ? sessionStorage.getItem('mealId') : '',         // which meal id user has selected (that we had stored, when user had selected : in listing.js (i.e. listing page))
        }
    }


    addToCart = (data) => {
        this.setState({userItem: data});
    }

    // on clicking the checkout button
    proceed = () => {
        // save the state of menu userItems on pressing checkout button
        // because we will require it on next page 
        sessionStorage.setItem('menu', this.state.userItem);
        
        // now jump to the page /placeOrder page
        this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`);
    }

    render() {
        // let details = this.state.details;
        let { details } = this.state;     // is equivalent to above one
        return (
            <div>
                <div id="details-main-content">
                    <div id="details-photo">
                        <img src={this.state.details.restaurant_thumb} alt="snacks" />
                    </div>
                    <div id="details-content">
                        <h2 id="details-heading-main">{details.restaurant_name}</h2>
                        <i className="fa-regular fa-star checked"></i>
                        <i className="fa-regular fa-star checked"></i>
                        <i className="fa-regular fa-star checked"></i>
                        <i className="fa-regular fa-star-half checked"></i>
                        <span>231 Customers Rating is {details.rating_text}</span>
                        <h4>
                            <strike>Old Price: {details.cost + 240}</strike>
                        </h4>
                        <h4>New Price: {details.cost}</h4>
                        <h4>Best Taste of Fresh Chai with Samosa At your Door or Dine In</h4>
                        <div id="details-icons">
                            <div className="details-icon">
                                <img src="https://i.ibb.co/wJvrhYg/veg.png" alt="pure-veg" title="pure-veg" />
                                <p>Pure Veg</p>
                            </div>
                            <div className="details-icon">
                                <img src="https://i.ibb.co/mD3jpgc/sentizied.png" alt="fully-sanitized" title="fully-sanitized" />
                                <p>Fully Sanitized</p>
                            </div>
                            <div className="details-icon">
                                <img src="https://i.ibb.co/kHrm3Mh/delivery.png" alt="free-delivery" title="free-delivery" />
                                <p>Free Delivery</p>
                            </div>
                        </div>
                        <h2 id="details-isOpen">Currently Open</h2>
                        <button className="details-btn btn btn-danger" style={{ marginRight: '1%' }}>Back</button>
                        <button className="details-btn btn btn-success" onClick={this.proceed}>Checkout</button>
                    </div>
                </div>
                <div className="details-menuDisplay">
                    <MenuDisplay menudata={this.state.menuList} finalOrder={(data) => {this.addToCart(data)}}/>
                </div>
            </div>
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
        this.setState({ details: response.data[0], menuList: menu.data });
    }
}

export default RestDetails;