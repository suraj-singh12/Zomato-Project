import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './component/Home/Home';
import Header from './header';
import Footer from './footer';

const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route path="/" component={Home} />
            <Footer />
        </BrowserRouter>
    )
}

export default Routing;