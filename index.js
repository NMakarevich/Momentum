/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/owfont-regular.css":
/*!********************************!*\
  !*** ./src/owfont-regular.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/clock.js":
/*!*************************!*\
  !*** ./src/js/clock.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Clock)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/js/createElement.js");
/* harmony import */ var _localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localization */ "./src/js/localization.js");



class Clock {
  constructor() {
    this._container = null;
    this._username = localStorage.getItem('momentumUsername') || '';
    this._locale = localStorage.getItem('momentumLocale') || 'en';
    this.render();
  }

  get elem() {
    return this._container
  }

  get input() {
    return this._container.querySelector('input');
  }

  set locale(value) {
    this._locale = value;
    this.input.placeholder = _localization__WEBPACK_IMPORTED_MODULE_1__["default"][this._locale].clock.placeholder
  }

  render() {
    this._container = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('container clock-container', this.clockTemplate(this._username));
    this.input.addEventListener('change', this.inputUsername);
  }
  
  inputUsername = () => {
    this._username = this.input.value;
    localStorage.setItem('momentumUsername', this._username)
  }

  clockTemplate(name) {
    return `<div class="time"></div>
    <div class="date"></div>
    <div class="greetings">
      <p class="greeting"></p>
      <input type="text" name="username" id="momentumUsername" placeholder="${_localization__WEBPACK_IMPORTED_MODULE_1__["default"][this._locale].clock.placeholder}" value="${name}">
    </div>`
  }

  updateClock = () => {
    const dateObj = new Date();
    const time = this._container.querySelector('.time');
    const date = this._container.querySelector('.date');
    const greetings = this._container.querySelector('.greetings');
    const greeting = greetings.querySelector('.greeting');
    const options = {weekday: 'long', month: 'long', day: 'numeric'}
    const partOfDay = {
      'ru': ['Доброе утро,&nbsp;', 'Добрый день,&nbsp;', 'Добрый вечер,&nbsp;', 'Доброй ночи,&nbsp;'],
      'en': ['Good morning,&nbsp;', 'Good afternoon,&nbsp;', 'Good evening,&nbsp;', 'Good night,&nbsp;']
    }

    const hour = dateObj.getHours();
    time.innerHTML = dateObj.toLocaleTimeString(this._locale, {hour12: false});
    date.innerHTML = dateObj.toLocaleDateString(this._locale, options);
    greeting.innerHTML = hour >= 0 && hour < 6 ? partOfDay[this._locale][3] 
      : hour >= 6 && hour < 12 ? partOfDay[this._locale][0] 
      : hour >= 12 && hour < 18 ? partOfDay[this._locale][1] 
      : partOfDay[this._locale][2]
  }
}

/***/ }),

/***/ "./src/js/createElement.js":
/*!*********************************!*\
  !*** ./src/js/createElement.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createElement)
/* harmony export */ });
function createElement(className, html) {
  const element = document.createElement('div');
  element.classList = className;
  element.insertAdjacentHTML('afterbegin', html)
  return element;
}

/***/ }),

/***/ "./src/js/localization.js":
/*!********************************!*\
  !*** ./src/js/localization.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'en': {
    weather: {
      city: 'Minsk',
      feels: 'Feels like',
      speed: 'm/s',
      placeholder: 'City is not found'
    },
    clock: {
      placeholder: 'Enter your name'
    },
    settings: {
      lang: 'Language',
      imgSrc: 'Image source',
      tags: 'Set image tags',
      show: 'Show',
      player: 'Player',
      weather: 'Weather',
      clock: 'Clock',
      quotes: 'Quotes'
    }
  },
  'ru': {
    weather: {
      city: 'Минск',
      feels: 'Ощущается как',
      speed: 'м/с',
      placeholder: 'Город не найден'
    },
    clock: {
      placeholder: 'Введите ваше имя'
    },
    settings: {
      lang: 'Язык',
      imgSrc: 'Источник изображений',
      tags: 'Указать теги',
      show: 'Показать',
      player: 'Плеер',
      weather: 'Погода',
      clock: 'Часы',
      quotes: 'Цитаты'
    }
  }
});

/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/js/createElement.js");
/* harmony import */ var _playlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playlist */ "./src/js/playlist.js");



class Player {
  constructor() {
    this._container = null;
    this.currentAudio = 0;
    this.render();
  }

  get elem() {
    return this._container;
  }

  render() {
    this._container = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('container player-container', this.playerTemplate(_playlist__WEBPACK_IMPORTED_MODULE_1__["default"]));
    this.audio = new Audio();
    this.initAudio(this.currentAudio);
    this.eventListeners();
  }

  get playerTitle() {
    return this._container.querySelector('.player-title')
  }

  get playerProgress() {
    return this._container.querySelector('.player-progress')
  }

  get playerCurrentTime() {
    return this._container.querySelector('.current-time')
  }

  get playerDuration() {
    return this._container.querySelector('.duration')
  }

  get volumeButton() {
    return this._container.querySelector('.volume-button');
  }

  get volumeBar() {
    return this._container.querySelector('.player-volume');
  }

  get controls() {
    return this._container.querySelector('.controls-buttons');
  }

  get playList() {
    return this._container.querySelector('.playlist');
  }

  get playlistItems() {
    return this._container.querySelectorAll('.playlist-item');
  }

  getCurrentAudio(item) {
    return this._container.querySelector(`button[data-index="${item}"]`)
  }

  convertTime(time) {
    const seconds = Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60);
    const minutes = Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60);
    return `${minutes}:${seconds}`
  }

  initAudio(number) {
    this.audio.removeEventListener('timeupdate', this.updatePlayerProgress);
    this.audio.src = _playlist__WEBPACK_IMPORTED_MODULE_1__["default"][number].src
    this.audio.currentTime = 0;
    this.playerCurrentTime.textContent = '00:00';
    this.playerDuration.textContent = _playlist__WEBPACK_IMPORTED_MODULE_1__["default"][number].duration;
    this.playerProgress.value = 0;
    this.volumeValue = this.volumeBar.value;
    this.audio.volume = this.volumeValue;
  }

  highlightCurrentAudio = () => {
    this.playlistItems.forEach(item => item.classList.remove('highlight'));
    this.playlistItems[this.currentAudio].classList.add('highlight');
  }

  playAudio = () => {
    this.initAudio(this.currentAudio);
    this.playerTitle.textContent = _playlist__WEBPACK_IMPORTED_MODULE_1__["default"][this.currentAudio].title;
    this.highlightCurrentAudio();
    this.getCurrentAudio(this.currentAudio).classList.remove('paused');
    this.audio.play();
    this.audio.addEventListener('timeupdate', this.updatePlayerProgress);
  }

  updatePlayerProgress = () => {
    let currentTime = this.audio.currentTime;
    const duration = this.audio.duration;
    let percent = Math.floor(currentTime) / Math.floor(duration) * 100 || 0;
    this.playerProgress.value = Math.round(percent);
    this.playerCurrentTime.textContent = this.convertTime(currentTime);
  }
  
  setAudioTime = () => {
    let percent = this.playerProgress.value;
    const duration = this.audio.duration;
    let currentTime = Math.floor(percent) * Math.floor(duration) / 100;
    this.audio.currentTime = Math.floor(currentTime);
    this.audio.addEventListener('timeupdate', this.updatePlayerProgress);
  }

  prevAudio = () => {
    this.getCurrentAudio(this.currentAudio).classList.add('paused');
    this.currentAudio--;
    if (this.currentAudio < 0) this.currentAudio = _playlist__WEBPACK_IMPORTED_MODULE_1__["default"].length - 1;
    this.playAudio();
  }

  nextAudio = () => {
    this.getCurrentAudio(this.currentAudio).classList.add('paused');
    this.currentAudio++;
    if (this.currentAudio > _playlist__WEBPACK_IMPORTED_MODULE_1__["default"].length - 1) this.currentAudio = 0;
    this.playAudio();
  }

  audioControl = (event) => {
    const target = event.target;
    if (target.tagName != 'BUTTON') return;

    if(target.classList.contains('button-prev')) {
      target.nextElementSibling.classList.remove('paused');
      this.prevAudio();
    }

    if(target.classList.contains('button-next')) {
      target.previousElementSibling.classList.remove('paused');
      this.nextAudio();
    }

    if(target.classList.contains('button-play')) {
      if (this.audio.paused) {
        this.audio.addEventListener('timeupdate', this.updatePlayerProgress);
        target.classList.toggle('paused');
        this.getCurrentAudio(this.currentAudio).classList.remove('paused');
        this.highlightCurrentAudio();
        this.audio.play();
      }
      else {
        this.audio.removeEventListener('timeupdate', this.updatePlayerProgress);
        target.classList.toggle('paused');
        this.getCurrentAudio(this.currentAudio).classList.add('paused');
        this.audio.pause();
      }
    }
  }

  updateVolume = () => {
    this.audio.volume = this.volumeBar.value;
    if (this.audio.volume == 0) {
      this.volumeButton.classList.remove('active');
    }
    else {
      this.volumeButton.classList.add('active');
    }
  }

  volumeControl = () => {
    this.volumeButton.classList.toggle('active');
    if (this.volumeButton.classList.contains('active')) {
      this.audio.volume = this.volumeValue;
      this.volumeBar.value = this.volumeValue;
      this.updateVolume();
    }
    else {
      this.volumeValue = this.audio.volume;
      this.volumeBar.value = 0;
      this.audio.volume = 0;
      this.updateVolume();
    }
  }

  chooseAudioFromPlaylist = (event) => {
    const target = event.target;
    if (target.tagName !== 'BUTTON') return;

    if (this.currentAudio != target.dataset.index) {
      this.getCurrentAudio(this.currentAudio).classList.add('paused');
      target.classList.remove('paused');
      this.currentAudio = target.dataset.index;
      this._container.querySelector('.button-play').classList.remove('paused');
      this.playAudio();
    }
    else if (this.audio.paused) {
      target.classList.remove('paused');
      this.currentAudio = target.dataset.index;
      this._container.querySelector('.button-play').classList.remove('paused');
      this.audio.play();
    }
    else {
      this._container.querySelector('.button-play').classList.add('paused');
      this.getCurrentAudio(this.currentAudio).classList.add('paused');
      this.audio.pause();
    }
  }

  eventListeners() {
    this.controls.addEventListener('click', this.audioControl)
    this.volumeButton.addEventListener('click', this.volumeControl);
    this.volumeBar.addEventListener('input', this.updateVolume);
    this.playerProgress.addEventListener('pointerdown', () => {
      this.audio.removeEventListener('timeupdate', this.updatePlayerProgress);
      this.playerProgress.addEventListener('pointerup', this.setAudioTime)
      this.playerProgress.addEventListener('touchend', this.setAudioTime)
    });
    this.audio.addEventListener('ended', this.nextAudio)
    this.playList.addEventListener('click', this.chooseAudioFromPlaylist)
  }

  playerTemplate(playlist) {
    return `
    <p class="player-title">${playlist[this.currentAudio].title}</p>
    <div class="controls">
      <div class="controls-progress">
        <span class="current-time">00:00</span>
        <input type="range" min="0" max="100" value="0" class="player-progress">
        <span class="duration"></span>
      </div>
      <div class="controls-buttons">
        <button type="button" class="button button-prev" name="prevTrack"></button>
        <button type="button" class="button button-play paused" name="play"></button>
        <button type="button" class="button button-next" name="nextTrack"></button>
      </div>
      <div class="controls-volume">
        <button type="button" class="button volume-button active"></button>  
        <input type="range" min="0" max="1" step="0.01" value="0.5" class="player-volume">
      </div>
    </div>
    <ul class="playlist">
      ${playlist.map((item, index) => 
        `<li class="playlist-item">
          <button type="button" class="button button-item paused" data-index="${index}"></button>
          <span>${item.title}</span>
        </li>`).join('')}
    </ul>`
  }

}

/***/ }),

/***/ "./src/js/playlist.js":
/*!****************************!*\
  !*** ./src/js/playlist.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
  {
    title: 'Intro',
    src: './assets/playlist/0.mp3',
    duration: '02:05'
  },
  {
    title: 'The Lonely Shepherd',
    src: './assets/playlist/1.mp3',
    duration: '04:20'
  },
  {
    title: 'Path',
    src: './assets/playlist/2.mp3',
    duration: '03:08'
  },
  {
    title: 'Running to the Sea',
    src: './assets/playlist/3.mp3',
    duration: '04:54'
  }
]);

/***/ }),

/***/ "./src/js/quotes.js":
/*!**************************!*\
  !*** ./src/js/quotes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Quotes)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/js/createElement.js");


class Quotes {
  constructor() {
    this._container = null;
    this._locale = localStorage.getItem('momentumLocale') || 'en';
    this.render();
  }

  get elem() {
    return this._container;
  }

  get reloadButton() {
    return this._container.querySelector('.button-reload');
  }

  get quote() {
    return this._container.querySelector('.quote')
  }

  get quoteAuthor() {
    return this._container.querySelector('cite')
  }

  set locale(value) {
    this._locale = value;
    this.getQuote();
  }

  changeQuote = () => {
    this.reloadButton.classList.add('animation');
    this.getQuote();
  }

  render() {
    this._container = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('container quotes-container', this.quotesTemplate());
    this.eventListeners();
    this.getQuote();
    setInterval(() => this.getQuote(), 60000)
  }

  eventListeners() {
    this.reloadButton.addEventListener('click', this.changeQuote)
    this.reloadButton.addEventListener('transitionend', () => {
      this.reloadButton.classList.remove('animation');
    })
  }

  async getQuote() {
    const res = await fetch('./json/quotes.json');
    const body = await res.json();
    const array = await body[this._locale];
    const index = Math.floor(Math.random() * (array.length - 1));
    const quote = array[index];
    this.quote.textContent = quote.quote;
    this.quoteAuthor.textContent = quote.author;
  }

  quotesTemplate() {
    return `
    <button type="button" name="reload" class="button button-reload"></button>
    <blockquote>
      <div class="quote"></div>
      <cite></cite>
    </blockquote>
    `
  }
}

/***/ }),

/***/ "./src/js/settings.js":
/*!****************************!*\
  !*** ./src/js/settings.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/js/createElement.js");
/* harmony import */ var _localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localization */ "./src/js/localization.js");



class Settings {
  constructor() {
    this._container = null
    this._locale = localStorage.getItem('momentumLocale') || 'en';
    this.imageSource = localStorage.getItem('momentumImageSource') || 'git';
    this.tags = localStorage.getItem('momentumTags') || '';
    this.sections = {
      player: localStorage.getItem('momentumHidePlayer') || 'true',
      weather: localStorage.getItem('momentumHideWeather') || 'true',
      clock: localStorage.getItem('momentumHideClock') || 'true',
      quotes: localStorage.getItem('momentumHideQuotes') || 'true'
    }
    this.render();
  }

  get elem() {
    return this._container;
  }

  get settingsButton() {
    return this._container.querySelector('.button-settings');
  }

  get textTags() {
    return [
      {
        lang: this._container.querySelector('.language h2')
      },
      {
        imgSrc: this._container.querySelector('.bg-source h2')
      },
      {
        tags: this._container.querySelector('.tags span')
      },
      {
        show: this._container.querySelector('.show-sections h2')
      },
      {
        player: this._container.querySelector('span.player')
      },
      {
        weather: this._container.querySelector('span.weather')
      },
      {
        clock: this._container.querySelector('span.clock')
      },
      {
        quotes: this._container.querySelector('span.quotes')
      }
    ]
  }

  get localeToggle() {
    return this._container.querySelector('input[id="language"]')
  }

  get sourceRadios() {
    return this._container.querySelectorAll('input[name="source"]')
  }

  get sectionsInputs() {
    return this._container.querySelectorAll('.list-section input')
  }

  get tagsContainer() {
    return this._container.querySelector('.tags')
  }

  get tagsInput() {
    return this._container.querySelector('#tags')
  }

  render() {
    this._container = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('settings', this.settingsTemplate());
    this.eventListeners();
  }

  changeImgSource = (event) => {
    if (event.target.checked) {
      this.imageSource = event.target.id;

      const evt = new CustomEvent('changeImgSource', {
        detail: this.imageSource,
        bubles: true
      })
      this.elem.dispatchEvent(evt);
    }

    if (this.imageSource === 'unsplash' 
      || this.imageSource === 'flickr') this.tagsContainer.classList.remove('none');
    else this.tagsContainer.classList.add('none')
  }

  changeLocale = () => {
    const event = new CustomEvent('changeLocale', {
      detail: this.localeToggle.checked,
      bubbles: true
    })
    this.elem.dispatchEvent(event);
    if (this.localeToggle.checked) this._locale = 'en';
    else this._locale = 'ru';
    this.textTags.forEach(tag => {
      const key = Object.keys(tag)[0];
      tag[key].textContent = _localization__WEBPACK_IMPORTED_MODULE_1__["default"][this._locale].settings[key];
    })
  } 

  hideSection = (event) => {
    const evt = new CustomEvent('hideSection', {
      detail: event.target.id,
      bubbles: true
    })
    this.elem.dispatchEvent(evt);
    const Id = event.target.id[0].toUpperCase() + event.target.id.slice(1)
    const item = `momentumHide${Id}`
    localStorage.setItem(item, event.target.checked)
  }

  addTags = () => {
    this.tags = this.tagsInput.value;
    localStorage.setItem('momentumTags', this.tags);
    const event = new CustomEvent('addTags', {
      detail: this.tags,
      bubbles: true
    })
    this.elem.dispatchEvent(event);
  }

  loadSettings = () => {
    if (this._locale === 'en') this.localeToggle.checked = true;
    this.sourceRadios.forEach(item => {
      if (item.id === this.imageSource) item.checked = true;
    });
    this.sectionsInputs.forEach(item => {
      if (this.sections[item.id] === 'true') item.checked = true
    })
    if (this.imageSource === 'unsplash' 
      || this.imageSource === 'flickr') this.tagsContainer.classList.remove('none');
    else this.tagsContainer.classList.add('none')
    this.tagsInput.value = this.tags;
  }

  eventListeners() {
    this.sourceRadios.forEach(radio => {
      radio.addEventListener('change', this.changeImgSource);
    });
    this.localeToggle.addEventListener('change', this.changeLocale);
    this.sectionsInputs.forEach(input => {
      input.addEventListener('change', this.hideSection)
    })
    this.tagsInput.addEventListener('change', this.addTags)
    document.addEventListener('DOMContentLoaded', this.loadSettings)
  }

  settingsTemplate() {
    return `
    <button type="button" class="button button-settings"></button>
    <div class="settings-container hidden">
      <div class="language">
        <h2>${_localization__WEBPACK_IMPORTED_MODULE_1__["default"][this._locale].settings.lang}</h2>
        <div>
          <span>Ru</span>
          <input type="checkbox" name="language" id="language"><label for="language" class="toggle"></label>
          <span>En</span>
        </div>
      </div>
      <div class="bg-source">
        <h2>${_localization__WEBPACK_IMPORTED_MODULE_1__["default"][this._locale].settings.imgSrc}</h2>
        <div>
          <ul class="list list-source">
            <li class="list--item">
              <span class="git">GitHub</span>
              <input type="radio" name="source" id="git" checked>
              <label for="git"><span></span></label>
            </li>
            <li class="list--item">
              <span class="unsplash">Unsplash API</span>
              <input type="radio" name="source" id="unsplash">
              <label for="unsplash"><span></span></label>
            </li>
            <li class="list--item">
              <span class="flickr">Flickr API</span>
              <input type="radio" name="source" id="flickr">
              <label for="flickr"><span></span></label>
            </li>
          </ul>
          <div class="tags none">
            <span>${_localization__WEBPACK_IMPORTED_MODULE_1__["default"][this._locale].settings.tags}</span>
            <input type="text" name="tags" id="tags">
          </div>
        </div>
      </div>
      <div class="show-sections">
        <h2>${_localization__WEBPACK_IMPORTED_MODULE_1__["default"][this._locale].settings.show}</h2>
        <ul class="list list-section">
          <li class="list--item">
            <span class="player">${_localization__WEBPACK_IMPORTED_MODULE_1__["default"][this._locale].settings.player}</span>
            <input type="checkbox" name="player" id="player"><label for="player" class="toggle"></label>
          </li>
          <li class="list--item">
            <span class="weather">${_localization__WEBPACK_IMPORTED_MODULE_1__["default"][this._locale].settings.weather}</span>
            <input type="checkbox" name="weather" id="weather"><label for="weather" class="toggle"></label>
          </li>
          <li class="list--item">
            <span class="clock">${_localization__WEBPACK_IMPORTED_MODULE_1__["default"][this._locale].settings.clock}</span>
            <input type="checkbox" name="clock" id="clock"><label for="clock" class="toggle"></label>
          </li>
          <li class="list--item">
            <span class="quotes">${_localization__WEBPACK_IMPORTED_MODULE_1__["default"][this._locale].settings.quotes}</span>
            <input type="checkbox" name="quotes" id="quotes"><label for="quotes" class="toggle"></label>
          </li>
        </ul>
      </div>
    </div>
    `
  }
}

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slider)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/js/createElement.js");


class Slider {
  constructor() {
    this._container = null;
    this.number = null;
    this._tags = localStorage.getItem('momentumTags') || '';
    this._imageSource = localStorage.getItem('momentumImageSource') || 'git';
    this.flickrCollection = [];
    this.render();
  }

  render() {
    document.body.style.backgroundColor = '#B3B3B3'
    this._container = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('slider-buttons', this.sliderTemplate());
    this.number = this.getRandomNum();
    this.setBg();
    this._container.addEventListener('click', this.changeBackground);
  }

  get elem() {
    return this._container;
  }

  set imageSource(value) {
    this._imageSource = value;
    localStorage.setItem('momentumImageSource', this._imageSource);
    this.setBg();
  }

  set tags(value) {
    this._tags = value;
    this.setBg();
  } 

  getTimeOfDay() {
    const hour = new Date().getHours();
    return hour >= 0 && hour < 6 ? 'night' :
      hour >= 6 && hour < 12 ? 'morning' :
      hour >= 12 && hour < 18 ? 'afternoon' : 'evening';
  }

  getRandomNum() {
    return Math.floor(Math.random() * 19) + 1;
  }

  changeBackground = (event) => {
    const target = event.target;
    if(target.tagName !== 'BUTTON') return;

    if(target.classList.contains('button-prev')) {
      this.number === 1 ? this.number = 20 : this.number--;
      this.setBg()
    }
    else {
      this.number === 20 ? this.number = 1 : this.number++;
      this.setBg();
    }
  }

  async setBg() {
    if(this._imageSource == 'git') this.setBgGit();
    if(this._imageSource == 'unsplash') this.setBgUnsplash();
    if(this._imageSource == 'flickr') this.setBgFlickr();
  }

  async setBgGit() {
    const number = this.number < 10 ? `0${this.number}` : this.number;
    const res = await fetch(`https://raw.githubusercontent.com/NMakarevich/stage1-tasks/assets/images/${this.getTimeOfDay()}/${number}.jpg`);
    const blob = await res.blob(); 
    const url = URL.createObjectURL(blob);
    document.body.style.backgroundImage = `url(${url})`
  }

  async setBgUnsplash() {
    const res = await fetch(`https://api.unsplash.com/photos/random/?client_id=iOl0nDotHygXF4pVzFBy3sEQB0V3pkCBbZF8pblRz8Y&orientation=landscape&query=${this.getTimeOfDay()},${this._tags}`)
    const body = await res.json();
    const regular = await body.urls.regular;
    const img = await fetch(regular);
    const blob = await img.blob();
    const url = URL.createObjectURL(blob)
    document.body.style.backgroundImage = `url(${url})`;
  }

  async setBgFlickr() {
    if (this.flickrCollection.length == 0) {
      const res = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=26e8f99f024428ff261410fb77ad5110&tags=${this.getTimeOfDay()},${this._tags}&tag_mode=all&extras=url_o&format=json&nojsoncallback=1`)
      const body = await res.json();
      this.flickrCollection = await body.photos.photo.filter(item => item.url_o);
    }
    const randomIndex = Math.floor(Math.random() * this.flickrCollection.length);
    const img = await fetch(this.flickrCollection[randomIndex].url_o);
    const blob = await img.blob();
    const url = URL.createObjectURL(blob)
    document.body.style.backgroundImage = `url(${url})`;
  }

  sliderTemplate() {
    return `
    <button type="button" name="prev-slide" class="button button-prev"></button>
    <button type="button" name="next-slide" class="button button-next"></button>
    `
  }
}

/***/ }),

/***/ "./src/js/weather.js":
/*!***************************!*\
  !*** ./src/js/weather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Weather)
/* harmony export */ });
/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ "./src/js/createElement.js");
/* harmony import */ var _localization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localization */ "./src/js/localization.js");



class Weather {
  constructor() {
    this._container = null;
    this._locale = localStorage.getItem('momentumLocale') || 'en';
    this.city = localStorage.getItem('momentumCity') || _localization__WEBPACK_IMPORTED_MODULE_1__["default"][this._locale].weather.city;
    this.render();
  }

  render() {
    this._container = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__["default"])('container weather-container', this.weatherTemplate(this.city));
    this.getWeather(this.city, this._locale);
    this.inputCity.addEventListener('change', this.changeCity)
  }

  get elem() {
    return this._container;
  }

  get inputCity() {
    return this._container.querySelector('.city');
  }

  get icon() {
    return this._container.querySelector('.icon');
  }

  get temperature() {
    return this._container.querySelector('.temperature');
  }

  get description() {
    return this._container.querySelector('.description')
  }

  get feelsTemp() {
    return this._container.querySelector('.feels')
  }

  get wind() {
    return this._container.querySelector('.wind')
  }

  get humidity() {
    return this._container.querySelector('.humidity')
  }

  set locale(value) {
    this._locale = value;
    this.getWeather(this.city, this._locale)
  }

  changeCity = () => {
    if (this.inputCity.value) {
      this.city = this.inputCity.value;
      this.getWeather(this.city, this._locale);
    }
    else {
      this.inputCity.setAttribute('placeholder', _localization__WEBPACK_IMPORTED_MODULE_1__["default"][this._locale].weather.placeholder)
    }
  }

  async getWeather(city, lang) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b390d0382bd27b3ec995a6e51e4ddb90&units=metric&lang=${lang}`
    const res = await fetch(url);
    if (res.status === 200) {
      const data = await res.json();
      this.temperature.textContent = Math.round(data.main.temp);
      this.icon.className = 'icon owf';
      this.icon.classList.add(`owf-${data.weather[0].id}`);
      this.inputCity.value = data.name;
      this.description.textContent = data.weather[0].description;
      this.feelsTemp.textContent = `${_localization__WEBPACK_IMPORTED_MODULE_1__["default"][this._locale].weather.feels}  ${Math.round(data.main.feels_like)}° C`
      this.wind.textContent = `${Math.round(data.wind.speed)} ${_localization__WEBPACK_IMPORTED_MODULE_1__["default"][this._locale].weather.speed}`;
      this.humidity.textContent = `${data.main.humidity}%`;
      localStorage.setItem('momentumCity', this.inputCity.value);
    }
    else {
      this.inputCity.value = '';
      this.inputCity.setAttribute('placeholder', _localization__WEBPACK_IMPORTED_MODULE_1__["default"][this._locale].weather.placeholder);
    }
  }

  weatherTemplate(city) {
    return `
    <input type="text" name="city" value="${city}" class="city">
    <div class="icon-temperature">
      <i class="icon owf"></i><div><span class="temperature"></span>&deg; C</div>
    </div>
    <div class="weather-description">
      <span class="description"></span>
      <div class="feels"><span>&deg; C</span></div>
    </div>
    <div class="wind-humidity">
      <span class="wind"></span>
      <span class="humidity"</span>
    </div>
    `
  }
}

/***/ }),

/***/ "./src/json/quotes.json":
/*!******************************!*\
  !*** ./src/json/quotes.json ***!
  \******************************/
/***/ ((module) => {

module.exports = JSON.parse('{"en":[{"quote":"Now, God be praised, that to believing souls gives light in darkness, comfort in despair.","author":"William Shakespeare"},{"quote":"I want to be thoroughly used up when I die, for the harder I work the more I live. I rejoice in life for its own sake.","author":"George Bernard Shaw"},{"quote":"There is nothing either good or bad but thinking makes it so.","author":"William Shakespeare"},{"quote":"The debt we owe to the play of imagination is incalculable.","author":"Carl Jung"},{"quote":"Man is but a reed, the most feeble thing in nature, but he is a thinking reed.","author":"Blaise Pascal"},{"quote":"My trade and art is to live.","author":"Michel de Montaigne"},{"quote":"There is no king who has not had a slave among his ancestors, and no slave who has not had a king among his.","author":"Helen Keller"},{"quote":"All my life, whenever it comes time to make a decision, I make it and forget about it.","author":"Harry S. Truman"},{"quote":"Notice what happens when you follow your intuitive feelings. The result is usually increased energy and power, a sense of things flowing.","author":"Shakti Gawain"},{"quote":"Only one who devotes himself to a cause with his whole strength and soul can be a true master. For this reason mastery demands all of a person.","author":"Albert Einstein"},{"quote":"So long as the memory of certain beloved friends lives in my heart, I shall say that life is good.","author":"Helen Keller"},{"quote":"The object of life is not to be on the side of the majority, but to escape finding oneself in the ranks of the insane.","author":"Marcus Aurelius"},{"quote":"As a well-spent day brings happy sleep, so a life well spent brings happy death.","author":"Leonardo da Vinci"},{"quote":"The feeling of friendship is like that of being comfortably filled with roast beef love, like being enlivened with champagne.","author":"Samuel Johnson"},{"quote":"The basic fact about human existence is not that it is a tragedy, but that it is a bore. It is not so much a war as an endless standing in line.","author":"H. L. Mencken"},{"quote":"Lost time is never found again, and what we call time enough always proves little enough. Let us then be up and doing, and doing to a purpose.","author":"Benjamin Franklin"},{"quote":"No group and no government can properly prescribe precisely what should constitute the body of knowledge with which true education is concerned.","author":"Franklin D. Roosevelt"},{"quote":"One man\'s ways may be as good as another\'s, but we all like our own best.","author":"Jane Austen"},{"quote":"Remember that credit is money.","author":"Benjamin Franklin"},{"quote":"Change does not roll in on the wheels of inevitability, but comes through continuous struggle. And so we must straighten our backs and work for our freedom. A man can\'t ride you unless your back is bent.","author":"Martin Luther King, Jr."},{"quote":"War grows out of the desire of the individual to gain advantage at the expense of his fellow man.","author":"Napoleon Hill"},{"quote":"Doubtless there are things in nature which have not yet been seen. If an artist discovers them, he opens the way for his successors.","author":"Paul Cezanne"},{"quote":"The best thinking has been done in solitude. The worst has been done in turmoil.","author":"Thomas A. Edison"},{"quote":"If a dog will not come to you after having looked you in the face, you should go home and examine your conscience.","author":"Woodrow Wilson"},{"quote":"The best way out of a difficulty is through it.","author":"Will Rogers"},{"quote":"A popular government without popular information or the means of acquiring it, is but a prologue to a farce, or a tragedy, or perhaps both.","author":"James Madison"},{"quote":"The secret to building large apps is never build large apps. Break your applications into small pieces. Then, assemble those testable, bite-sized pieces into your big application.","author":"Justin Meyer"},{"quote":"Touch a scientist and you touch a child.","author":"Ray Bradbury"},{"quote":"Ezra was right half the time, and when he was wrong, he was so wrong you were never in any doubt about it.","author":"Ernest Hemingway"},{"quote":"The stone age came to an end not for lack of stones. And the oil age will come to an end not for lack of oil.","author":"Sheikh Yamani"},{"quote":"No matter what you\'ve done for yourself or for humanity, if you can\'t look back on having given love and attention to your own family, what have you really accomplished?","author":"Lee Iacocca"},{"quote":"Live the life you\'ve dreamed.","author":"Henry David Thoreau"},{"quote":"Rightly defined, philosophy is simply the love of wisdom.","author":"Marcus Tullius Cicero"},{"quote":"There are trivial truths and the great truths. The opposite of a trivial truth is plainly false. The opposite of a great truth is also true.","author":"Niels Bohr"},{"quote":"I’ll stop wearing black when they make a darker color.","author":"Wednesday Addams"},{"quote":"Guilt is perhaps the most painful companion of death.","author":"Coco Chanel"},{"quote":"If you believe in what you are doing, then let nothing hold you up in your work. Much of the best work of the world has been done against seeming impossibilities. The thing is to get the work done.","author":"Dale Carnegie"},{"quote":"Show me a man who lives alone and has a perpetually clean kitchen, and 8 times out of 9 I\'ll show you a man with detestable spiritual qualities.","author":"Charles Bukowski"},{"quote":"Men are so necessarily mad, that not to be mad would amount to another form of madness.","author":"Blaise Pascal"},{"quote":"The thing you fear most has no power. Your fear of it is what has the power. Facing the truth really will set you free.","author":"Oprah Winfrey"},{"quote":"Never let your schooling interfere with your education.","author":"Mark Twain"},{"quote":"Work hard, stay positive, and get up early. It\'s the best part of the day.","author":"George Allen, Sr."},{"quote":"It is the nature of all greatness not to be exact.","author":"Edmund Burke"},{"quote":"I found I could say things with color and shapes that I couldn\'t say any other way - things I had no words for.","author":"Georgia O\'Keeffe"},{"quote":"May your trails be crooked, winding, lonesome, dangerous, leading to the most amazing view. May your mountains rise into and above the clouds.","author":"Edward Abbey"},{"quote":"Were I called on to define, very briefly, the term Art, I should call it \'the reproduction of what the Senses perceive in Nature through the veil of the soul.\' The mere imitation, however accurate, of what is in Nature, entitles no man to the sacred name of \'Artist.\'","author":"Edgar Allan Poe"},{"quote":"It\'s amazing that the amount of news that happens in the world every day always just exactly fits the newspaper.","author":"Jerry Seinfeld"},{"quote":"One does not leave a convivial party before closing time.","author":"Winston Churchill"},{"quote":"I am sorry to think that you do not get a man\'s most effective criticism until you provoke him. Severe truth is expressed with some bitterness.","author":"Henry David Thoreau"},{"quote":"The way you think, the way you behave, the way you eat, can influence your life by 30 to 50 years.","author":"Deepak Chopra"}],"ru":[{"quote":"Слава Богу, что верующим душам свет во тьме, утешение в отчаянии","author":"Уильям Шекспир"},{"quote":"Я хочу, чтобы меня полностью истощили, когда я умру, потому что чем больше я работаю, тем больше я живу. Я радуюсь жизни ради нее самой.","author":"Джордж Бернард Шоу"},{"quote":"Нет ничего плохого или хорошего, но мышление делает это так","author":"Уильям Шекспир"},{"quote":"Наш долг перед игрой воображения неисчислим.","author":"Карл Юнг"},{"quote":"Человек - всего лишь тростник, самая слабая вещь в природе, но он тростник мыслящий.","author":"Блез Паскаль"},{"quote":"Моя профессия и искусство - жить.","author":"Мишель де Монтень"},{"quote":"Нет короля, у которого не было бы раба среди своих предков, и ни одного раба, у которого не было бы царя среди своих.","author":"Хелен Келлер"},{"quote":"Всю жизнь, когда приходит время принять решение, я его принимаю и забываю об этом.","author":"Гарри С. Трумэн"},{"quote":"Обратите внимание на то, что происходит, когда вы следуете своим интуитивным ощущениям. Результатом обычно является повышение энергии и силы, ощущение потока вещей.","author":"Шакти Гавейн"},{"quote":"Только тот, кто посвящает себя делу всей своей силой и душой, может быть настоящим господином. По этой причине мастерство требует от человека всего","author":"Альберт Эйнштейн"},{"quote":"Пока в моем сердце живет память о некоторых любимых друзьях, я буду говорить, что жизнь хороша.","author":"Хелен Келлер"},{"quote":"Цель жизни не в том, чтобы быть на стороне большинства, а в том, чтобы не оказаться в рядах безумцев.","author":"Марк Аврелий"},{"quote":"Как хорошо проведенный день приносит счастливый сон, так хорошо проведенная жизнь приносит счастливую смерть.","author":"Леонардо да Винчи"},{"quote":"Ощущение дружбы похоже на ощущение комфорта, наполненного любовью к ростбифу, как будто вас оживляет шампанское.","author":"Сэмюэл Джонсон"},{"quote":"Основной факт человеческого существования не в том, что это трагедия, а в том, что это утомительно. Это не столько война, сколько бесконечная очередь.","author":"Х. Л. Менкен"},{"quote":"Потерянное время больше никогда не будет найдено, и то, что мы называем временем, всегда мало что доказывает. Давайте тогда будем бодрствовать и делать, и делать с определенной целью.","author":"Бенджамин Франклин"},{"quote":"Никакая группа и никакое правительство не могут должным образом предписывать, что именно должно составлять совокупность знаний, с которыми связано настоящее образование","author":"Франклин Д. Рузвельт"},{"quote":"Пути одного человека могут быть такими же хорошими, как и пути другого, но все мы любим свои собственные.","author":"Джейн Остин"},{"quote":"Помните, что кредит - это деньги.","author":"Бенджамин Франклин"},{"quote":"Изменения не катятся на колесах неизбежности, а происходят в результате непрерывной борьбы. Поэтому мы должны выпрямлять спину и работать во имя нашей свободы. Мужчина не может оседлать вас, если ваша спина не согнута.","author":"Мартин Лютер Кинг-младший"},{"quote":"Война проистекает из желания человека получить преимущество за счет своего ближнего","author":"Наполеон Хилл"},{"quote":"Несомненно, в природе есть вещи, которых еще не видели. Если художник их обнаруживает, он открывает дорогу своим преемникам.","author":"Поль Сезанн"},{"quote":"Лучшее мышление было сделано в одиночестве. Худшее было сделано в суматохе.","author":"Томас А. Эдисон"},{"quote":"Если собака не подойдет к вам, посмотрев вам в лицо, вы должны пойти домой и проверить свою совесть.","author":"Вудро Вильсон"},{"quote":"Лучший выход из затруднения - это пройти.","author":"Уилл Роджерс"},{"quote":"Популярное правительство без популярной информации или средств ее получения - всего лишь пролог к ​​фарсу или трагедии, или, возможно, к тому и другому.","author":"Джеймс Мэдисон"},{"quote":"Секрет создания больших приложений никогда не в том, чтобы создавать большие приложения. Разбейте свои приложения на маленькие части. Затем соберите эти тестируемые кусочки небольшого размера в свое большое приложение.","author":"Джастин Мейер"},{"quote":"Прикоснись к ученому, и ты прикоснешься к ребенку.","author":"Рэй Брэдбери"},{"quote":"Эзра был прав в половине случаев, а когда он был неправ, он был настолько неправ, что вы никогда не сомневались в этом.","author":"Эрнест Хемингуэй"},{"quote":"Каменный век закончился не из-за отсутствия камней. И нефтяной век закончится не из-за отсутствия нефти.","author":"Шейх Ямани"},{"quote":"Неважно, что вы сделали для себя или для человечества, если вы не можете оглянуться назад, отдавая любовь и внимание своей семье, чего вы действительно достигли?","author":"Ли Якокка"},{"quote":"Живи той жизнью, о которой мечтали.","author":"Генри Дэвид Торо"},{"quote":"При правильном определении философия - это просто любовь к мудрости","author":"Марк Туллий Цицерон"},{"quote":"Есть тривиальные истины и великие истины. Противоположность тривиальной истине явно ложна. Противоположность великой истине также истинна","author":"Нильс Бор"},{"quote":"Я перестану носить черное, когда они сделают цвет темнее.","author":"Среда Аддамс"},{"quote":"Вина, пожалуй, самый мучительный спутник смерти.","author":"Коко Шанель"},{"quote":"Если вы верите в то, что делаете, не позволяйте ничему удерживать вас в работе. Большая часть лучшей работы в мире была сделана против кажущихся невозможным. Дело в том, чтобы выполнить работу.","author":"Дейл Карнеги"},{"quote":"Покажи мне человека, который живет один и имеет постоянно чистую кухню, и 8 раз из 9 я покажу тебе человека с отвратительными духовными качествами.","author":"Чарльз Буковски"},{"quote":"Мужчины настолько неизбежно сумасшедшие, что отсутствие злости равносильно другой форме безумия.","author":"Блез Паскаль"},{"quote":"То, чего вы боитесь больше всего, не имеет силы. Ваш страх перед этим имеет силу. Столкновение с правдой действительно освободит вас.","author":"Опра Уинфри"},{"quote":"Никогда не позволяйте учебе мешать вашему образованию.","author":"Марк Твен"},{"quote":"Упорно работай, оставайся позитивным и рано вставай. Это лучшая часть дня","author":"Джордж Аллен-старший"},{"quote":"Не быть точным - это природа всякого величия","author":"Эдмунд Берк"},{"quote":"Я обнаружил, что могу говорить с помощью цвета и формы вещи, которые я не могу сказать по-другому, - вещи, для которых у меня не было слов.","author":"Джорджия О\'Киф"},{"quote":"Пусть ваши тропы будут извилистыми, извилистыми, одинокими, опасными, ведущими к самому удивительному виду. Пусть ваши горы поднимутся в облака и над ними.","author":"Эбби Эдварда"},{"quote":"Если бы меня попросили очень кратко определить термин \'искусство\', я бы назвал его \'воспроизведением того, что чувства воспринимают в природе через завесу души\'. Простое подражание, каким бы точным оно ни было, тому, что есть в Природе, никому не дает права на священное имя \'Художник\'","author":"Эдгар Аллан По"},{"quote":"Удивительно, что количество новостей, которые происходят в мире каждый день, всегда точно соответствует газетному","author":"Джерри Сайнфелд"},{"quote":"Праздничную вечеринку нельзя уйти до закрытия.","author":"Уинстон Черчилль"},{"quote":"Мне жаль думать, что вы не получите самой эффективной критики от мужчины, пока не спровоцируете его. Суровая правда выражается с некоторой горечью.","author":"Генри Дэвид Торо"},{"quote":"То, как вы думаете, как вы себя ведете, как вы едите, может повлиять на вашу жизнь на 30-50 лет.","author":"Дипак Чопра"}]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _owfont_regular_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./owfont-regular.css */ "./src/owfont-regular.css");
/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sass/style.scss */ "./src/sass/style.scss");
/* harmony import */ var _js_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/player */ "./src/js/player.js");
/* harmony import */ var _js_clock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/clock */ "./src/js/clock.js");
/* harmony import */ var _js_weather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/weather */ "./src/js/weather.js");
/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/slider */ "./src/js/slider.js");
/* harmony import */ var _js_quotes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/quotes */ "./src/js/quotes.js");
/* harmony import */ var _js_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/settings */ "./src/js/settings.js");










const quotesLib = __webpack_require__(/*! ./json/quotes.json */ "./src/json/quotes.json")

const playerSection = document.querySelector('.section-player')
const clockSection = document.querySelector('.section-clock');
const weatherSection = document.querySelector('.section-weather');
const quotesSection = document.querySelector('.section-quotes');

const slider = new _js_slider__WEBPACK_IMPORTED_MODULE_5__["default"]();
document.body.prepend(slider.elem)

const player = new _js_player__WEBPACK_IMPORTED_MODULE_2__["default"]();
playerSection.append(player.elem);

const weather = new _js_weather__WEBPACK_IMPORTED_MODULE_4__["default"]();
weatherSection.append(weather.elem);

const clock = new _js_clock__WEBPACK_IMPORTED_MODULE_3__["default"]();
clockSection.append(clock.elem)
setInterval(clock.updateClock, 1000);

const quotes = new _js_quotes__WEBPACK_IMPORTED_MODULE_6__["default"]();
quotesSection.append(quotes.elem)

const settings = new _js_settings__WEBPACK_IMPORTED_MODULE_7__["default"]();
quotesSection.after(settings.elem);
const settingsContainer = settings.elem.querySelector('.settings-container');

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

settings.settingsButton.addEventListener('click', () => {
  if (settingsContainer.classList.contains('hidden')) settingsContainer.classList.remove('hidden')
  else settingsContainer.classList.add('hidden')
})

document.addEventListener('click', (event) => {
  if (event.target == settings.settingsButton || event.target.closest('.settings-container')) return
  if (!settingsContainer.classList.contains('hidden')) settingsContainer.classList.add('hidden')
})

document.addEventListener('DOMContentLoaded', () => {
  settings.sectionsInputs.forEach(item => {
    if (item.checked) document.querySelector(`.section-${item.id}`).classList.remove('hidden');
    else document.querySelector(`.section-${item.id}`).classList.add('hidden');
  })
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDRDtBQUNBO0FBQ0Esc0NBQXNDLGFBQWE7QUFDbkQsdUNBQXVDLGFBQWE7QUFDcEQ7QUFDQSwwQ0FBMEMsYUFBYTtBQUN2RCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxRQUFRO0FBQ2pFLDRDQUE0QyxRQUFRO0FBQ3BELEdBQUc7QUFDSCxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb21lbnR1bS8uL3NyYy9zYXNzL3N0eWxlLnNjc3M/M2FjNCIsIndlYnBhY2s6Ly9tb21lbnR1bS8uL3NyYy9vd2ZvbnQtcmVndWxhci5jc3M/ZTBlNyIsIndlYnBhY2s6Ly9tb21lbnR1bS8uL3NyYy9qcy9jbG9jay5qcyIsIndlYnBhY2s6Ly9tb21lbnR1bS8uL3NyYy9qcy9jcmVhdGVFbGVtZW50LmpzIiwid2VicGFjazovL21vbWVudHVtLy4vc3JjL2pzL2xvY2FsaXphdGlvbi5qcyIsIndlYnBhY2s6Ly9tb21lbnR1bS8uL3NyYy9qcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vbW9tZW50dW0vLi9zcmMvanMvcGxheWxpc3QuanMiLCJ3ZWJwYWNrOi8vbW9tZW50dW0vLi9zcmMvanMvcXVvdGVzLmpzIiwid2VicGFjazovL21vbWVudHVtLy4vc3JjL2pzL3NldHRpbmdzLmpzIiwid2VicGFjazovL21vbWVudHVtLy4vc3JjL2pzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9tb21lbnR1bS8uL3NyYy9qcy93ZWF0aGVyLmpzIiwid2VicGFjazovL21vbWVudHVtL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL21vbWVudHVtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9tb21lbnR1bS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL21vbWVudHVtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbW9tZW50dW0vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xyXG5pbXBvcnQgbG9jYWxpemF0aW9uIGZyb20gXCIuL2xvY2FsaXphdGlvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvY2sge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gbnVsbDtcclxuICAgIHRoaXMuX3VzZXJuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vbWVudHVtVXNlcm5hbWUnKSB8fCAnJztcclxuICAgIHRoaXMuX2xvY2FsZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb21lbnR1bUxvY2FsZScpIHx8ICdlbic7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGVsZW0oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyXHJcbiAgfVxyXG5cclxuICBnZXQgaW5wdXQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbiAgfVxyXG5cclxuICBzZXQgbG9jYWxlKHZhbHVlKSB7XHJcbiAgICB0aGlzLl9sb2NhbGUgPSB2YWx1ZTtcclxuICAgIHRoaXMuaW5wdXQucGxhY2Vob2xkZXIgPSBsb2NhbGl6YXRpb25bdGhpcy5fbG9jYWxlXS5jbG9jay5wbGFjZWhvbGRlclxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnY29udGFpbmVyIGNsb2NrLWNvbnRhaW5lcicsIHRoaXMuY2xvY2tUZW1wbGF0ZSh0aGlzLl91c2VybmFtZSkpO1xyXG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmlucHV0VXNlcm5hbWUpO1xyXG4gIH1cclxuICBcclxuICBpbnB1dFVzZXJuYW1lID0gKCkgPT4ge1xyXG4gICAgdGhpcy5fdXNlcm5hbWUgPSB0aGlzLmlucHV0LnZhbHVlO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21vbWVudHVtVXNlcm5hbWUnLCB0aGlzLl91c2VybmFtZSlcclxuICB9XHJcblxyXG4gIGNsb2NrVGVtcGxhdGUobmFtZSkge1xyXG4gICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwidGltZVwiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImRhdGVcIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJncmVldGluZ3NcIj5cclxuICAgICAgPHAgY2xhc3M9XCJncmVldGluZ1wiPjwvcD5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInVzZXJuYW1lXCIgaWQ9XCJtb21lbnR1bVVzZXJuYW1lXCIgcGxhY2Vob2xkZXI9XCIke2xvY2FsaXphdGlvblt0aGlzLl9sb2NhbGVdLmNsb2NrLnBsYWNlaG9sZGVyfVwiIHZhbHVlPVwiJHtuYW1lfVwiPlxyXG4gICAgPC9kaXY+YFxyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ2xvY2sgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRlT2JqID0gbmV3IERhdGUoKTtcclxuICAgIGNvbnN0IHRpbWUgPSB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcignLnRpbWUnKTtcclxuICAgIGNvbnN0IGRhdGUgPSB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcignLmRhdGUnKTtcclxuICAgIGNvbnN0IGdyZWV0aW5ncyA9IHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZ3JlZXRpbmdzJyk7XHJcbiAgICBjb25zdCBncmVldGluZyA9IGdyZWV0aW5ncy5xdWVyeVNlbGVjdG9yKCcuZ3JlZXRpbmcnKTtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7d2Vla2RheTogJ2xvbmcnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJ31cclxuICAgIGNvbnN0IHBhcnRPZkRheSA9IHtcclxuICAgICAgJ3J1JzogWyfQlNC+0LHRgNC+0LUg0YPRgtGA0L4sJm5ic3A7JywgJ9CU0L7QsdGA0YvQuSDQtNC10L3RjCwmbmJzcDsnLCAn0JTQvtCx0YDRi9C5INCy0LXRh9C10YAsJm5ic3A7JywgJ9CU0L7QsdGA0L7QuSDQvdC+0YfQuCwmbmJzcDsnXSxcclxuICAgICAgJ2VuJzogWydHb29kIG1vcm5pbmcsJm5ic3A7JywgJ0dvb2QgYWZ0ZXJub29uLCZuYnNwOycsICdHb29kIGV2ZW5pbmcsJm5ic3A7JywgJ0dvb2QgbmlnaHQsJm5ic3A7J11cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBob3VyID0gZGF0ZU9iai5nZXRIb3VycygpO1xyXG4gICAgdGltZS5pbm5lckhUTUwgPSBkYXRlT2JqLnRvTG9jYWxlVGltZVN0cmluZyh0aGlzLl9sb2NhbGUsIHtob3VyMTI6IGZhbHNlfSk7XHJcbiAgICBkYXRlLmlubmVySFRNTCA9IGRhdGVPYmoudG9Mb2NhbGVEYXRlU3RyaW5nKHRoaXMuX2xvY2FsZSwgb3B0aW9ucyk7XHJcbiAgICBncmVldGluZy5pbm5lckhUTUwgPSBob3VyID49IDAgJiYgaG91ciA8IDYgPyBwYXJ0T2ZEYXlbdGhpcy5fbG9jYWxlXVszXSBcclxuICAgICAgOiBob3VyID49IDYgJiYgaG91ciA8IDEyID8gcGFydE9mRGF5W3RoaXMuX2xvY2FsZV1bMF0gXHJcbiAgICAgIDogaG91ciA+PSAxMiAmJiBob3VyIDwgMTggPyBwYXJ0T2ZEYXlbdGhpcy5fbG9jYWxlXVsxXSBcclxuICAgICAgOiBwYXJ0T2ZEYXlbdGhpcy5fbG9jYWxlXVsyXVxyXG4gIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoY2xhc3NOYW1lLCBodG1sKSB7XHJcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGVsZW1lbnQuY2xhc3NMaXN0ID0gY2xhc3NOYW1lO1xyXG4gIGVsZW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgaHRtbClcclxuICByZXR1cm4gZWxlbWVudDtcclxufSIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAnZW4nOiB7XHJcbiAgICB3ZWF0aGVyOiB7XHJcbiAgICAgIGNpdHk6ICdNaW5zaycsXHJcbiAgICAgIGZlZWxzOiAnRmVlbHMgbGlrZScsXHJcbiAgICAgIHNwZWVkOiAnbS9zJyxcclxuICAgICAgcGxhY2Vob2xkZXI6ICdDaXR5IGlzIG5vdCBmb3VuZCdcclxuICAgIH0sXHJcbiAgICBjbG9jazoge1xyXG4gICAgICBwbGFjZWhvbGRlcjogJ0VudGVyIHlvdXIgbmFtZSdcclxuICAgIH0sXHJcbiAgICBzZXR0aW5nczoge1xyXG4gICAgICBsYW5nOiAnTGFuZ3VhZ2UnLFxyXG4gICAgICBpbWdTcmM6ICdJbWFnZSBzb3VyY2UnLFxyXG4gICAgICB0YWdzOiAnU2V0IGltYWdlIHRhZ3MnLFxyXG4gICAgICBzaG93OiAnU2hvdycsXHJcbiAgICAgIHBsYXllcjogJ1BsYXllcicsXHJcbiAgICAgIHdlYXRoZXI6ICdXZWF0aGVyJyxcclxuICAgICAgY2xvY2s6ICdDbG9jaycsXHJcbiAgICAgIHF1b3RlczogJ1F1b3RlcydcclxuICAgIH1cclxuICB9LFxyXG4gICdydSc6IHtcclxuICAgIHdlYXRoZXI6IHtcclxuICAgICAgY2l0eTogJ9Cc0LjQvdGB0LonLFxyXG4gICAgICBmZWVsczogJ9Ce0YnRg9GJ0LDQtdGC0YHRjyDQutCw0LonLFxyXG4gICAgICBzcGVlZDogJ9C8L9GBJyxcclxuICAgICAgcGxhY2Vob2xkZXI6ICfQk9C+0YDQvtC0INC90LUg0L3QsNC50LTQtdC9J1xyXG4gICAgfSxcclxuICAgIGNsb2NrOiB7XHJcbiAgICAgIHBsYWNlaG9sZGVyOiAn0JLQstC10LTQuNGC0LUg0LLQsNGI0LUg0LjQvNGPJ1xyXG4gICAgfSxcclxuICAgIHNldHRpbmdzOiB7XHJcbiAgICAgIGxhbmc6ICfQr9C30YvQuicsXHJcbiAgICAgIGltZ1NyYzogJ9CY0YHRgtC+0YfQvdC40Log0LjQt9C+0LHRgNCw0LbQtdC90LjQuScsXHJcbiAgICAgIHRhZ3M6ICfQo9C60LDQt9Cw0YLRjCDRgtC10LPQuCcsXHJcbiAgICAgIHNob3c6ICfQn9C+0LrQsNC30LDRgtGMJyxcclxuICAgICAgcGxheWVyOiAn0J/Qu9C10LXRgCcsXHJcbiAgICAgIHdlYXRoZXI6ICfQn9C+0LPQvtC00LAnLFxyXG4gICAgICBjbG9jazogJ9Cn0LDRgdGLJyxcclxuICAgICAgcXVvdGVzOiAn0KbQuNGC0LDRgtGLJ1xyXG4gICAgfVxyXG4gIH1cclxufSIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcclxuaW1wb3J0IHBsYXlsaXN0IGZyb20gXCIuL3BsYXlsaXN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gbnVsbDtcclxuICAgIHRoaXMuY3VycmVudEF1ZGlvID0gMDtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZWxlbSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdjb250YWluZXIgcGxheWVyLWNvbnRhaW5lcicsIHRoaXMucGxheWVyVGVtcGxhdGUocGxheWxpc3QpKTtcclxuICAgIHRoaXMuYXVkaW8gPSBuZXcgQXVkaW8oKTtcclxuICAgIHRoaXMuaW5pdEF1ZGlvKHRoaXMuY3VycmVudEF1ZGlvKTtcclxuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIGdldCBwbGF5ZXJUaXRsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcignLnBsYXllci10aXRsZScpXHJcbiAgfVxyXG5cclxuICBnZXQgcGxheWVyUHJvZ3Jlc3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItcHJvZ3Jlc3MnKVxyXG4gIH1cclxuXHJcbiAgZ2V0IHBsYXllckN1cnJlbnRUaW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC10aW1lJylcclxuICB9XHJcblxyXG4gIGdldCBwbGF5ZXJEdXJhdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcignLmR1cmF0aW9uJylcclxuICB9XHJcblxyXG4gIGdldCB2b2x1bWVCdXR0b24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy52b2x1bWUtYnV0dG9uJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgdm9sdW1lQmFyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXZvbHVtZScpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbnRyb2xzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHMtYnV0dG9ucycpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBsYXlMaXN0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucGxheWxpc3QnKTtcclxuICB9XHJcblxyXG4gIGdldCBwbGF5bGlzdEl0ZW1zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWxpc3QtaXRlbScpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q3VycmVudEF1ZGlvKGl0ZW0pIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcihgYnV0dG9uW2RhdGEtaW5kZXg9XCIke2l0ZW19XCJdYClcclxuICB9XHJcblxyXG4gIGNvbnZlcnRUaW1lKHRpbWUpIHtcclxuICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmZsb29yKHRpbWUgJSA2MCkgPCAxMCA/IGAwJHtNYXRoLmZsb29yKHRpbWUgJSA2MCl9YCA6IE1hdGguZmxvb3IodGltZSAlIDYwKTtcclxuICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRpbWUgLyA2MCkgPCAxMCA/IGAwJHtNYXRoLmZsb29yKHRpbWUgLyA2MCl9YCA6IE1hdGguZmxvb3IodGltZSAvIDYwKTtcclxuICAgIHJldHVybiBgJHttaW51dGVzfToke3NlY29uZHN9YFxyXG4gIH1cclxuXHJcbiAgaW5pdEF1ZGlvKG51bWJlcikge1xyXG4gICAgdGhpcy5hdWRpby5yZW1vdmVFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgdGhpcy51cGRhdGVQbGF5ZXJQcm9ncmVzcyk7XHJcbiAgICB0aGlzLmF1ZGlvLnNyYyA9IHBsYXlsaXN0W251bWJlcl0uc3JjXHJcbiAgICB0aGlzLmF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcclxuICAgIHRoaXMucGxheWVyQ3VycmVudFRpbWUudGV4dENvbnRlbnQgPSAnMDA6MDAnO1xyXG4gICAgdGhpcy5wbGF5ZXJEdXJhdGlvbi50ZXh0Q29udGVudCA9IHBsYXlsaXN0W251bWJlcl0uZHVyYXRpb247XHJcbiAgICB0aGlzLnBsYXllclByb2dyZXNzLnZhbHVlID0gMDtcclxuICAgIHRoaXMudm9sdW1lVmFsdWUgPSB0aGlzLnZvbHVtZUJhci52YWx1ZTtcclxuICAgIHRoaXMuYXVkaW8udm9sdW1lID0gdGhpcy52b2x1bWVWYWx1ZTtcclxuICB9XHJcblxyXG4gIGhpZ2hsaWdodEN1cnJlbnRBdWRpbyA9ICgpID0+IHtcclxuICAgIHRoaXMucGxheWxpc3RJdGVtcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQnKSk7XHJcbiAgICB0aGlzLnBsYXlsaXN0SXRlbXNbdGhpcy5jdXJyZW50QXVkaW9dLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpO1xyXG4gIH1cclxuXHJcbiAgcGxheUF1ZGlvID0gKCkgPT4ge1xyXG4gICAgdGhpcy5pbml0QXVkaW8odGhpcy5jdXJyZW50QXVkaW8pO1xyXG4gICAgdGhpcy5wbGF5ZXJUaXRsZS50ZXh0Q29udGVudCA9IHBsYXlsaXN0W3RoaXMuY3VycmVudEF1ZGlvXS50aXRsZTtcclxuICAgIHRoaXMuaGlnaGxpZ2h0Q3VycmVudEF1ZGlvKCk7XHJcbiAgICB0aGlzLmdldEN1cnJlbnRBdWRpbyh0aGlzLmN1cnJlbnRBdWRpbykuY2xhc3NMaXN0LnJlbW92ZSgncGF1c2VkJyk7XHJcbiAgICB0aGlzLmF1ZGlvLnBsYXkoKTtcclxuICAgIHRoaXMuYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIHRoaXMudXBkYXRlUGxheWVyUHJvZ3Jlc3MpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGxheWVyUHJvZ3Jlc3MgPSAoKSA9PiB7XHJcbiAgICBsZXQgY3VycmVudFRpbWUgPSB0aGlzLmF1ZGlvLmN1cnJlbnRUaW1lO1xyXG4gICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLmF1ZGlvLmR1cmF0aW9uO1xyXG4gICAgbGV0IHBlcmNlbnQgPSBNYXRoLmZsb29yKGN1cnJlbnRUaW1lKSAvIE1hdGguZmxvb3IoZHVyYXRpb24pICogMTAwIHx8IDA7XHJcbiAgICB0aGlzLnBsYXllclByb2dyZXNzLnZhbHVlID0gTWF0aC5yb3VuZChwZXJjZW50KTtcclxuICAgIHRoaXMucGxheWVyQ3VycmVudFRpbWUudGV4dENvbnRlbnQgPSB0aGlzLmNvbnZlcnRUaW1lKGN1cnJlbnRUaW1lKTtcclxuICB9XHJcbiAgXHJcbiAgc2V0QXVkaW9UaW1lID0gKCkgPT4ge1xyXG4gICAgbGV0IHBlcmNlbnQgPSB0aGlzLnBsYXllclByb2dyZXNzLnZhbHVlO1xyXG4gICAgY29uc3QgZHVyYXRpb24gPSB0aGlzLmF1ZGlvLmR1cmF0aW9uO1xyXG4gICAgbGV0IGN1cnJlbnRUaW1lID0gTWF0aC5mbG9vcihwZXJjZW50KSAqIE1hdGguZmxvb3IoZHVyYXRpb24pIC8gMTAwO1xyXG4gICAgdGhpcy5hdWRpby5jdXJyZW50VGltZSA9IE1hdGguZmxvb3IoY3VycmVudFRpbWUpO1xyXG4gICAgdGhpcy5hdWRpby5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgdGhpcy51cGRhdGVQbGF5ZXJQcm9ncmVzcyk7XHJcbiAgfVxyXG5cclxuICBwcmV2QXVkaW8gPSAoKSA9PiB7XHJcbiAgICB0aGlzLmdldEN1cnJlbnRBdWRpbyh0aGlzLmN1cnJlbnRBdWRpbykuY2xhc3NMaXN0LmFkZCgncGF1c2VkJyk7XHJcbiAgICB0aGlzLmN1cnJlbnRBdWRpby0tO1xyXG4gICAgaWYgKHRoaXMuY3VycmVudEF1ZGlvIDwgMCkgdGhpcy5jdXJyZW50QXVkaW8gPSBwbGF5bGlzdC5sZW5ndGggLSAxO1xyXG4gICAgdGhpcy5wbGF5QXVkaW8oKTtcclxuICB9XHJcblxyXG4gIG5leHRBdWRpbyA9ICgpID0+IHtcclxuICAgIHRoaXMuZ2V0Q3VycmVudEF1ZGlvKHRoaXMuY3VycmVudEF1ZGlvKS5jbGFzc0xpc3QuYWRkKCdwYXVzZWQnKTtcclxuICAgIHRoaXMuY3VycmVudEF1ZGlvKys7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50QXVkaW8gPiBwbGF5bGlzdC5sZW5ndGggLSAxKSB0aGlzLmN1cnJlbnRBdWRpbyA9IDA7XHJcbiAgICB0aGlzLnBsYXlBdWRpbygpO1xyXG4gIH1cclxuXHJcbiAgYXVkaW9Db250cm9sID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICBpZiAodGFyZ2V0LnRhZ05hbWUgIT0gJ0JVVFRPTicpIHJldHVybjtcclxuXHJcbiAgICBpZih0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidXR0b24tcHJldicpKSB7XHJcbiAgICAgIHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnJlbW92ZSgncGF1c2VkJyk7XHJcbiAgICAgIHRoaXMucHJldkF1ZGlvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYnV0dG9uLW5leHQnKSkge1xyXG4gICAgICB0YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdwYXVzZWQnKTtcclxuICAgICAgdGhpcy5uZXh0QXVkaW8oKTtcclxuICAgIH1cclxuXHJcbiAgICBpZih0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidXR0b24tcGxheScpKSB7XHJcbiAgICAgIGlmICh0aGlzLmF1ZGlvLnBhdXNlZCkge1xyXG4gICAgICAgIHRoaXMuYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIHRoaXMudXBkYXRlUGxheWVyUHJvZ3Jlc3MpO1xyXG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdwYXVzZWQnKTtcclxuICAgICAgICB0aGlzLmdldEN1cnJlbnRBdWRpbyh0aGlzLmN1cnJlbnRBdWRpbykuY2xhc3NMaXN0LnJlbW92ZSgncGF1c2VkJyk7XHJcbiAgICAgICAgdGhpcy5oaWdobGlnaHRDdXJyZW50QXVkaW8oKTtcclxuICAgICAgICB0aGlzLmF1ZGlvLnBsYXkoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmF1ZGlvLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCB0aGlzLnVwZGF0ZVBsYXllclByb2dyZXNzKTtcclxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgncGF1c2VkJyk7XHJcbiAgICAgICAgdGhpcy5nZXRDdXJyZW50QXVkaW8odGhpcy5jdXJyZW50QXVkaW8pLmNsYXNzTGlzdC5hZGQoJ3BhdXNlZCcpO1xyXG4gICAgICAgIHRoaXMuYXVkaW8ucGF1c2UoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlVm9sdW1lID0gKCkgPT4ge1xyXG4gICAgdGhpcy5hdWRpby52b2x1bWUgPSB0aGlzLnZvbHVtZUJhci52YWx1ZTtcclxuICAgIGlmICh0aGlzLmF1ZGlvLnZvbHVtZSA9PSAwKSB7XHJcbiAgICAgIHRoaXMudm9sdW1lQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMudm9sdW1lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdm9sdW1lQ29udHJvbCA9ICgpID0+IHtcclxuICAgIHRoaXMudm9sdW1lQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgaWYgKHRoaXMudm9sdW1lQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgdGhpcy5hdWRpby52b2x1bWUgPSB0aGlzLnZvbHVtZVZhbHVlO1xyXG4gICAgICB0aGlzLnZvbHVtZUJhci52YWx1ZSA9IHRoaXMudm9sdW1lVmFsdWU7XHJcbiAgICAgIHRoaXMudXBkYXRlVm9sdW1lKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy52b2x1bWVWYWx1ZSA9IHRoaXMuYXVkaW8udm9sdW1lO1xyXG4gICAgICB0aGlzLnZvbHVtZUJhci52YWx1ZSA9IDA7XHJcbiAgICAgIHRoaXMuYXVkaW8udm9sdW1lID0gMDtcclxuICAgICAgdGhpcy51cGRhdGVWb2x1bWUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNob29zZUF1ZGlvRnJvbVBsYXlsaXN0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICBpZiAodGFyZ2V0LnRhZ05hbWUgIT09ICdCVVRUT04nKSByZXR1cm47XHJcblxyXG4gICAgaWYgKHRoaXMuY3VycmVudEF1ZGlvICE9IHRhcmdldC5kYXRhc2V0LmluZGV4KSB7XHJcbiAgICAgIHRoaXMuZ2V0Q3VycmVudEF1ZGlvKHRoaXMuY3VycmVudEF1ZGlvKS5jbGFzc0xpc3QuYWRkKCdwYXVzZWQnKTtcclxuICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3BhdXNlZCcpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRBdWRpbyA9IHRhcmdldC5kYXRhc2V0LmluZGV4O1xyXG4gICAgICB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1wbGF5JykuY2xhc3NMaXN0LnJlbW92ZSgncGF1c2VkJyk7XHJcbiAgICAgIHRoaXMucGxheUF1ZGlvKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0aGlzLmF1ZGlvLnBhdXNlZCkge1xyXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgncGF1c2VkJyk7XHJcbiAgICAgIHRoaXMuY3VycmVudEF1ZGlvID0gdGFyZ2V0LmRhdGFzZXQuaW5kZXg7XHJcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXBsYXknKS5jbGFzc0xpc3QucmVtb3ZlKCdwYXVzZWQnKTtcclxuICAgICAgdGhpcy5hdWRpby5wbGF5KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tcGxheScpLmNsYXNzTGlzdC5hZGQoJ3BhdXNlZCcpO1xyXG4gICAgICB0aGlzLmdldEN1cnJlbnRBdWRpbyh0aGlzLmN1cnJlbnRBdWRpbykuY2xhc3NMaXN0LmFkZCgncGF1c2VkJyk7XHJcbiAgICAgIHRoaXMuYXVkaW8ucGF1c2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5jb250cm9scy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYXVkaW9Db250cm9sKVxyXG4gICAgdGhpcy52b2x1bWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnZvbHVtZUNvbnRyb2wpO1xyXG4gICAgdGhpcy52b2x1bWVCYXIuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLnVwZGF0ZVZvbHVtZSk7XHJcbiAgICB0aGlzLnBsYXllclByb2dyZXNzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLmF1ZGlvLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCB0aGlzLnVwZGF0ZVBsYXllclByb2dyZXNzKTtcclxuICAgICAgdGhpcy5wbGF5ZXJQcm9ncmVzcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVydXAnLCB0aGlzLnNldEF1ZGlvVGltZSlcclxuICAgICAgdGhpcy5wbGF5ZXJQcm9ncmVzcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuc2V0QXVkaW9UaW1lKVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgdGhpcy5uZXh0QXVkaW8pXHJcbiAgICB0aGlzLnBsYXlMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaG9vc2VBdWRpb0Zyb21QbGF5bGlzdClcclxuICB9XHJcblxyXG4gIHBsYXllclRlbXBsYXRlKHBsYXlsaXN0KSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPHAgY2xhc3M9XCJwbGF5ZXItdGl0bGVcIj4ke3BsYXlsaXN0W3RoaXMuY3VycmVudEF1ZGlvXS50aXRsZX08L3A+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHNcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xzLXByb2dyZXNzXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjdXJyZW50LXRpbWVcIj4wMDowMDwvc3Bhbj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiIHZhbHVlPVwiMFwiIGNsYXNzPVwicGxheWVyLXByb2dyZXNzXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJkdXJhdGlvblwiPjwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9scy1idXR0b25zXCI+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLXByZXZcIiBuYW1lPVwicHJldlRyYWNrXCI+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLXBsYXkgcGF1c2VkXCIgbmFtZT1cInBsYXlcIj48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tbmV4dFwiIG5hbWU9XCJuZXh0VHJhY2tcIj48L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9scy12b2x1bWVcIj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiB2b2x1bWUtYnV0dG9uIGFjdGl2ZVwiPjwvYnV0dG9uPiAgXHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCIxXCIgc3RlcD1cIjAuMDFcIiB2YWx1ZT1cIjAuNVwiIGNsYXNzPVwicGxheWVyLXZvbHVtZVwiPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHVsIGNsYXNzPVwicGxheWxpc3RcIj5cclxuICAgICAgJHtwbGF5bGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiBcclxuICAgICAgICBgPGxpIGNsYXNzPVwicGxheWxpc3QtaXRlbVwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLWl0ZW0gcGF1c2VkXCIgZGF0YS1pbmRleD1cIiR7aW5kZXh9XCI+PC9idXR0b24+XHJcbiAgICAgICAgICA8c3Bhbj4ke2l0ZW0udGl0bGV9PC9zcGFuPlxyXG4gICAgICAgIDwvbGk+YCkuam9pbignJyl9XHJcbiAgICA8L3VsPmBcclxuICB9XHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnSW50cm8nLFxyXG4gICAgc3JjOiAnLi9hc3NldHMvcGxheWxpc3QvMC5tcDMnLFxyXG4gICAgZHVyYXRpb246ICcwMjowNSdcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnVGhlIExvbmVseSBTaGVwaGVyZCcsXHJcbiAgICBzcmM6ICcuL2Fzc2V0cy9wbGF5bGlzdC8xLm1wMycsXHJcbiAgICBkdXJhdGlvbjogJzA0OjIwJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdQYXRoJyxcclxuICAgIHNyYzogJy4vYXNzZXRzL3BsYXlsaXN0LzIubXAzJyxcclxuICAgIGR1cmF0aW9uOiAnMDM6MDgnXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1J1bm5pbmcgdG8gdGhlIFNlYScsXHJcbiAgICBzcmM6ICcuL2Fzc2V0cy9wbGF5bGlzdC8zLm1wMycsXHJcbiAgICBkdXJhdGlvbjogJzA0OjU0J1xyXG4gIH1cclxuXSIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1b3RlcyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBudWxsO1xyXG4gICAgdGhpcy5fbG9jYWxlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vbWVudHVtTG9jYWxlJykgfHwgJ2VuJztcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZWxlbSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBnZXQgcmVsb2FkQnV0dG9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXJlbG9hZCcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHF1b3RlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucXVvdGUnKVxyXG4gIH1cclxuXHJcbiAgZ2V0IHF1b3RlQXV0aG9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdjaXRlJylcclxuICB9XHJcblxyXG4gIHNldCBsb2NhbGUodmFsdWUpIHtcclxuICAgIHRoaXMuX2xvY2FsZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5nZXRRdW90ZSgpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlUXVvdGUgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnJlbG9hZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhbmltYXRpb24nKTtcclxuICAgIHRoaXMuZ2V0UXVvdGUoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2NvbnRhaW5lciBxdW90ZXMtY29udGFpbmVyJywgdGhpcy5xdW90ZXNUZW1wbGF0ZSgpKTtcclxuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMuZ2V0UXVvdGUoKTtcclxuICAgIHNldEludGVydmFsKCgpID0+IHRoaXMuZ2V0UXVvdGUoKSwgNjAwMDApXHJcbiAgfVxyXG5cclxuICBldmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMucmVsb2FkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGFuZ2VRdW90ZSlcclxuICAgIHRoaXMucmVsb2FkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVsb2FkQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGlvbicpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldFF1b3RlKCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy4vanNvbi9xdW90ZXMuanNvbicpO1xyXG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICBjb25zdCBhcnJheSA9IGF3YWl0IGJvZHlbdGhpcy5fbG9jYWxlXTtcclxuICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGFycmF5Lmxlbmd0aCAtIDEpKTtcclxuICAgIGNvbnN0IHF1b3RlID0gYXJyYXlbaW5kZXhdO1xyXG4gICAgdGhpcy5xdW90ZS50ZXh0Q29udGVudCA9IHF1b3RlLnF1b3RlO1xyXG4gICAgdGhpcy5xdW90ZUF1dGhvci50ZXh0Q29udGVudCA9IHF1b3RlLmF1dGhvcjtcclxuICB9XHJcblxyXG4gIHF1b3Rlc1RlbXBsYXRlKCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG5hbWU9XCJyZWxvYWRcIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tcmVsb2FkXCI+PC9idXR0b24+XHJcbiAgICA8YmxvY2txdW90ZT5cclxuICAgICAgPGRpdiBjbGFzcz1cInF1b3RlXCI+PC9kaXY+XHJcbiAgICAgIDxjaXRlPjwvY2l0ZT5cclxuICAgIDwvYmxvY2txdW90ZT5cclxuICAgIGBcclxuICB9XHJcbn0iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XHJcbmltcG9ydCBsb2NhbGl6YXRpb24gZnJvbSBcIi4vbG9jYWxpemF0aW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5ncyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBudWxsXHJcbiAgICB0aGlzLl9sb2NhbGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9tZW50dW1Mb2NhbGUnKSB8fCAnZW4nO1xyXG4gICAgdGhpcy5pbWFnZVNvdXJjZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb21lbnR1bUltYWdlU291cmNlJykgfHwgJ2dpdCc7XHJcbiAgICB0aGlzLnRhZ3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9tZW50dW1UYWdzJykgfHwgJyc7XHJcbiAgICB0aGlzLnNlY3Rpb25zID0ge1xyXG4gICAgICBwbGF5ZXI6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb21lbnR1bUhpZGVQbGF5ZXInKSB8fCAndHJ1ZScsXHJcbiAgICAgIHdlYXRoZXI6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb21lbnR1bUhpZGVXZWF0aGVyJykgfHwgJ3RydWUnLFxyXG4gICAgICBjbG9jazogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vbWVudHVtSGlkZUNsb2NrJykgfHwgJ3RydWUnLFxyXG4gICAgICBxdW90ZXM6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb21lbnR1bUhpZGVRdW90ZXMnKSB8fCAndHJ1ZSdcclxuICAgIH1cclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZWxlbSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBnZXQgc2V0dGluZ3NCdXR0b24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tc2V0dGluZ3MnKTtcclxuICB9XHJcblxyXG4gIGdldCB0ZXh0VGFncygpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHtcclxuICAgICAgICBsYW5nOiB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcignLmxhbmd1YWdlIGgyJylcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGltZ1NyYzogdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5iZy1zb3VyY2UgaDInKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGFnczogdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy50YWdzIHNwYW4nKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc2hvdzogdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5zaG93LXNlY3Rpb25zIGgyJylcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBsYXllcjogdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4ucGxheWVyJylcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHdlYXRoZXI6IHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzcGFuLndlYXRoZXInKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY2xvY2s6IHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzcGFuLmNsb2NrJylcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHF1b3RlczogdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4ucXVvdGVzJylcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH1cclxuXHJcbiAgZ2V0IGxvY2FsZVRvZ2dsZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXRbaWQ9XCJsYW5ndWFnZVwiXScpXHJcbiAgfVxyXG5cclxuICBnZXQgc291cmNlUmFkaW9zKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtuYW1lPVwic291cmNlXCJdJylcclxuICB9XHJcblxyXG4gIGdldCBzZWN0aW9uc0lucHV0cygpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmxpc3Qtc2VjdGlvbiBpbnB1dCcpXHJcbiAgfVxyXG5cclxuICBnZXQgdGFnc0NvbnRhaW5lcigpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcignLnRhZ3MnKVxyXG4gIH1cclxuXHJcbiAgZ2V0IHRhZ3NJbnB1dCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcignI3RhZ3MnKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnc2V0dGluZ3MnLCB0aGlzLnNldHRpbmdzVGVtcGxhdGUoKSk7XHJcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VJbWdTb3VyY2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChldmVudC50YXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICB0aGlzLmltYWdlU291cmNlID0gZXZlbnQudGFyZ2V0LmlkO1xyXG5cclxuICAgICAgY29uc3QgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2VJbWdTb3VyY2UnLCB7XHJcbiAgICAgICAgZGV0YWlsOiB0aGlzLmltYWdlU291cmNlLFxyXG4gICAgICAgIGJ1YmxlczogdHJ1ZVxyXG4gICAgICB9KVxyXG4gICAgICB0aGlzLmVsZW0uZGlzcGF0Y2hFdmVudChldnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmltYWdlU291cmNlID09PSAndW5zcGxhc2gnIFxyXG4gICAgICB8fCB0aGlzLmltYWdlU291cmNlID09PSAnZmxpY2tyJykgdGhpcy50YWdzQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmUnKTtcclxuICAgIGVsc2UgdGhpcy50YWdzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25vbmUnKVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlTG9jYWxlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZUxvY2FsZScsIHtcclxuICAgICAgZGV0YWlsOiB0aGlzLmxvY2FsZVRvZ2dsZS5jaGVja2VkLFxyXG4gICAgICBidWJibGVzOiB0cnVlXHJcbiAgICB9KVxyXG4gICAgdGhpcy5lbGVtLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gICAgaWYgKHRoaXMubG9jYWxlVG9nZ2xlLmNoZWNrZWQpIHRoaXMuX2xvY2FsZSA9ICdlbic7XHJcbiAgICBlbHNlIHRoaXMuX2xvY2FsZSA9ICdydSc7XHJcbiAgICB0aGlzLnRleHRUYWdzLmZvckVhY2godGFnID0+IHtcclxuICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXModGFnKVswXTtcclxuICAgICAgdGFnW2tleV0udGV4dENvbnRlbnQgPSBsb2NhbGl6YXRpb25bdGhpcy5fbG9jYWxlXS5zZXR0aW5nc1trZXldO1xyXG4gICAgfSlcclxuICB9IFxyXG5cclxuICBoaWRlU2VjdGlvbiA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KCdoaWRlU2VjdGlvbicsIHtcclxuICAgICAgZGV0YWlsOiBldmVudC50YXJnZXQuaWQsXHJcbiAgICAgIGJ1YmJsZXM6IHRydWVcclxuICAgIH0pXHJcbiAgICB0aGlzLmVsZW0uZGlzcGF0Y2hFdmVudChldnQpO1xyXG4gICAgY29uc3QgSWQgPSBldmVudC50YXJnZXQuaWRbMF0udG9VcHBlckNhc2UoKSArIGV2ZW50LnRhcmdldC5pZC5zbGljZSgxKVxyXG4gICAgY29uc3QgaXRlbSA9IGBtb21lbnR1bUhpZGUke0lkfWBcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGl0ZW0sIGV2ZW50LnRhcmdldC5jaGVja2VkKVxyXG4gIH1cclxuXHJcbiAgYWRkVGFncyA9ICgpID0+IHtcclxuICAgIHRoaXMudGFncyA9IHRoaXMudGFnc0lucHV0LnZhbHVlO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21vbWVudHVtVGFncycsIHRoaXMudGFncyk7XHJcbiAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnYWRkVGFncycsIHtcclxuICAgICAgZGV0YWlsOiB0aGlzLnRhZ3MsXHJcbiAgICAgIGJ1YmJsZXM6IHRydWVcclxuICAgIH0pXHJcbiAgICB0aGlzLmVsZW0uZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgfVxyXG5cclxuICBsb2FkU2V0dGluZ3MgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5fbG9jYWxlID09PSAnZW4nKSB0aGlzLmxvY2FsZVRvZ2dsZS5jaGVja2VkID0gdHJ1ZTtcclxuICAgIHRoaXMuc291cmNlUmFkaW9zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmlkID09PSB0aGlzLmltYWdlU291cmNlKSBpdGVtLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNlY3Rpb25zSW5wdXRzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnNlY3Rpb25zW2l0ZW0uaWRdID09PSAndHJ1ZScpIGl0ZW0uY2hlY2tlZCA9IHRydWVcclxuICAgIH0pXHJcbiAgICBpZiAodGhpcy5pbWFnZVNvdXJjZSA9PT0gJ3Vuc3BsYXNoJyBcclxuICAgICAgfHwgdGhpcy5pbWFnZVNvdXJjZSA9PT0gJ2ZsaWNrcicpIHRoaXMudGFnc0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7XHJcbiAgICBlbHNlIHRoaXMudGFnc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdub25lJylcclxuICAgIHRoaXMudGFnc0lucHV0LnZhbHVlID0gdGhpcy50YWdzO1xyXG4gIH1cclxuXHJcbiAgZXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLnNvdXJjZVJhZGlvcy5mb3JFYWNoKHJhZGlvID0+IHtcclxuICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5jaGFuZ2VJbWdTb3VyY2UpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmxvY2FsZVRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNoYW5nZUxvY2FsZSk7XHJcbiAgICB0aGlzLnNlY3Rpb25zSW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhpZGVTZWN0aW9uKVxyXG4gICAgfSlcclxuICAgIHRoaXMudGFnc0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuYWRkVGFncylcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCB0aGlzLmxvYWRTZXR0aW5ncylcclxuICB9XHJcblxyXG4gIHNldHRpbmdzVGVtcGxhdGUoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLXNldHRpbmdzXCI+PC9idXR0b24+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2V0dGluZ3MtY29udGFpbmVyIGhpZGRlblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibGFuZ3VhZ2VcIj5cclxuICAgICAgICA8aDI+JHtsb2NhbGl6YXRpb25bdGhpcy5fbG9jYWxlXS5zZXR0aW5ncy5sYW5nfTwvaDI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuPlJ1PC9zcGFuPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJsYW5ndWFnZVwiIGlkPVwibGFuZ3VhZ2VcIj48bGFiZWwgZm9yPVwibGFuZ3VhZ2VcIiBjbGFzcz1cInRvZ2dsZVwiPjwvbGFiZWw+XHJcbiAgICAgICAgICA8c3Bhbj5Fbjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJiZy1zb3VyY2VcIj5cclxuICAgICAgICA8aDI+JHtsb2NhbGl6YXRpb25bdGhpcy5fbG9jYWxlXS5zZXR0aW5ncy5pbWdTcmN9PC9oMj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHVsIGNsYXNzPVwibGlzdCBsaXN0LXNvdXJjZVwiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJnaXRcIj5HaXRIdWI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJzb3VyY2VcIiBpZD1cImdpdFwiIGNoZWNrZWQ+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImdpdFwiPjxzcGFuPjwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ1bnNwbGFzaFwiPlVuc3BsYXNoIEFQSTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInNvdXJjZVwiIGlkPVwidW5zcGxhc2hcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidW5zcGxhc2hcIj48c3Bhbj48L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC0taXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxpY2tyXCI+RmxpY2tyIEFQSTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInNvdXJjZVwiIGlkPVwiZmxpY2tyXCI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZsaWNrclwiPjxzcGFuPjwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWdzIG5vbmVcIj5cclxuICAgICAgICAgICAgPHNwYW4+JHtsb2NhbGl6YXRpb25bdGhpcy5fbG9jYWxlXS5zZXR0aW5ncy50YWdzfTwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRhZ3NcIiBpZD1cInRhZ3NcIj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNob3ctc2VjdGlvbnNcIj5cclxuICAgICAgICA8aDI+JHtsb2NhbGl6YXRpb25bdGhpcy5fbG9jYWxlXS5zZXR0aW5ncy5zaG93fTwvaDI+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwibGlzdCBsaXN0LXNlY3Rpb25cIj5cclxuICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtLWl0ZW1cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwbGF5ZXJcIj4ke2xvY2FsaXphdGlvblt0aGlzLl9sb2NhbGVdLnNldHRpbmdzLnBsYXllcn08L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicGxheWVyXCIgaWQ9XCJwbGF5ZXJcIj48bGFiZWwgZm9yPVwicGxheWVyXCIgY2xhc3M9XCJ0b2dnbGVcIj48L2xhYmVsPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtLWl0ZW1cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ3ZWF0aGVyXCI+JHtsb2NhbGl6YXRpb25bdGhpcy5fbG9jYWxlXS5zZXR0aW5ncy53ZWF0aGVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ3ZWF0aGVyXCIgaWQ9XCJ3ZWF0aGVyXCI+PGxhYmVsIGZvcj1cIndlYXRoZXJcIiBjbGFzcz1cInRvZ2dsZVwiPjwvbGFiZWw+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC0taXRlbVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb2NrXCI+JHtsb2NhbGl6YXRpb25bdGhpcy5fbG9jYWxlXS5zZXR0aW5ncy5jbG9ja308L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiY2xvY2tcIiBpZD1cImNsb2NrXCI+PGxhYmVsIGZvcj1cImNsb2NrXCIgY2xhc3M9XCJ0b2dnbGVcIj48L2xhYmVsPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtLWl0ZW1cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJxdW90ZXNcIj4ke2xvY2FsaXphdGlvblt0aGlzLl9sb2NhbGVdLnNldHRpbmdzLnF1b3Rlc308L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwicXVvdGVzXCIgaWQ9XCJxdW90ZXNcIj48bGFiZWwgZm9yPVwicXVvdGVzXCIgY2xhc3M9XCJ0b2dnbGVcIj48L2xhYmVsPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgYFxyXG4gIH1cclxufSIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsaWRlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBudWxsO1xyXG4gICAgdGhpcy5udW1iZXIgPSBudWxsO1xyXG4gICAgdGhpcy5fdGFncyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb21lbnR1bVRhZ3MnKSB8fCAnJztcclxuICAgIHRoaXMuX2ltYWdlU291cmNlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vbWVudHVtSW1hZ2VTb3VyY2UnKSB8fCAnZ2l0JztcclxuICAgIHRoaXMuZmxpY2tyQ29sbGVjdGlvbiA9IFtdO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNCM0IzQjMnXHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdzbGlkZXItYnV0dG9ucycsIHRoaXMuc2xpZGVyVGVtcGxhdGUoKSk7XHJcbiAgICB0aGlzLm51bWJlciA9IHRoaXMuZ2V0UmFuZG9tTnVtKCk7XHJcbiAgICB0aGlzLnNldEJnKCk7XHJcbiAgICB0aGlzLl9jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNoYW5nZUJhY2tncm91bmQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGVsZW0oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgc2V0IGltYWdlU291cmNlKHZhbHVlKSB7XHJcbiAgICB0aGlzLl9pbWFnZVNvdXJjZSA9IHZhbHVlO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21vbWVudHVtSW1hZ2VTb3VyY2UnLCB0aGlzLl9pbWFnZVNvdXJjZSk7XHJcbiAgICB0aGlzLnNldEJnKCk7XHJcbiAgfVxyXG5cclxuICBzZXQgdGFncyh2YWx1ZSkge1xyXG4gICAgdGhpcy5fdGFncyA9IHZhbHVlO1xyXG4gICAgdGhpcy5zZXRCZygpO1xyXG4gIH0gXHJcblxyXG4gIGdldFRpbWVPZkRheSgpIHtcclxuICAgIGNvbnN0IGhvdXIgPSBuZXcgRGF0ZSgpLmdldEhvdXJzKCk7XHJcbiAgICByZXR1cm4gaG91ciA+PSAwICYmIGhvdXIgPCA2ID8gJ25pZ2h0JyA6XHJcbiAgICAgIGhvdXIgPj0gNiAmJiBob3VyIDwgMTIgPyAnbW9ybmluZycgOlxyXG4gICAgICBob3VyID49IDEyICYmIGhvdXIgPCAxOCA/ICdhZnRlcm5vb24nIDogJ2V2ZW5pbmcnO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmFuZG9tTnVtKCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDE5KSArIDE7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VCYWNrZ3JvdW5kID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICBpZih0YXJnZXQudGFnTmFtZSAhPT0gJ0JVVFRPTicpIHJldHVybjtcclxuXHJcbiAgICBpZih0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidXR0b24tcHJldicpKSB7XHJcbiAgICAgIHRoaXMubnVtYmVyID09PSAxID8gdGhpcy5udW1iZXIgPSAyMCA6IHRoaXMubnVtYmVyLS07XHJcbiAgICAgIHRoaXMuc2V0QmcoKVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMubnVtYmVyID09PSAyMCA/IHRoaXMubnVtYmVyID0gMSA6IHRoaXMubnVtYmVyKys7XHJcbiAgICAgIHRoaXMuc2V0QmcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHNldEJnKCkge1xyXG4gICAgaWYodGhpcy5faW1hZ2VTb3VyY2UgPT0gJ2dpdCcpIHRoaXMuc2V0QmdHaXQoKTtcclxuICAgIGlmKHRoaXMuX2ltYWdlU291cmNlID09ICd1bnNwbGFzaCcpIHRoaXMuc2V0QmdVbnNwbGFzaCgpO1xyXG4gICAgaWYodGhpcy5faW1hZ2VTb3VyY2UgPT0gJ2ZsaWNrcicpIHRoaXMuc2V0QmdGbGlja3IoKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIHNldEJnR2l0KCkge1xyXG4gICAgY29uc3QgbnVtYmVyID0gdGhpcy5udW1iZXIgPCAxMCA/IGAwJHt0aGlzLm51bWJlcn1gIDogdGhpcy5udW1iZXI7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL05NYWthcmV2aWNoL3N0YWdlMS10YXNrcy9hc3NldHMvaW1hZ2VzLyR7dGhpcy5nZXRUaW1lT2ZEYXkoKX0vJHtudW1iZXJ9LmpwZ2ApO1xyXG4gICAgY29uc3QgYmxvYiA9IGF3YWl0IHJlcy5ibG9iKCk7IFxyXG4gICAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3VybH0pYFxyXG4gIH1cclxuXHJcbiAgYXN5bmMgc2V0QmdVbnNwbGFzaCgpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS51bnNwbGFzaC5jb20vcGhvdG9zL3JhbmRvbS8/Y2xpZW50X2lkPWlPbDBuRG90SHlnWEY0cFZ6RkJ5M3NFUUIwVjNwa0NCYlpGOHBibFJ6OFkmb3JpZW50YXRpb249bGFuZHNjYXBlJnF1ZXJ5PSR7dGhpcy5nZXRUaW1lT2ZEYXkoKX0sJHt0aGlzLl90YWdzfWApXHJcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIGNvbnN0IHJlZ3VsYXIgPSBhd2FpdCBib2R5LnVybHMucmVndWxhcjtcclxuICAgIGNvbnN0IGltZyA9IGF3YWl0IGZldGNoKHJlZ3VsYXIpO1xyXG4gICAgY29uc3QgYmxvYiA9IGF3YWl0IGltZy5ibG9iKCk7XHJcbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpXHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt1cmx9KWA7XHJcbiAgfVxyXG5cclxuICBhc3luYyBzZXRCZ0ZsaWNrcigpIHtcclxuICAgIGlmICh0aGlzLmZsaWNrckNvbGxlY3Rpb24ubGVuZ3RoID09IDApIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vd3d3LmZsaWNrci5jb20vc2VydmljZXMvcmVzdC8/bWV0aG9kPWZsaWNrci5waG90b3Muc2VhcmNoJmFwaV9rZXk9MjZlOGY5OWYwMjQ0MjhmZjI2MTQxMGZiNzdhZDUxMTAmdGFncz0ke3RoaXMuZ2V0VGltZU9mRGF5KCl9LCR7dGhpcy5fdGFnc30mdGFnX21vZGU9YWxsJmV4dHJhcz11cmxfbyZmb3JtYXQ9anNvbiZub2pzb25jYWxsYmFjaz0xYClcclxuICAgICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIHRoaXMuZmxpY2tyQ29sbGVjdGlvbiA9IGF3YWl0IGJvZHkucGhvdG9zLnBob3RvLmZpbHRlcihpdGVtID0+IGl0ZW0udXJsX28pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmZsaWNrckNvbGxlY3Rpb24ubGVuZ3RoKTtcclxuICAgIGNvbnN0IGltZyA9IGF3YWl0IGZldGNoKHRoaXMuZmxpY2tyQ29sbGVjdGlvbltyYW5kb21JbmRleF0udXJsX28pO1xyXG4gICAgY29uc3QgYmxvYiA9IGF3YWl0IGltZy5ibG9iKCk7XHJcbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpXHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt1cmx9KWA7XHJcbiAgfVxyXG5cclxuICBzbGlkZXJUZW1wbGF0ZSgpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBuYW1lPVwicHJldi1zbGlkZVwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1wcmV2XCI+PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBuYW1lPVwibmV4dC1zbGlkZVwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1uZXh0XCI+PC9idXR0b24+XHJcbiAgICBgXHJcbiAgfVxyXG59IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xyXG5pbXBvcnQgbG9jYWxpemF0aW9uIGZyb20gXCIuL2xvY2FsaXphdGlvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VhdGhlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBudWxsO1xyXG4gICAgdGhpcy5fbG9jYWxlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vbWVudHVtTG9jYWxlJykgfHwgJ2VuJztcclxuICAgIHRoaXMuY2l0eSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb21lbnR1bUNpdHknKSB8fCBsb2NhbGl6YXRpb25bdGhpcy5fbG9jYWxlXS53ZWF0aGVyLmNpdHk7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnY29udGFpbmVyIHdlYXRoZXItY29udGFpbmVyJywgdGhpcy53ZWF0aGVyVGVtcGxhdGUodGhpcy5jaXR5KSk7XHJcbiAgICB0aGlzLmdldFdlYXRoZXIodGhpcy5jaXR5LCB0aGlzLl9sb2NhbGUpO1xyXG4gICAgdGhpcy5pbnB1dENpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5jaGFuZ2VDaXR5KVxyXG4gIH1cclxuXHJcbiAgZ2V0IGVsZW0oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlucHV0Q2l0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcignLmNpdHknKTtcclxuICB9XHJcblxyXG4gIGdldCBpY29uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaWNvbicpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRlbXBlcmF0dXJlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUnKTtcclxuICB9XHJcblxyXG4gIGdldCBkZXNjcmlwdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJylcclxuICB9XHJcblxyXG4gIGdldCBmZWVsc1RlbXAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5mZWVscycpXHJcbiAgfVxyXG5cclxuICBnZXQgd2luZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcignLndpbmQnKVxyXG4gIH1cclxuXHJcbiAgZ2V0IGh1bWlkaXR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKVxyXG4gIH1cclxuXHJcbiAgc2V0IGxvY2FsZSh2YWx1ZSkge1xyXG4gICAgdGhpcy5fbG9jYWxlID0gdmFsdWU7XHJcbiAgICB0aGlzLmdldFdlYXRoZXIodGhpcy5jaXR5LCB0aGlzLl9sb2NhbGUpXHJcbiAgfVxyXG5cclxuICBjaGFuZ2VDaXR5ID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRDaXR5LnZhbHVlKSB7XHJcbiAgICAgIHRoaXMuY2l0eSA9IHRoaXMuaW5wdXRDaXR5LnZhbHVlO1xyXG4gICAgICB0aGlzLmdldFdlYXRoZXIodGhpcy5jaXR5LCB0aGlzLl9sb2NhbGUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuaW5wdXRDaXR5LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBsb2NhbGl6YXRpb25bdGhpcy5fbG9jYWxlXS53ZWF0aGVyLnBsYWNlaG9sZGVyKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0V2VhdGhlcihjaXR5LCBsYW5nKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPWIzOTBkMDM4MmJkMjdiM2VjOTk1YTZlNTFlNGRkYjkwJnVuaXRzPW1ldHJpYyZsYW5nPSR7bGFuZ31gXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgdGhpcy50ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IE1hdGgucm91bmQoZGF0YS5tYWluLnRlbXApO1xyXG4gICAgICB0aGlzLmljb24uY2xhc3NOYW1lID0gJ2ljb24gb3dmJztcclxuICAgICAgdGhpcy5pY29uLmNsYXNzTGlzdC5hZGQoYG93Zi0ke2RhdGEud2VhdGhlclswXS5pZH1gKTtcclxuICAgICAgdGhpcy5pbnB1dENpdHkudmFsdWUgPSBkYXRhLm5hbWU7XHJcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XHJcbiAgICAgIHRoaXMuZmVlbHNUZW1wLnRleHRDb250ZW50ID0gYCR7bG9jYWxpemF0aW9uW3RoaXMuX2xvY2FsZV0ud2VhdGhlci5mZWVsc30gICR7TWF0aC5yb3VuZChkYXRhLm1haW4uZmVlbHNfbGlrZSl9wrAgQ2BcclxuICAgICAgdGhpcy53aW5kLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLndpbmQuc3BlZWQpfSAke2xvY2FsaXphdGlvblt0aGlzLl9sb2NhbGVdLndlYXRoZXIuc3BlZWR9YDtcclxuICAgICAgdGhpcy5odW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2RhdGEubWFpbi5odW1pZGl0eX0lYDtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21vbWVudHVtQ2l0eScsIHRoaXMuaW5wdXRDaXR5LnZhbHVlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmlucHV0Q2l0eS52YWx1ZSA9ICcnO1xyXG4gICAgICB0aGlzLmlucHV0Q2l0eS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgbG9jYWxpemF0aW9uW3RoaXMuX2xvY2FsZV0ud2VhdGhlci5wbGFjZWhvbGRlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3ZWF0aGVyVGVtcGxhdGUoY2l0eSkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJjaXR5XCIgdmFsdWU9XCIke2NpdHl9XCIgY2xhc3M9XCJjaXR5XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaWNvbi10ZW1wZXJhdHVyZVwiPlxyXG4gICAgICA8aSBjbGFzcz1cImljb24gb3dmXCI+PC9pPjxkaXY+PHNwYW4gY2xhc3M9XCJ0ZW1wZXJhdHVyZVwiPjwvc3Bhbj4mZGVnOyBDPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ3ZWF0aGVyLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiZGVzY3JpcHRpb25cIj48L3NwYW4+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmZWVsc1wiPjxzcGFuPiZkZWc7IEM8L3NwYW4+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ3aW5kLWh1bWlkaXR5XCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwid2luZFwiPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJodW1pZGl0eVwiPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICBgXHJcbiAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vb3dmb250LXJlZ3VsYXIuY3NzJ1xyXG5pbXBvcnQgJy4vc2Fzcy9zdHlsZS5zY3NzJ1xyXG5cclxuaW1wb3J0IFBsYXllciBmcm9tICcuL2pzL3BsYXllcidcclxuaW1wb3J0IENsb2NrIGZyb20gJy4vanMvY2xvY2snO1xyXG5pbXBvcnQgV2VhdGhlciBmcm9tICcuL2pzL3dlYXRoZXInO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJy4vanMvc2xpZGVyJztcclxuaW1wb3J0IFF1b3RlcyBmcm9tICcuL2pzL3F1b3Rlcyc7XHJcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuL2pzL3NldHRpbmdzJztcclxuXHJcbmNvbnN0IHF1b3Rlc0xpYiA9IHJlcXVpcmUoJy4vanNvbi9xdW90ZXMuanNvbicpXHJcblxyXG5jb25zdCBwbGF5ZXJTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb24tcGxheWVyJylcclxuY29uc3QgY2xvY2tTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb24tY2xvY2snKTtcclxuY29uc3Qgd2VhdGhlclNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbi13ZWF0aGVyJyk7XHJcbmNvbnN0IHF1b3Rlc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbi1xdW90ZXMnKTtcclxuXHJcbmNvbnN0IHNsaWRlciA9IG5ldyBTbGlkZXIoKTtcclxuZG9jdW1lbnQuYm9keS5wcmVwZW5kKHNsaWRlci5lbGVtKVxyXG5cclxuY29uc3QgcGxheWVyID0gbmV3IFBsYXllcigpO1xyXG5wbGF5ZXJTZWN0aW9uLmFwcGVuZChwbGF5ZXIuZWxlbSk7XHJcblxyXG5jb25zdCB3ZWF0aGVyID0gbmV3IFdlYXRoZXIoKTtcclxud2VhdGhlclNlY3Rpb24uYXBwZW5kKHdlYXRoZXIuZWxlbSk7XHJcblxyXG5jb25zdCBjbG9jayA9IG5ldyBDbG9jaygpO1xyXG5jbG9ja1NlY3Rpb24uYXBwZW5kKGNsb2NrLmVsZW0pXHJcbnNldEludGVydmFsKGNsb2NrLnVwZGF0ZUNsb2NrLCAxMDAwKTtcclxuXHJcbmNvbnN0IHF1b3RlcyA9IG5ldyBRdW90ZXMoKTtcclxucXVvdGVzU2VjdGlvbi5hcHBlbmQocXVvdGVzLmVsZW0pXHJcblxyXG5jb25zdCBzZXR0aW5ncyA9IG5ldyBTZXR0aW5ncygpO1xyXG5xdW90ZXNTZWN0aW9uLmFmdGVyKHNldHRpbmdzLmVsZW0pO1xyXG5jb25zdCBzZXR0aW5nc0NvbnRhaW5lciA9IHNldHRpbmdzLmVsZW0ucXVlcnlTZWxlY3RvcignLnNldHRpbmdzLWNvbnRhaW5lcicpO1xyXG5cclxuc2V0dGluZ3MuZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VJbWdTb3VyY2UnLCAoZXZlbnQpID0+IHtcclxuICBzbGlkZXIuaW1hZ2VTb3VyY2UgPSBldmVudC5kZXRhaWw7XHJcbn0pXHJcblxyXG5zZXR0aW5ncy5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZUxvY2FsZScsIChldmVudCkgPT4ge1xyXG4gIGxldCBsYW5nID0gJydcclxuICBpZiAoZXZlbnQuZGV0YWlsKSBsYW5nID0gJ2VuJztcclxuICBlbHNlIGxhbmcgPSAncnUnO1xyXG4gIHdlYXRoZXIubG9jYWxlID0gbGFuZztcclxuICBjbG9jay5sb2NhbGUgPSBsYW5nO1xyXG4gIHF1b3Rlcy5sb2NhbGUgPSBsYW5nO1xyXG4gIHNldHRpbmdzLmxvY2FsZSA9IGxhbmc7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21vbWVudHVtTG9jYWxlJywgbGFuZylcclxufSlcclxuXHJcbnNldHRpbmdzLmVsZW0uYWRkRXZlbnRMaXN0ZW5lcignaGlkZVNlY3Rpb24nLCAoZXZlbnQpID0+IHtcclxuICBpZiAoc2V0dGluZ3MuZWxlbS5xdWVyeVNlbGVjdG9yKGAjJHtldmVudC5kZXRhaWx9YCkuY2hlY2tlZCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNlY3Rpb24tJHtldmVudC5kZXRhaWx9YCkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgfVxyXG4gIGVsc2UgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNlY3Rpb24tJHtldmVudC5kZXRhaWx9YCkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbn0pXHJcblxyXG5zZXR0aW5ncy5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2FkZFRhZ3MnLCAoZXZlbnQpID0+IHtcclxuICBzbGlkZXIudGFncyA9IGV2ZW50LmRldGFpbDtcclxufSlcclxuXHJcbnNldHRpbmdzLnNldHRpbmdzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGlmIChzZXR0aW5nc0NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSBzZXR0aW5nc0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxyXG4gIGVsc2Ugc2V0dGluZ3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcclxufSlcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgaWYgKGV2ZW50LnRhcmdldCA9PSBzZXR0aW5ncy5zZXR0aW5nc0J1dHRvbiB8fCBldmVudC50YXJnZXQuY2xvc2VzdCgnLnNldHRpbmdzLWNvbnRhaW5lcicpKSByZXR1cm5cclxuICBpZiAoIXNldHRpbmdzQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHNldHRpbmdzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXHJcbn0pXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gIHNldHRpbmdzLnNlY3Rpb25zSW5wdXRzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICBpZiAoaXRlbS5jaGVja2VkKSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2VjdGlvbi0ke2l0ZW0uaWR9YCkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICBlbHNlIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWN0aW9uLSR7aXRlbS5pZH1gKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICB9KVxyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==