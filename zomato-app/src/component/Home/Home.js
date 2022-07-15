import React from 'react';
import Search from './searchComponent';
import QuickSearch from './quickComponent';

const Home = (props) => {
    console.log('>>>Home: ', props);
    return (
        <>
            <Search />
            <QuickSearch />
        </>
    )
}

export default Home;