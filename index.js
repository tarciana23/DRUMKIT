'use strict';
const audios = [
    document.getElementById('audio1'),
    document.getElementById('audio2'),
    document.getElementById('audio3'),
    document.getElementById('audio4'),
    document.getElementById('audio5'),
    document.getElementById('audio6'),
    document.getElementById('audio7'),
    document.getElementById('audio8'),
    document.getElementById('audio9'),
]

const sons = {
    'A': 'boom.wav',
    'S': 'clap.wav',
    'D': 'hihat.wav',
    'F': 'kick.wav',
    'G': 'openhat.wav',
    'H': 'ride.wav',
    'J': 'snare.wav',
    'K': 'tink.wav',
    'L': 'tom.wav'
}

const criarDiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto;
    document.getElementById('container').appendChild(div);
}

criarDiv();

const exibirSons = (sons) => Object.keys(sons).forEach(criarDiv);


function tocarSom(letra) {
    const audio = audios[letra.charCodeAt(0) - 'A'.charCodeAt(0)];
    audio.play();
}
const adicionarEfeito = (letra) => document.getElementById(letra).classList.add('active');



const removerEfeito = (letra) => {
    const div = document.getElementById(letra);
    const removeActive = () => div.classList.remove('active');

    div.addEventListener('transitionend', removeActive);
}



function ativarDiv(evento) {
    let letra = evento.target.id;
    const letraPermitida = sons.hasOwnProperty(letra); //verdadeiro ou falso
    if (letraPermitida) {
        adicionarEfeito(letra);
        tocarSom(letra);
        removerEfeito(letra);
    }

}

exibirSons(sons);
document.getElementById('container').addEventListener('click', ativarDiv);


windown.addEventListener('keydown', ativarDiv);