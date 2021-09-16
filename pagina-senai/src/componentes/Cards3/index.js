import React from 'react';
import './style.css';
import logo from './img-eletronica.png';

function Cards3() {
    return(
        <div className="cards-container3">
            <img id="img3" src={logo} width="280" height="180"/> 
            <p>Eletroeletrônica - Eletrônica</p>
            <p>Auxiliar de eletrônica</p>
            <p>Carga horária: 80 horas</p>
            <p>Preço: Gratuito</p>
            <a href="https://suicobrasileira.sp.senai.br/curso/54929/115/auxiliar-de-eletronica" target="_blank"><button id="botao3">Saiba mais</button></a>
        </div>
    );
}

export default Cards3;