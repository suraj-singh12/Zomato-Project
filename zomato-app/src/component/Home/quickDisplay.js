import React from 'react';
import './quickComponent.css';
import { Link } from 'react-router-dom';

const QuickDisplay = (props) => {
    console.log(props);

    // check in productDisplay in firstApp, there we did this way
    // props.prodData.map((item) => {...}; i.e. props.properyName.map((item) => {...}))
    // but below is another way of doing this 
    const listMeal = ({ mealData }) => {
        if (mealData) {
            return mealData.map((item) => {
                return (
                    < div className="col-lg-3 py-0 px-0 mb-5 tile-container" key={item._id}>
                        <Link to="/">
                            <div className="card tile-component1">
                                <img className="img-fluid" src={item.meal_image} alt={item.mealtype} title={item.mealtype}/>
                            </div>
                            <div className="card-body tile-component2 text-center">
                                <div className="card-title component2-heading">{item.mealtype}</div>
                                <div className="card-text component2-subheading">{item.content}</div>
                            </div>
                        </Link>
                    </div >
                )
            })
        }
    }
    
    return (
        <>
            <div className="row main">
                {listMeal(props)}
            </div>
        </>
    )
}

export default QuickDisplay;


// {/* <!-- containers --> */}
// <div className="row main" >
// {/* <!-- container 1 --> */}
/* < div className="col-lg-3 py-0 px-0 mb-5 tile-container" >
    <a href="listing.html">
        <div className="card tile-component1">
            <img className="img-fluid" src="https://i.ibb.co/wRxXc07/lunch.png" alt="lunch" title="lunch" />
        </div>
        <div className="card-body tile-component2 text-center">
            <div className="card-title component2-heading">Lunch</div>
            <div className="card-text component2-subheading">Best Place For Lunch</div>
        </div>
    </a>
</div > */
// </div >