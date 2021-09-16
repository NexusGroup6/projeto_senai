import React from 'react';
import './style.css';
import logo from './img-senai.png';

function Header() {
    return(
        <header>
            <h2>Escola SENAI Suíço-Brasileira Paulo Ernesto Tolle</h2>
            <img id="img4" src={logo} width="190" height="50"/> 
        </header>
    );
}

export default Header;