import './sass/style.scss'

import Clock from './js/clock';

const clockSection = document.querySelector('.section-clock');

const clock = new Clock();
clockSection.append(clock.elem)
setInterval(clock.updateClock, 1000)