import React from 'react';
import Cards from '../Cards/';
import Cards2 from '../Cards2/';
import Cards3 from '../Cards3/';
import './style.css';

function HomePage() {
    return(
        <div className="home-page">
            <Cards />
            <Cards2 />
            <Cards3 />
        </div>
    );
}

export default HomePage;