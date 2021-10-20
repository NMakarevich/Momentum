import './owfont-regular.css'
import './sass/style.scss'

import Player from './js/player'
import Clock from './js/clock';
import Weather from './js/weather';

const playerSection = document.querySelector('.section-player')
const clockSection = document.querySelector('.section-clock');
const weatherSection = document.querySelector('.section-weather');

const player = new Player();
playerSection.append(player.elem);

const weather = new Weather();
weatherSection.append(weather.elem);


const clock = new Clock();
clockSection.append(clock.elem)
setInterval(clock.updateClock, 1000)