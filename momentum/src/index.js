import './owfont-regular.css'
import './sass/style.scss'

import Player from './js/player'
import Clock from './js/clock';
import Weather from './js/weather';
import Slider from './js/slider';
import Quotes from './js/quotes';
import Settings from './js/settings';

const quotesLib = require('./json/quotes.json')

const playerSection = document.querySelector('.section-player')
const clockSection = document.querySelector('.section-clock');
const weatherSection = document.querySelector('.section-weather');
const quotesSection = document.querySelector('.section-quotes');

const slider = new Slider();
document.body.prepend(slider.elem)

const player = new Player();
playerSection.append(player.elem);

const weather = new Weather();
weatherSection.append(weather.elem);

const clock = new Clock();
clockSection.append(clock.elem)
setInterval(clock.updateClock, 1000);

const quotes = new Quotes();
quotesSection.append(quotes.elem)

const settings = new Settings();
quotesSection.after(settings.elem)

settings.elem.addEventListener('changeImgSource', (event) => {
  slider.imageSource = event.detail;
})

settings.elem.addEventListener('changeLocale', (event) => {
  let lang = ''
  if (event.detail) lang = 'en';
  else lang = 'ru';
  weather.locale = lang;
  clock.locale = lang;
  quotes.locale = lang;
  settings.locale = lang;
  localStorage.setItem('momentumLocale', lang)
})

settings.elem.addEventListener('hideSection', (event) => {
  if (settings.elem.querySelector(`#${event.detail}`).checked) {
    document.querySelector(`.section-${event.detail}`).classList.remove('hidden');
  }
  else document.querySelector(`.section-${event.detail}`).classList.add('hidden');
})

settings.elem.addEventListener('addTags', (event) => {
  slider.tags = event.detail;
})

document.addEventListener('DOMContentLoaded', () => {
  settings.sectionsInputs.forEach(item => {
    if (item.checked) document.querySelector(`.section-${item.id}`).classList.remove('hidden');
    else document.querySelector(`.section-${item.id}`).classList.add('hidden');
  })
})