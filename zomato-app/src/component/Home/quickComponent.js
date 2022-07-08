import React, { Component } from 'react';
import './quickComponent.css';

class QuickSearch extends Component {
    render() {
        return (
            <div className="container p-5 mt-0 quick-search">
                <p className="h1 quick-heading">Quick Search</p>
                <p className="quick-description">Discover Restaurants by Meal</p>

                {/* <!-- containers --> */}
                <div className="row main">
                    {/* <!-- container 1 --> */}
                    <div className="col-lg-3 py-0 px-0 mb-5 tile-container">
                        <a href="listing.html">
                            <div className="card tile-component1">
                                <img className="img-fluid" src="https://i.ibb.co/wRxXc07/lunch.png" alt="lunch" title="lunch" />
                            </div>
                            <div className="card-body tile-component2 text-center">
                                <div className="card-title component2-heading">Lunch</div>
                                <div className="card-text component2-subheading">Best Place For Lunch</div>
                            </div>
                        </a>
                    </div>

                    {/* <!-- container 2 --> */}
                    <div className="col-lg-3 py-0 px-0 mb-5 tile-container">
                        <a href="listing.html">
                            <div className="card tile-component1">
                                <img className="img-fluid" src="https://i.ibb.co/tXR9gLC/dinner.png" alt="dinner" title="dinner" />
                            </div>
                            <div className="card-body tile-component2 text-center">
                                <div className="card-title component2-heading">Dinner</div>
                                <div className="card-text component2-subheading">Best Place For Dinner</div>
                            </div>
                        </a>
                    </div>

                    {/* <!-- container 3 --> */}
                    <div className="col-lg-3 py-0 px-0 mb-5 tile-container">
                        <a href="listing.html">
                            <div className="card tile-component1">
                                <img className="img-fluid" src="https://i.ibb.co/09NVJ54/drinks.png" alt="drinks" title="drinks" />
                            </div>
                            <div className="card-body tile-component2 text-center">
                                <div className="card-title component2-heading">Drinks</div>
                                <div className="card-text component2-subheading">Best Place For Drinks</div>
                            </div>
                        </a>
                    </div>

                    {/* <!-- container 4 --> */}
                    <div className="col-lg-3 py-0 px-0 mb-5 tile-container">
                        <a href="listing.html">
                            <div className="card tile-component1">
                                <img className="img-fluid" src="https://i.ibb.co/09NVJ54/drinks.png" alt="drinks" title="drinks" />
                            </div>
                            <div className="card-body tile-component2 text-center">
                                <div className="card-title component2-heading">Drinks</div>
                                <div className="card-text component2-subheading">Best Place For Drinks</div>
                            </div>
                        </a>
                    </div>

                    {/* <!-- container 5 --> */}
                    <div className="col-lg-3 py-0 px-0 mb-5 tile-container">
                        <a href="listing.html">
                            <div className="card tile-component1">
                                <img className="img-fluid" src="https://i.ibb.co/Qj852By/sacks.png" alt="sacks" title="sacks" />
                            </div>
                            <div className="card-body tile-component2 text-center">
                                <div className="card-title component2-heading">Sacks</div>
                                <div className="card-text component2-subheading">Best Place For NightLife</div>
                            </div>
                        </a>
                    </div>

                    {/* <!-- container 6 --> */}
                    <div className="col-lg-3 py-0 px-0 mb-5 tile-container">
                        <a href="listing.html">
                            <div className="card tile-component1">
                                <img className="img-fluid" src="https://i.ibb.co/K2d4QTS/nightlife.png" alt="nightlife" title="nightlife" />
                            </div>
                            <div className="card-body tile-component2 text-center">
                                <div className="card-title component2-heading">NightLife</div>
                                <div className="card-text component2-subheading">Best Place For NightLife</div>
                            </div>
                        </a>
                    </div>

                </div>
            </div>

        )
    }
}

export default QuickSearch;