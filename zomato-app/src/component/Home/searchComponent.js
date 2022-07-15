import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './search.css';
import {withRouter} from 'react-router-dom';

const url = "https://app1api.herokuapp.com/location";
const restUrl = "https://app1api.herokuapp.com/restaurants";

class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            location: "",
            restaurants: ""
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
                    <option key={item.state_id} value={item.state_id}>{item.state}</option>
                )
            })
        }
    }

    renderRest = (data) => {
        if (data) {
            // console.log(data);
            return data.map((item) => {
                return (
                    <option key={item.restaurant_id} value={item.restaurant_id}>{item.restaurant_name}</option>
                )
            })
        }
    }

    // called when user selects any particular state name from dropdown
    handleCity = (event) => {
        let stateId = event.target.value;       // event.targe.value has the state_id (check the <option value= >)
        console.log(stateId);

        // fetch restaurants based on selected state (& update the state of restaurants; this will lead to re-rendering 
        // i.e render() will be again executed with updated data, & that time restaurant data will be rendered too
        //  as then this.state.restaurants will have data.)
        fetch(`${restUrl}?stateId=${stateId}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => (
                this.setState({ restaurants: data })
            ))
    }

    // on selecting restaurant corresponding to selected city, redirect user to detail page of that restaurant
    handleRestaurant = (event) => {
        const restId = event.target.value;
        this.props.history.push(`/details?restId=${restId}`);   // redirecting
        // if it says "Cannot read properties of undefined (reading 'push')" (in console of browser)
        // then look one level below, i.e. .history , that means history is not available here.

        /**
         * if you check in Home component, default props are available, but if you check here in searchComponent they are not present.
         * Why?
         * Because default props are not available in child components.
         * and searchComponent is a child component of Home.
         * 
         * see these lines in home: 
         * import Search from './searchComponent';
         * return (
                <>
                    <Search />
                    <QuickSearch />
                </>
            )
         * 
         * Only the components present in Route under BrowserRouter has access to default props
         * because they are not child of any component. They are main/parent components.
         * (check routing.js; all components that are present in Route, are parent & all of them (only them) has access to default props)
         *
         * To access default props in child components, we need to import {withBrowserRouter} from 'react-router-dom' in the child component.
         * and export the child component withRouter
         * export default withBrowserRouter(Search); in our case
         */
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
        console.log('>>>>searchComponent ', this.props);
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

                        {/* call handleCity() whenever user chooses any city from dropdown
                        so that we will display restaurant based on that */}
                        <select onChange={this.handleCity} style={this.style.cityDropdown} className="dropdown-toggle">
                            <option>----Select Your City----</option>
                            {/* get the city names rendered here*/}
                            {this.renderCity(this.state.location)}
                        </select>

                        <select onChange={this.handleRestaurant} style={this.style.cityDropdown} className="dropdown-toggle">
                            <option>----Select Your Restaurant----</option>
                            {/* get the restaurant names rendered here */}
                            {this.renderRest(this.state.restaurants)}
                        </select>

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

export default withRouter(Search);