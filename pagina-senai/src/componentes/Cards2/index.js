import React from 'react';
import './style.css';
import logo from './img-metalurgia.png';

function Cards2() {
    return(
        <div className="cards-container2">
            <img id="img2" src={logo} width="280" height="180"/> 
            <p>Metalmecânica - Metalurgia</p>
            <p>Soldagem MAG em aço carbono</p>
            <p>Carga horária: 48 horas</p>
            <p>Preço: Gratuito</p>
            <a href="https://suicobrasileira.sp.senai.br/curso/55038/115/soldagem-mag-em-aco-carbono" target="_blank"><button id="botao2">Saiba mais</button></a>
        </div>
    );
}

export default Cards2;