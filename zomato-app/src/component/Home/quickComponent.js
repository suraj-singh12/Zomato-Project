import React, { Component } from 'react';
// import './quickComponent.css';
import QuickDisplay from './quickDisplay';

// quickSearch url
const url='https://app1api.herokuapp.com/mealtype';

class QuickSearch extends Component {
    constructor(props) {
        super();

        this.state = {
            mealType: ""
        }
    }

    render() {
        return (
            <div className="container-fluid p-1 quick-search" >
                <p className="h1 quick-heading">Quick Search</p>
                <p className="quick-description">Discover Restaurants by Meal</p>
                
                <QuickDisplay mealData={this.state.mealType}/>
            </div>
        )
    }

    // API calling ; quickSearch items
    componentDidMount() {
        fetch(url, {method: 'GET'})
        .then((res) => res.json())
        .then((data) => {this.setState({mealType:data})})
    }
}

export default QuickSearch;