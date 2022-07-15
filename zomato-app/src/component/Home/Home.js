import React from 'react';
import Search from './searchComponent';
import QuickSearch from './quickComponent';
import Header from '../../header';

const Home = (props) => {
    console.log('>>>Home: ', props);
    // save the location of current page(except login/register/placeOrder/viewOrder pages, we do this on all pages[home, listing, details]) as last visited page; will use it to when non-logged in user logs in; will redirect him to his previous page (before login)
    let last_page_address = props.match.url + props.location.search;
    sessionStorage.setItem('last_page', last_page_address);
    console.log('last visited page set to: ', sessionStorage.getItem('last_page'))
    
    return (
        <>
            <Header />
            <Search />
            <QuickSearch />
        </>
    )
}

export default Home;