import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './component/Home/Home';
import Listing from './component/listing/listing';
import Details from './component/details/restDetails';
import PlaceOrder from './component/booking/placeOrder';
import ViewOrder from './component/booking/viewOrder';
import Footer from './footer';
import Login from './component/login/login';
import Register from './component/login/register';

const Routing = () => {
    return (
        <BrowserRouter>
            
            <Route exact path="/" component={Home} />
            
            {/* using params in /listing (see :id) */}
            <Route path="/listing/:id" component={Listing} />  
            
            {/* using queryparams in /details */}
            <Route path="/details" component={Details} />

            {/* using params in /placeOrder (see :restName) */}
            <Route path="/placeOrder/:restName" component={PlaceOrder} />
            <Route path="/viewBooking" component={ViewOrder} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />

            <Footer />
        </BrowserRouter>
    )
}

export default Routing;