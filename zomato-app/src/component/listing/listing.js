// Following this way;
// listing.js: class Component 
// listingDisplay.js : functional Component

// will use axios to fetch data from api this time

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './listing.css';
import ListingDisplay from './listingDisplay';
import CuisineFilter from '../filters/cuisineFilter';
import CostFilter from '../filters/costFilter';

const url = "https://app1api.herokuapp.com/restaurants";

class Listing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurants: ""
        }
    }

    // when a filter is applied, this function is called, this updates the state of restaurants
    // & then this component re-renders with updated restaurants.
    setDataPerFilter = (data) => {
        console.log('Data received in listing from cuisineFilter/costFilter: ', data);
        this.setState({ restaurants: data });
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
                                <option value="no-location" defaultValue>Select Location</option>
                                <option value="mathura">Mathura</option>
                                <option value="agra">Agra</option>
                                <option value="delhi">Delhi</option>
                                <option value="mumbai">Mumbai</option>
                            </select>
                        </div>
                        
                        {/* <!-- cuisine --> */}

                        {/* sending mealId to CuisineFilter, & that will return the sorted data
                        and here we receive that sorted data in restPerCuisine which on receive 
                        calls the function setDataPerFilter() with that data, that function updates the state of restaurant data here. 
                        and the component re-renders with updated data*/}
                        <CuisineFilter mealId={this.props.match.params.id}
                        restPerCuisine={(data) => {this.setDataPerFilter(data)}}/>


                        {/* <!-- cost --> */}
                        
                        {/* not passing mealId, will take it from sessionStorage,
                        could've sent also mealId from here, but, just doing it another way. */}
                        <CostFilter 
                        restPerCost={(data) => {this.setDataPerFilter(data)}}/>
                        

                        {/* <!-- sort according to cost --> */}
                        <div id="listing-sort">
                            <p>Sort</p>
                            <label htmlFor="LtoH">
                                <input type="radio" name="sort" value="Low to high" id="LtoH" /> Price Low to High
                            </label>
                            <label htmlFor="HtoL">
                                <input type="radio" name="sort" value="High to low" id="HtoL" /> Price High to Low
                            </label>
                        </div>
                    </div>

                    {/* <!-- these are the cards in Right hand side --> */}
                    {/* <div id="listing-cards"> */}

                    <ListingDisplay listData={this.state.restaurants} />

                    {/* <!-- card 1 --> */}
                    {/* <Link to="/">
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
                        </Link> */}
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
                    {/* </div> */}
                </div>
            </>
        )
    }

    // calling API with axios 
    componentDidMount() {
        // utilizing the default props that are available with us in routing5
        let mealId = this.props.match.params.id ? this.props.match.params.id : 1;
        sessionStorage.setItem('mealId', mealId);
        console.log(mealId);
        console.log(this.props);

        // calling api
        axios.get(`${url}?mealId=${mealId}`)
            .then(res => {
                this.setState({ restaurants: res.data })
            })

        // other way to call api
        // fetch(`${url}?mealId=${mealId}`, {method: 'GET'})
        //     .then((res) => res.json())
        //     .then((data) => (this.setState({restaurants: data})))

    }
}

export default Listing;