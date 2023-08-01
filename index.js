'use strict';
const audios = [
    document.getElementById('audio1'),
    document.getElementById('audio2'),
    document.getElementById('audio3'),
    document.getElementById('audio4'),
    document.getElementById('audio5'),
    document.getElementById('audio16'),
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


const tocarSom = () => {
    console.log("oi")
    audios[0].play();
}



function ativarDiv(evento) {
    const letra = evento.target.i;
    tocarSom(letra);


}
exibirSons(sons);
document.getElementById('container').addEventListener('click', tocarSom);