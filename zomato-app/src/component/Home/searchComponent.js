import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './search.css';

const url = "https://app1api.herokuapp.com/location";

class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            location: ""
        }
    }

    renderCity = (data) => {
        // important to use this if condition here, because 
        // page load: constructor -> render -> componentDidMount
        // so it gets called before componentDidMount(), and then we had this.state.location as "" (i.e. empty)
        // since the api (inside componentDidMount() )is not called till this time
        // so using if(data is there), saves us from the error: TypeError: data.map is not a function

        // so when componentDidMount() is called, then this.state.location gets updated
        // and then component is then re-rendered with updated data, and this function runs well now.
        if (data) {
            return data.map((item) => {
                return (
                    // key is added why?
                    // react wants that whatever you are repeating, every repeating thing, should have a unique key
                    // because keys help react identify which items have changed, are added, or are removed.

                    // Use unique and constant keys when rendering dynamic children, or expect strange things to happen.

                    // <li key={item.state_id}><Link to="/" className="dropdown-item">{item.state}</Link></li>
                    <option key={item.state_id}>{item.state}</option>
                )
            })
        }
    }

    style = {
        cityDropdown: {
            position: 'relative',
            fontSize: '1.5vw',
            backgroundColor: '#c3c1a3',
            border: '#c3c1a3',
            borderRadius: '5%',
            fontFamily: "'Hubballi', cursive",
            marginBottom: '9%',
            marginRight: '5%',
            padding: '1%',
            inset: '0px auto auto 0px',
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
                        {/* <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">----Select Your
                            City----</button> */}
                        {/* <ul className="dropdown-menu"> */}
                        {/* {this.renderCity(this.state.location)} */}
                        {/* <li><a href="/" className="dropdown-item">Mathura</a></li>
                            <li><a href="/" className="dropdown-item">Agra</a></li>
                            <li><a href="/" className="dropdown-item">Mumbai</a></li>
                            <li><a href="/" className="dropdown-item">Delhi</a></li> */}
                        {/* </ul> */}
                        <select style={this.style.cityDropdown} className="dropdown-toggle">
                            <option>----Select Your City----</option>
                            {this.renderCity(this.state.location)}
                        </select>

                        <select style={this.style.cityDropdown} className="dropdown-toggle">
                            <option>----Select Your Restaurant----</option>
                            {/* {this.renderCity(this.state.location)} */}
                        </select>

                        {/* <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown">----Select Your
                            Restaurant----</button>
                        <ul className="dropdown-menu">
                            <li><a href="/" className="dropdown-item">Taj Hotel</a></li>
                            <li><a href="/" className="dropdown-item">BrijWasi</a></li>
                        </ul> */}
                    </div>
                </div>
            </>
        )
    }

    // one of the lifecycle method of react : componentDidMount()
    componentDidMount() {
        // if we need to make API call on page load, we do it here

        // this method gets called when page loads.
        // page load (only once): constructor() -> render() -> componentDidMount()

        // first time, page loads; component is mounted, then it only re-renders
        // the constructor or componentDidMount is not called anymore,
        // any state change happens, then only render() function runs again (with updated data)
        // i.e. only re-rendering.

        // we get data from an API, & that we update in a state, & as soon any state changes,
        // the component re-renders & we get the updated data rendered on page.

        // making api call
        fetch(url, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => (
                this.setState({ location: data })
            ))
    }
}

export default Search;