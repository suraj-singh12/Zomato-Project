import React from 'react';
import { Link } from 'react-router-dom';

const ListingDisplay = (props) => {
    let bgColor = 'lightgreen';
    const getMealType = (mealTypes) => {
        return mealTypes.map((item) => {
            bgColor = (bgColor === 'lightgreen') ? 'orange' : 'lightgreen';
            return (
                <span className="btn btn-sm" style={{ marginRight: '2%', backgroundColor: `${bgColor}` }}>{item.mealtype_name}</span>
            )
        })
    }

    const getCuisines = (cuisines) => {
        let bgColor = 'lightCoral';
        return cuisines.map((item) => {
            bgColor = (bgColor === 'lightCoral') ? 'lightblue' : 'lightCoral';
            return (
                <span className="btn btn-sm" style={{ marginRight: '2%', backgroundColor: `${bgColor}` }}>{item.cuisine_name}</span>
            )
        })
    }

    // render restaurant data here;             this.props.listData
    const renderData = ({ listData }) => {
        // if data has arrived (means api has been called), then render the data
        if (listData) {

            console.log(listData);
            if (listData.length > 0) {

                return listData.map((item) => {
                    return (
                        <Link to="/" key={item.restaurant_id}>
                            <div className="listing-card">
                                <div className="listing-card-upper">
                                    <div className="listing-image">
                                        <img src={item.restaurant_thumb} alt={item.restaurant_name} title={item.restaurant_name} />
                                    </div>

                                    <div className="listing-content">
                                        <p className="listing-content-heading">{item.restaurant_name}</p>
                                        <p className="listing-content-subheading1">Fort</p>
                                        <p className="listing-place">{item.address}</p>
                                        <p className="listing-rating">{item.rating_text}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="listing-card-below">
                                    <div className="listing-text-below-img">
                                        <p>MEALTYPE:</p>
                                        <p style={{marginTop: '25px'}}>CUISINES:</p>
                                        <p style={{marginTop: '15px'}}>COST FOR TWO:</p>
                                    </div>
                                    <div className="listing-text-below-content">
                                        <p>{getMealType(item.mealTypes)}</p>
                                        <p>{getCuisines(item.cuisines)}</p>
                                        <p style={{fontWeight: 'bold'}}>&#8377; {item.cost}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })

            } else {
                // if data comes, and that's empty we say no data
                return (
                    <div>
                        <h2> No data for the filter</h2>
                    </div>
                )
            }
        } else {
            // if data has not come yet (means api is not yet called), say loading
            return (
                <div style={{ marginLeft: '25%' }}>
                    <img src={require("./images/loader.gif")} alt="loader" />
                    <h2>Loading...</h2>
                </div>
            )
        }
    }

    return (

        <div id="listing-cards">
            {renderData(props)}
        </div>
    )
}

export default ListingDisplay;

/*
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
 */