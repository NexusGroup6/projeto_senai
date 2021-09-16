import React from 'react';
import './style.css';
import logo from './img-construcao.jpeg';

function Cards() {
    return(
        <div className="cards-container1">
            <img id="img1" src={logo} width="280" height="180" />
            <p>Construção Civil - Edificações</p>
            <p>Revit Architecture</p>
            <p>Carga horária: 40 horas</p>
            <p>Preço: Gratuito</p>
            <a href="https://suicobrasileira.sp.senai.br/curso/81091/115/revit-architecture" target="_blank"><button id="botao1">Saiba mais</button></a>
        </div>
    );
}

export default Cards;