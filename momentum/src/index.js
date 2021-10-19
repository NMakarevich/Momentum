import './sass/style.scss'

import Player from './js/player'
import Clock from './js/clock';

const playerSection = document.querySelector('.section-player')
const clockSection = document.querySelector('.section-clock');

const player = new Player();
playerSection.append(player.elem);

const clock = new Clock();
clockSection.append(clock.elem)
setInterval(clock.updateClock, 1000)