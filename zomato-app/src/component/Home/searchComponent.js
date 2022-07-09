import React, { Component } from 'react';
import './search.css';

const url = "https://app1api.herokuapp.com/location";

class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            location: ""
        }
    }
    render() {
        return (
            <>
                <div className="container-fluid text-center food-img">
                    <div id="logo">
                        <span>E!</span>
                    </div>
                    <div></div>
                    <p id="heading" className="text-center">Find the Best Restaurants near You</p>
                    <div></div>

                    <div className="dropdown dropdown-enhancement">
                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">----Select Your
                            City----</button>
                        <ul className="dropdown-menu">
                            <li><a href="/" className="dropdown-item">Mathura</a></li>
                            <li><a href="/" className="dropdown-item">Agra</a></li>
                            <li><a href="/" className="dropdown-item">Mumbai</a></li>
                            <li><a href="/" className="dropdown-item">Delhi</a></li>
                        </ul>

                        <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">----Select Your
                            Restaurant----</button>
                        <ul className="dropdown-menu">
                            <li><a href="/" className="dropdown-item">Taj Hotel</a></li>
                            <li><a href="/" className="dropdown-item">BrijWasi</a></li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }

    // one of the lifecycle method of react : componentDidMount()
    componentDidMount() {
        // if we need to make API call on page load, we do it here

        // this method gets called when page loads.
        // page load: constructor() -> super() -> then out of constructor: render() -> componentDidMount()
        
        // we get data from an API, & that we update in a state, & as soon any state changes,
        // the component re-renders & we get the updated data rendered on page.

        // making api call
        fetch(url, {method:'GET'})
        .then((res) => res.json())  
        .then((data) => (
            this.setState({location: data})
        ))
    }
}

export default Search;