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
    if (this._locale === 'ru' && this.city === 'Minsk') {
      this.city = 'Минск';
      this.inputCity.value = this.city;
    }
    if (this._locale === 'en' && this.city === 'Минск') {
      this.city = 'Minsk';
      this.inputCity.value = this.city;
    }
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
      localStorage.setItem('momentumCity', city);
      const data = await res.json();
      this.temperature.textContent = Math.round(data.main.temp);
      this.icon.className = 'icon owf';
      this.icon.classList.add(`owf-${data.weather[0].id}`);
      this.description.textContent = data.weather[0].description;
      this.feelsTemp.textContent = `${_localization__WEBPACK_IMPORTED_MODULE_1__["default"][this._locale].weather.feels}  ${Math.round(data.main.feels_like)}° C`
      this.wind.textContent = `${Math.round(data.wind.speed)} ${_localization__WEBPACK_IMPORTED_MODULE_1__["default"][this._locale].weather.speed}`;
      this.humidity.textContent = `${data.main.humidity}%`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxzQ0FBc0MsYUFBYTtBQUNuRCx1Q0FBdUMsYUFBYTtBQUNwRDtBQUNBLDBDQUEwQyxhQUFhO0FBQ3ZELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EseURBQXlELFFBQVE7QUFDakUsNENBQTRDLFFBQVE7QUFDcEQsR0FBRztBQUNILENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vbWVudHVtLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzcz8zYWM0Iiwid2VicGFjazovL21vbWVudHVtLy4vc3JjL293Zm9udC1yZWd1bGFyLmNzcz9lMGU3Iiwid2VicGFjazovL21vbWVudHVtLy4vc3JjL2pzL2Nsb2NrLmpzIiwid2VicGFjazovL21vbWVudHVtLy4vc3JjL2pzL2NyZWF0ZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbW9tZW50dW0vLi9zcmMvanMvbG9jYWxpemF0aW9uLmpzIiwid2VicGFjazovL21vbWVudHVtLy4vc3JjL2pzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9tb21lbnR1bS8uL3NyYy9qcy9wbGF5bGlzdC5qcyIsIndlYnBhY2s6Ly9tb21lbnR1bS8uL3NyYy9qcy9xdW90ZXMuanMiLCJ3ZWJwYWNrOi8vbW9tZW50dW0vLi9zcmMvanMvc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vbW9tZW50dW0vLi9zcmMvanMvc2xpZGVyLmpzIiwid2VicGFjazovL21vbWVudHVtLy4vc3JjL2pzL3dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vbW9tZW50dW0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbW9tZW50dW0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21vbWVudHVtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbW9tZW50dW0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tb21lbnR1bS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XHJcbmltcG9ydCBsb2NhbGl6YXRpb24gZnJvbSBcIi4vbG9jYWxpemF0aW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG9jayB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBudWxsO1xyXG4gICAgdGhpcy5fdXNlcm5hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9tZW50dW1Vc2VybmFtZScpIHx8ICcnO1xyXG4gICAgdGhpcy5fbG9jYWxlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vbWVudHVtTG9jYWxlJykgfHwgJ2VuJztcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZWxlbSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXJcclxuICB9XHJcblxyXG4gIGdldCBpbnB1dCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuICB9XHJcblxyXG4gIHNldCBsb2NhbGUodmFsdWUpIHtcclxuICAgIHRoaXMuX2xvY2FsZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5pbnB1dC5wbGFjZWhvbGRlciA9IGxvY2FsaXphdGlvblt0aGlzLl9sb2NhbGVdLmNsb2NrLnBsYWNlaG9sZGVyXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdjb250YWluZXIgY2xvY2stY29udGFpbmVyJywgdGhpcy5jbG9ja1RlbXBsYXRlKHRoaXMuX3VzZXJuYW1lKSk7XHJcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaW5wdXRVc2VybmFtZSk7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0VXNlcm5hbWUgPSAoKSA9PiB7XHJcbiAgICB0aGlzLl91c2VybmFtZSA9IHRoaXMuaW5wdXQudmFsdWU7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbW9tZW50dW1Vc2VybmFtZScsIHRoaXMuX3VzZXJuYW1lKVxyXG4gIH1cclxuXHJcbiAgY2xvY2tUZW1wbGF0ZShuYW1lKSB7XHJcbiAgICByZXR1cm4gYDxkaXYgY2xhc3M9XCJ0aW1lXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZGF0ZVwiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImdyZWV0aW5nc1wiPlxyXG4gICAgICA8cCBjbGFzcz1cImdyZWV0aW5nXCI+PC9wPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidXNlcm5hbWVcIiBpZD1cIm1vbWVudHVtVXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIiR7bG9jYWxpemF0aW9uW3RoaXMuX2xvY2FsZV0uY2xvY2sucGxhY2Vob2xkZXJ9XCIgdmFsdWU9XCIke25hbWV9XCI+XHJcbiAgICA8L2Rpdj5gXHJcbiAgfVxyXG5cclxuICB1cGRhdGVDbG9jayA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGVPYmogPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgdGltZSA9IHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudGltZScpO1xyXG4gICAgY29uc3QgZGF0ZSA9IHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpO1xyXG4gICAgY29uc3QgZ3JlZXRpbmdzID0gdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5ncmVldGluZ3MnKTtcclxuICAgIGNvbnN0IGdyZWV0aW5nID0gZ3JlZXRpbmdzLnF1ZXJ5U2VsZWN0b3IoJy5ncmVldGluZycpO1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHt3ZWVrZGF5OiAnbG9uZycsIG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnfVxyXG4gICAgY29uc3QgcGFydE9mRGF5ID0ge1xyXG4gICAgICAncnUnOiBbJ9CU0L7QsdGA0L7QtSDRg9GC0YDQviwmbmJzcDsnLCAn0JTQvtCx0YDRi9C5INC00LXQvdGMLCZuYnNwOycsICfQlNC+0LHRgNGL0Lkg0LLQtdGH0LXRgCwmbmJzcDsnLCAn0JTQvtCx0YDQvtC5INC90L7Rh9C4LCZuYnNwOyddLFxyXG4gICAgICAnZW4nOiBbJ0dvb2QgbW9ybmluZywmbmJzcDsnLCAnR29vZCBhZnRlcm5vb24sJm5ic3A7JywgJ0dvb2QgZXZlbmluZywmbmJzcDsnLCAnR29vZCBuaWdodCwmbmJzcDsnXVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhvdXIgPSBkYXRlT2JqLmdldEhvdXJzKCk7XHJcbiAgICB0aW1lLmlubmVySFRNTCA9IGRhdGVPYmoudG9Mb2NhbGVUaW1lU3RyaW5nKHRoaXMuX2xvY2FsZSwge2hvdXIxMjogZmFsc2V9KTtcclxuICAgIGRhdGUuaW5uZXJIVE1MID0gZGF0ZU9iai50b0xvY2FsZURhdGVTdHJpbmcodGhpcy5fbG9jYWxlLCBvcHRpb25zKTtcclxuICAgIGdyZWV0aW5nLmlubmVySFRNTCA9IGhvdXIgPj0gMCAmJiBob3VyIDwgNiA/IHBhcnRPZkRheVt0aGlzLl9sb2NhbGVdWzNdIFxyXG4gICAgICA6IGhvdXIgPj0gNiAmJiBob3VyIDwgMTIgPyBwYXJ0T2ZEYXlbdGhpcy5fbG9jYWxlXVswXSBcclxuICAgICAgOiBob3VyID49IDEyICYmIGhvdXIgPCAxOCA/IHBhcnRPZkRheVt0aGlzLl9sb2NhbGVdWzFdIFxyXG4gICAgICA6IHBhcnRPZkRheVt0aGlzLl9sb2NhbGVdWzJdXHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChjbGFzc05hbWUsIGh0bWwpIHtcclxuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZWxlbWVudC5jbGFzc0xpc3QgPSBjbGFzc05hbWU7XHJcbiAgZWxlbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBodG1sKVxyXG4gIHJldHVybiBlbGVtZW50O1xyXG59IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICdlbic6IHtcclxuICAgIHdlYXRoZXI6IHtcclxuICAgICAgY2l0eTogJ01pbnNrJyxcclxuICAgICAgZmVlbHM6ICdGZWVscyBsaWtlJyxcclxuICAgICAgc3BlZWQ6ICdtL3MnLFxyXG4gICAgICBwbGFjZWhvbGRlcjogJ0NpdHkgaXMgbm90IGZvdW5kJ1xyXG4gICAgfSxcclxuICAgIGNsb2NrOiB7XHJcbiAgICAgIHBsYWNlaG9sZGVyOiAnRW50ZXIgeW91ciBuYW1lJ1xyXG4gICAgfSxcclxuICAgIHNldHRpbmdzOiB7XHJcbiAgICAgIGxhbmc6ICdMYW5ndWFnZScsXHJcbiAgICAgIGltZ1NyYzogJ0ltYWdlIHNvdXJjZScsXHJcbiAgICAgIHRhZ3M6ICdTZXQgaW1hZ2UgdGFncycsXHJcbiAgICAgIHNob3c6ICdTaG93JyxcclxuICAgICAgcGxheWVyOiAnUGxheWVyJyxcclxuICAgICAgd2VhdGhlcjogJ1dlYXRoZXInLFxyXG4gICAgICBjbG9jazogJ0Nsb2NrJyxcclxuICAgICAgcXVvdGVzOiAnUXVvdGVzJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgJ3J1Jzoge1xyXG4gICAgd2VhdGhlcjoge1xyXG4gICAgICBjaXR5OiAn0JzQuNC90YHQuicsXHJcbiAgICAgIGZlZWxzOiAn0J7RidGD0YnQsNC10YLRgdGPINC60LDQuicsXHJcbiAgICAgIHNwZWVkOiAn0Lwv0YEnLFxyXG4gICAgICBwbGFjZWhvbGRlcjogJ9CT0L7RgNC+0LQg0L3QtSDQvdCw0LnQtNC10L0nXHJcbiAgICB9LFxyXG4gICAgY2xvY2s6IHtcclxuICAgICAgcGxhY2Vob2xkZXI6ICfQktCy0LXQtNC40YLQtSDQstCw0YjQtSDQuNC80Y8nXHJcbiAgICB9LFxyXG4gICAgc2V0dGluZ3M6IHtcclxuICAgICAgbGFuZzogJ9Cv0LfRi9C6JyxcclxuICAgICAgaW1nU3JjOiAn0JjRgdGC0L7Rh9C90LjQuiDQuNC30L7QsdGA0LDQttC10L3QuNC5JyxcclxuICAgICAgdGFnczogJ9Cj0LrQsNC30LDRgtGMINGC0LXQs9C4JyxcclxuICAgICAgc2hvdzogJ9Cf0L7QutCw0LfQsNGC0YwnLFxyXG4gICAgICBwbGF5ZXI6ICfQn9C70LXQtdGAJyxcclxuICAgICAgd2VhdGhlcjogJ9Cf0L7Qs9C+0LTQsCcsXHJcbiAgICAgIGNsb2NrOiAn0KfQsNGB0YsnLFxyXG4gICAgICBxdW90ZXM6ICfQptC40YLQsNGC0YsnXHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xyXG5pbXBvcnQgcGxheWxpc3QgZnJvbSBcIi4vcGxheWxpc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBudWxsO1xyXG4gICAgdGhpcy5jdXJyZW50QXVkaW8gPSAwO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIGdldCBlbGVtKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2NvbnRhaW5lciBwbGF5ZXItY29udGFpbmVyJywgdGhpcy5wbGF5ZXJUZW1wbGF0ZShwbGF5bGlzdCkpO1xyXG4gICAgdGhpcy5hdWRpbyA9IG5ldyBBdWRpbygpO1xyXG4gICAgdGhpcy5pbml0QXVkaW8odGhpcy5jdXJyZW50QXVkaW8pO1xyXG4gICAgdGhpcy5ldmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBsYXllclRpdGxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXRpdGxlJylcclxuICB9XHJcblxyXG4gIGdldCBwbGF5ZXJQcm9ncmVzcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcignLnBsYXllci1wcm9ncmVzcycpXHJcbiAgfVxyXG5cclxuICBnZXQgcGxheWVyQ3VycmVudFRpbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXRpbWUnKVxyXG4gIH1cclxuXHJcbiAgZ2V0IHBsYXllckR1cmF0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZHVyYXRpb24nKVxyXG4gIH1cclxuXHJcbiAgZ2V0IHZvbHVtZUJ1dHRvbigpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcignLnZvbHVtZS1idXR0b24nKTtcclxuICB9XHJcblxyXG4gIGdldCB2b2x1bWVCYXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItdm9sdW1lJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgY29udHJvbHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9scy1idXR0b25zJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgcGxheUxpc3QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5bGlzdCcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBsYXlsaXN0SXRlbXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5bGlzdC1pdGVtJyk7XHJcbiAgfVxyXG5cclxuICBnZXRDdXJyZW50QXVkaW8oaXRlbSkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGBidXR0b25bZGF0YS1pbmRleD1cIiR7aXRlbX1cIl1gKVxyXG4gIH1cclxuXHJcbiAgY29udmVydFRpbWUodGltZSkge1xyXG4gICAgY29uc3Qgc2Vjb25kcyA9IE1hdGguZmxvb3IodGltZSAlIDYwKSA8IDEwID8gYDAke01hdGguZmxvb3IodGltZSAlIDYwKX1gIDogTWF0aC5mbG9vcih0aW1lICUgNjApO1xyXG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodGltZSAvIDYwKSA8IDEwID8gYDAke01hdGguZmxvb3IodGltZSAvIDYwKX1gIDogTWF0aC5mbG9vcih0aW1lIC8gNjApO1xyXG4gICAgcmV0dXJuIGAke21pbnV0ZXN9OiR7c2Vjb25kc31gXHJcbiAgfVxyXG5cclxuICBpbml0QXVkaW8obnVtYmVyKSB7XHJcbiAgICB0aGlzLmF1ZGlvLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCB0aGlzLnVwZGF0ZVBsYXllclByb2dyZXNzKTtcclxuICAgIHRoaXMuYXVkaW8uc3JjID0gcGxheWxpc3RbbnVtYmVyXS5zcmNcclxuICAgIHRoaXMuYXVkaW8uY3VycmVudFRpbWUgPSAwO1xyXG4gICAgdGhpcy5wbGF5ZXJDdXJyZW50VGltZS50ZXh0Q29udGVudCA9ICcwMDowMCc7XHJcbiAgICB0aGlzLnBsYXllckR1cmF0aW9uLnRleHRDb250ZW50ID0gcGxheWxpc3RbbnVtYmVyXS5kdXJhdGlvbjtcclxuICAgIHRoaXMucGxheWVyUHJvZ3Jlc3MudmFsdWUgPSAwO1xyXG4gICAgdGhpcy52b2x1bWVWYWx1ZSA9IHRoaXMudm9sdW1lQmFyLnZhbHVlO1xyXG4gICAgdGhpcy5hdWRpby52b2x1bWUgPSB0aGlzLnZvbHVtZVZhbHVlO1xyXG4gIH1cclxuXHJcbiAgaGlnaGxpZ2h0Q3VycmVudEF1ZGlvID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wbGF5bGlzdEl0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpKTtcclxuICAgIHRoaXMucGxheWxpc3RJdGVtc1t0aGlzLmN1cnJlbnRBdWRpb10uY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0Jyk7XHJcbiAgfVxyXG5cclxuICBwbGF5QXVkaW8gPSAoKSA9PiB7XHJcbiAgICB0aGlzLmluaXRBdWRpbyh0aGlzLmN1cnJlbnRBdWRpbyk7XHJcbiAgICB0aGlzLnBsYXllclRpdGxlLnRleHRDb250ZW50ID0gcGxheWxpc3RbdGhpcy5jdXJyZW50QXVkaW9dLnRpdGxlO1xyXG4gICAgdGhpcy5oaWdobGlnaHRDdXJyZW50QXVkaW8oKTtcclxuICAgIHRoaXMuZ2V0Q3VycmVudEF1ZGlvKHRoaXMuY3VycmVudEF1ZGlvKS5jbGFzc0xpc3QucmVtb3ZlKCdwYXVzZWQnKTtcclxuICAgIHRoaXMuYXVkaW8ucGxheSgpO1xyXG4gICAgdGhpcy5hdWRpby5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgdGhpcy51cGRhdGVQbGF5ZXJQcm9ncmVzcyk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQbGF5ZXJQcm9ncmVzcyA9ICgpID0+IHtcclxuICAgIGxldCBjdXJyZW50VGltZSA9IHRoaXMuYXVkaW8uY3VycmVudFRpbWU7XHJcbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuYXVkaW8uZHVyYXRpb247XHJcbiAgICBsZXQgcGVyY2VudCA9IE1hdGguZmxvb3IoY3VycmVudFRpbWUpIC8gTWF0aC5mbG9vcihkdXJhdGlvbikgKiAxMDAgfHwgMDtcclxuICAgIHRoaXMucGxheWVyUHJvZ3Jlc3MudmFsdWUgPSBNYXRoLnJvdW5kKHBlcmNlbnQpO1xyXG4gICAgdGhpcy5wbGF5ZXJDdXJyZW50VGltZS50ZXh0Q29udGVudCA9IHRoaXMuY29udmVydFRpbWUoY3VycmVudFRpbWUpO1xyXG4gIH1cclxuICBcclxuICBzZXRBdWRpb1RpbWUgPSAoKSA9PiB7XHJcbiAgICBsZXQgcGVyY2VudCA9IHRoaXMucGxheWVyUHJvZ3Jlc3MudmFsdWU7XHJcbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuYXVkaW8uZHVyYXRpb247XHJcbiAgICBsZXQgY3VycmVudFRpbWUgPSBNYXRoLmZsb29yKHBlcmNlbnQpICogTWF0aC5mbG9vcihkdXJhdGlvbikgLyAxMDA7XHJcbiAgICB0aGlzLmF1ZGlvLmN1cnJlbnRUaW1lID0gTWF0aC5mbG9vcihjdXJyZW50VGltZSk7XHJcbiAgICB0aGlzLmF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCB0aGlzLnVwZGF0ZVBsYXllclByb2dyZXNzKTtcclxuICB9XHJcblxyXG4gIHByZXZBdWRpbyA9ICgpID0+IHtcclxuICAgIHRoaXMuZ2V0Q3VycmVudEF1ZGlvKHRoaXMuY3VycmVudEF1ZGlvKS5jbGFzc0xpc3QuYWRkKCdwYXVzZWQnKTtcclxuICAgIHRoaXMuY3VycmVudEF1ZGlvLS07XHJcbiAgICBpZiAodGhpcy5jdXJyZW50QXVkaW8gPCAwKSB0aGlzLmN1cnJlbnRBdWRpbyA9IHBsYXlsaXN0Lmxlbmd0aCAtIDE7XHJcbiAgICB0aGlzLnBsYXlBdWRpbygpO1xyXG4gIH1cclxuXHJcbiAgbmV4dEF1ZGlvID0gKCkgPT4ge1xyXG4gICAgdGhpcy5nZXRDdXJyZW50QXVkaW8odGhpcy5jdXJyZW50QXVkaW8pLmNsYXNzTGlzdC5hZGQoJ3BhdXNlZCcpO1xyXG4gICAgdGhpcy5jdXJyZW50QXVkaW8rKztcclxuICAgIGlmICh0aGlzLmN1cnJlbnRBdWRpbyA+IHBsYXlsaXN0Lmxlbmd0aCAtIDEpIHRoaXMuY3VycmVudEF1ZGlvID0gMDtcclxuICAgIHRoaXMucGxheUF1ZGlvKCk7XHJcbiAgfVxyXG5cclxuICBhdWRpb0NvbnRyb2wgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgIGlmICh0YXJnZXQudGFnTmFtZSAhPSAnQlVUVE9OJykgcmV0dXJuO1xyXG5cclxuICAgIGlmKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2J1dHRvbi1wcmV2JykpIHtcclxuICAgICAgdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdwYXVzZWQnKTtcclxuICAgICAgdGhpcy5wcmV2QXVkaW8oKTtcclxuICAgIH1cclxuXHJcbiAgICBpZih0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidXR0b24tbmV4dCcpKSB7XHJcbiAgICAgIHRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ3BhdXNlZCcpO1xyXG4gICAgICB0aGlzLm5leHRBdWRpbygpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2J1dHRvbi1wbGF5JykpIHtcclxuICAgICAgaWYgKHRoaXMuYXVkaW8ucGF1c2VkKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpby5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgdGhpcy51cGRhdGVQbGF5ZXJQcm9ncmVzcyk7XHJcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3BhdXNlZCcpO1xyXG4gICAgICAgIHRoaXMuZ2V0Q3VycmVudEF1ZGlvKHRoaXMuY3VycmVudEF1ZGlvKS5jbGFzc0xpc3QucmVtb3ZlKCdwYXVzZWQnKTtcclxuICAgICAgICB0aGlzLmhpZ2hsaWdodEN1cnJlbnRBdWRpbygpO1xyXG4gICAgICAgIHRoaXMuYXVkaW8ucGxheSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuYXVkaW8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIHRoaXMudXBkYXRlUGxheWVyUHJvZ3Jlc3MpO1xyXG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdwYXVzZWQnKTtcclxuICAgICAgICB0aGlzLmdldEN1cnJlbnRBdWRpbyh0aGlzLmN1cnJlbnRBdWRpbykuY2xhc3NMaXN0LmFkZCgncGF1c2VkJyk7XHJcbiAgICAgICAgdGhpcy5hdWRpby5wYXVzZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVWb2x1bWUgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmF1ZGlvLnZvbHVtZSA9IHRoaXMudm9sdW1lQmFyLnZhbHVlO1xyXG4gICAgaWYgKHRoaXMuYXVkaW8udm9sdW1lID09IDApIHtcclxuICAgICAgdGhpcy52b2x1bWVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy52b2x1bWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2b2x1bWVDb250cm9sID0gKCkgPT4ge1xyXG4gICAgdGhpcy52b2x1bWVCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICBpZiAodGhpcy52b2x1bWVCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICB0aGlzLmF1ZGlvLnZvbHVtZSA9IHRoaXMudm9sdW1lVmFsdWU7XHJcbiAgICAgIHRoaXMudm9sdW1lQmFyLnZhbHVlID0gdGhpcy52b2x1bWVWYWx1ZTtcclxuICAgICAgdGhpcy51cGRhdGVWb2x1bWUoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLnZvbHVtZVZhbHVlID0gdGhpcy5hdWRpby52b2x1bWU7XHJcbiAgICAgIHRoaXMudm9sdW1lQmFyLnZhbHVlID0gMDtcclxuICAgICAgdGhpcy5hdWRpby52b2x1bWUgPSAwO1xyXG4gICAgICB0aGlzLnVwZGF0ZVZvbHVtZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hvb3NlQXVkaW9Gcm9tUGxheWxpc3QgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgIGlmICh0YXJnZXQudGFnTmFtZSAhPT0gJ0JVVFRPTicpIHJldHVybjtcclxuXHJcbiAgICBpZiAodGhpcy5jdXJyZW50QXVkaW8gIT0gdGFyZ2V0LmRhdGFzZXQuaW5kZXgpIHtcclxuICAgICAgdGhpcy5nZXRDdXJyZW50QXVkaW8odGhpcy5jdXJyZW50QXVkaW8pLmNsYXNzTGlzdC5hZGQoJ3BhdXNlZCcpO1xyXG4gICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgncGF1c2VkJyk7XHJcbiAgICAgIHRoaXMuY3VycmVudEF1ZGlvID0gdGFyZ2V0LmRhdGFzZXQuaW5kZXg7XHJcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXBsYXknKS5jbGFzc0xpc3QucmVtb3ZlKCdwYXVzZWQnKTtcclxuICAgICAgdGhpcy5wbGF5QXVkaW8oKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHRoaXMuYXVkaW8ucGF1c2VkKSB7XHJcbiAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdwYXVzZWQnKTtcclxuICAgICAgdGhpcy5jdXJyZW50QXVkaW8gPSB0YXJnZXQuZGF0YXNldC5pbmRleDtcclxuICAgICAgdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tcGxheScpLmNsYXNzTGlzdC5yZW1vdmUoJ3BhdXNlZCcpO1xyXG4gICAgICB0aGlzLmF1ZGlvLnBsYXkoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1wbGF5JykuY2xhc3NMaXN0LmFkZCgncGF1c2VkJyk7XHJcbiAgICAgIHRoaXMuZ2V0Q3VycmVudEF1ZGlvKHRoaXMuY3VycmVudEF1ZGlvKS5jbGFzc0xpc3QuYWRkKCdwYXVzZWQnKTtcclxuICAgICAgdGhpcy5hdWRpby5wYXVzZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLmNvbnRyb2xzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hdWRpb0NvbnRyb2wpXHJcbiAgICB0aGlzLnZvbHVtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudm9sdW1lQ29udHJvbCk7XHJcbiAgICB0aGlzLnZvbHVtZUJhci5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMudXBkYXRlVm9sdW1lKTtcclxuICAgIHRoaXMucGxheWVyUHJvZ3Jlc3MuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuYXVkaW8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIHRoaXMudXBkYXRlUGxheWVyUHJvZ3Jlc3MpO1xyXG4gICAgICB0aGlzLnBsYXllclByb2dyZXNzLmFkZEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcsIHRoaXMuc2V0QXVkaW9UaW1lKVxyXG4gICAgICB0aGlzLnBsYXllclByb2dyZXNzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5zZXRBdWRpb1RpbWUpXHJcbiAgICB9KTtcclxuICAgIHRoaXMuYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCB0aGlzLm5leHRBdWRpbylcclxuICAgIHRoaXMucGxheUxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNob29zZUF1ZGlvRnJvbVBsYXlsaXN0KVxyXG4gIH1cclxuXHJcbiAgcGxheWVyVGVtcGxhdGUocGxheWxpc3QpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICA8cCBjbGFzcz1cInBsYXllci10aXRsZVwiPiR7cGxheWxpc3RbdGhpcy5jdXJyZW50QXVkaW9dLnRpdGxlfTwvcD5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHMtcHJvZ3Jlc3NcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImN1cnJlbnQtdGltZVwiPjAwOjAwPC9zcGFuPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCIgdmFsdWU9XCIwXCIgY2xhc3M9XCJwbGF5ZXItcHJvZ3Jlc3NcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImR1cmF0aW9uXCI+PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xzLWJ1dHRvbnNcIj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tcHJldlwiIG5hbWU9XCJwcmV2VHJhY2tcIj48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tcGxheSBwYXVzZWRcIiBuYW1lPVwicGxheVwiPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1uZXh0XCIgbmFtZT1cIm5leHRUcmFja1wiPjwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xzLXZvbHVtZVwiPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIHZvbHVtZS1idXR0b24gYWN0aXZlXCI+PC9idXR0b24+ICBcclxuICAgICAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPVwiMFwiIG1heD1cIjFcIiBzdGVwPVwiMC4wMVwiIHZhbHVlPVwiMC41XCIgY2xhc3M9XCJwbGF5ZXItdm9sdW1lXCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8dWwgY2xhc3M9XCJwbGF5bGlzdFwiPlxyXG4gICAgICAke3BsYXlsaXN0Lm1hcCgoaXRlbSwgaW5kZXgpID0+IFxyXG4gICAgICAgIGA8bGkgY2xhc3M9XCJwbGF5bGlzdC1pdGVtXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBidXR0b24taXRlbSBwYXVzZWRcIiBkYXRhLWluZGV4PVwiJHtpbmRleH1cIj48L2J1dHRvbj5cclxuICAgICAgICAgIDxzcGFuPiR7aXRlbS50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgPC9saT5gKS5qb2luKCcnKX1cclxuICAgIDwvdWw+YFxyXG4gIH1cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdJbnRybycsXHJcbiAgICBzcmM6ICcuL2Fzc2V0cy9wbGF5bGlzdC8wLm1wMycsXHJcbiAgICBkdXJhdGlvbjogJzAyOjA1J1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdUaGUgTG9uZWx5IFNoZXBoZXJkJyxcclxuICAgIHNyYzogJy4vYXNzZXRzL3BsYXlsaXN0LzEubXAzJyxcclxuICAgIGR1cmF0aW9uOiAnMDQ6MjAnXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1BhdGgnLFxyXG4gICAgc3JjOiAnLi9hc3NldHMvcGxheWxpc3QvMi5tcDMnLFxyXG4gICAgZHVyYXRpb246ICcwMzowOCdcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnUnVubmluZyB0byB0aGUgU2VhJyxcclxuICAgIHNyYzogJy4vYXNzZXRzL3BsYXlsaXN0LzMubXAzJyxcclxuICAgIGR1cmF0aW9uOiAnMDQ6NTQnXHJcbiAgfVxyXG5dIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVvdGVzIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lciA9IG51bGw7XHJcbiAgICB0aGlzLl9sb2NhbGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9tZW50dW1Mb2NhbGUnKSB8fCAnZW4nO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIGdldCBlbGVtKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIGdldCByZWxvYWRCdXR0b24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tcmVsb2FkJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgcXVvdGUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5xdW90ZScpXHJcbiAgfVxyXG5cclxuICBnZXQgcXVvdGVBdXRob3IoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ2NpdGUnKVxyXG4gIH1cclxuXHJcbiAgc2V0IGxvY2FsZSh2YWx1ZSkge1xyXG4gICAgdGhpcy5fbG9jYWxlID0gdmFsdWU7XHJcbiAgICB0aGlzLmdldFF1b3RlKCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VRdW90ZSA9ICgpID0+IHtcclxuICAgIHRoaXMucmVsb2FkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGlvbicpO1xyXG4gICAgdGhpcy5nZXRRdW90ZSgpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnY29udGFpbmVyIHF1b3Rlcy1jb250YWluZXInLCB0aGlzLnF1b3Rlc1RlbXBsYXRlKCkpO1xyXG4gICAgdGhpcy5ldmVudExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5nZXRRdW90ZSgpO1xyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5nZXRRdW90ZSgpLCA2MDAwMClcclxuICB9XHJcblxyXG4gIGV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5yZWxvYWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNoYW5nZVF1b3RlKVxyXG4gICAgdGhpcy5yZWxvYWRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcclxuICAgICAgdGhpcy5yZWxvYWRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0aW9uJyk7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0UXVvdGUoKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnLi9qc29uL3F1b3Rlcy5qc29uJyk7XHJcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIGNvbnN0IGFycmF5ID0gYXdhaXQgYm9keVt0aGlzLl9sb2NhbGVdO1xyXG4gICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoYXJyYXkubGVuZ3RoIC0gMSkpO1xyXG4gICAgY29uc3QgcXVvdGUgPSBhcnJheVtpbmRleF07XHJcbiAgICB0aGlzLnF1b3RlLnRleHRDb250ZW50ID0gcXVvdGUucXVvdGU7XHJcbiAgICB0aGlzLnF1b3RlQXV0aG9yLnRleHRDb250ZW50ID0gcXVvdGUuYXV0aG9yO1xyXG4gIH1cclxuXHJcbiAgcXVvdGVzVGVtcGxhdGUoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbmFtZT1cInJlbG9hZFwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1yZWxvYWRcIj48L2J1dHRvbj5cclxuICAgIDxibG9ja3F1b3RlPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicXVvdGVcIj48L2Rpdj5cclxuICAgICAgPGNpdGU+PC9jaXRlPlxyXG4gICAgPC9ibG9ja3F1b3RlPlxyXG4gICAgYFxyXG4gIH1cclxufSIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcclxuaW1wb3J0IGxvY2FsaXphdGlvbiBmcm9tIFwiLi9sb2NhbGl6YXRpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdzIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lciA9IG51bGxcclxuICAgIHRoaXMuX2xvY2FsZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb21lbnR1bUxvY2FsZScpIHx8ICdlbic7XHJcbiAgICB0aGlzLmltYWdlU291cmNlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vbWVudHVtSW1hZ2VTb3VyY2UnKSB8fCAnZ2l0JztcclxuICAgIHRoaXMudGFncyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb21lbnR1bVRhZ3MnKSB8fCAnJztcclxuICAgIHRoaXMuc2VjdGlvbnMgPSB7XHJcbiAgICAgIHBsYXllcjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vbWVudHVtSGlkZVBsYXllcicpIHx8ICd0cnVlJyxcclxuICAgICAgd2VhdGhlcjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vbWVudHVtSGlkZVdlYXRoZXInKSB8fCAndHJ1ZScsXHJcbiAgICAgIGNsb2NrOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9tZW50dW1IaWRlQ2xvY2snKSB8fCAndHJ1ZScsXHJcbiAgICAgIHF1b3RlczogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vbWVudHVtSGlkZVF1b3RlcycpIHx8ICd0cnVlJ1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIGdldCBlbGVtKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIGdldCBzZXR0aW5nc0J1dHRvbigpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1zZXR0aW5ncycpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRleHRUYWdzKCkge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAge1xyXG4gICAgICAgIGxhbmc6IHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubGFuZ3VhZ2UgaDInKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaW1nU3JjOiB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcignLmJnLXNvdXJjZSBoMicpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0YWdzOiB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcignLnRhZ3Mgc3BhbicpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBzaG93OiB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcignLnNob3ctc2VjdGlvbnMgaDInKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGxheWVyOiB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3Rvcignc3Bhbi5wbGF5ZXInKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgd2VhdGhlcjogdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4ud2VhdGhlcicpXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjbG9jazogdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4uY2xvY2snKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcXVvdGVzOiB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3Rvcignc3Bhbi5xdW90ZXMnKVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG5cclxuICBnZXQgbG9jYWxlVG9nZ2xlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cImxhbmd1YWdlXCJdJylcclxuICB9XHJcblxyXG4gIGdldCBzb3VyY2VSYWRpb3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJzb3VyY2VcIl0nKVxyXG4gIH1cclxuXHJcbiAgZ2V0IHNlY3Rpb25zSW5wdXRzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1zZWN0aW9uIGlucHV0JylcclxuICB9XHJcblxyXG4gIGdldCB0YWdzQ29udGFpbmVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudGFncycpXHJcbiAgfVxyXG5cclxuICBnZXQgdGFnc0lucHV0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjdGFncycpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdzZXR0aW5ncycsIHRoaXMuc2V0dGluZ3NUZW1wbGF0ZSgpKTtcclxuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZUltZ1NvdXJjZSA9IChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgIHRoaXMuaW1hZ2VTb3VyY2UgPSBldmVudC50YXJnZXQuaWQ7XHJcblxyXG4gICAgICBjb25zdCBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZUltZ1NvdXJjZScsIHtcclxuICAgICAgICBkZXRhaWw6IHRoaXMuaW1hZ2VTb3VyY2UsXHJcbiAgICAgICAgYnVibGVzOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuZWxlbS5kaXNwYXRjaEV2ZW50KGV2dCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaW1hZ2VTb3VyY2UgPT09ICd1bnNwbGFzaCcgXHJcbiAgICAgIHx8IHRoaXMuaW1hZ2VTb3VyY2UgPT09ICdmbGlja3InKSB0aGlzLnRhZ3NDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnbm9uZScpO1xyXG4gICAgZWxzZSB0aGlzLnRhZ3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbm9uZScpXHJcbiAgfVxyXG5cclxuICBjaGFuZ2VMb2NhbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnY2hhbmdlTG9jYWxlJywge1xyXG4gICAgICBkZXRhaWw6IHRoaXMubG9jYWxlVG9nZ2xlLmNoZWNrZWQsXHJcbiAgICAgIGJ1YmJsZXM6IHRydWVcclxuICAgIH0pXHJcbiAgICB0aGlzLmVsZW0uZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICBpZiAodGhpcy5sb2NhbGVUb2dnbGUuY2hlY2tlZCkgdGhpcy5fbG9jYWxlID0gJ2VuJztcclxuICAgIGVsc2UgdGhpcy5fbG9jYWxlID0gJ3J1JztcclxuICAgIHRoaXMudGV4dFRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xyXG4gICAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyh0YWcpWzBdO1xyXG4gICAgICB0YWdba2V5XS50ZXh0Q29udGVudCA9IGxvY2FsaXphdGlvblt0aGlzLl9sb2NhbGVdLnNldHRpbmdzW2tleV07XHJcbiAgICB9KVxyXG4gIH0gXHJcblxyXG4gIGhpZGVTZWN0aW9uID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2hpZGVTZWN0aW9uJywge1xyXG4gICAgICBkZXRhaWw6IGV2ZW50LnRhcmdldC5pZCxcclxuICAgICAgYnViYmxlczogdHJ1ZVxyXG4gICAgfSlcclxuICAgIHRoaXMuZWxlbS5kaXNwYXRjaEV2ZW50KGV2dCk7XHJcbiAgICBjb25zdCBJZCA9IGV2ZW50LnRhcmdldC5pZFswXS50b1VwcGVyQ2FzZSgpICsgZXZlbnQudGFyZ2V0LmlkLnNsaWNlKDEpXHJcbiAgICBjb25zdCBpdGVtID0gYG1vbWVudHVtSGlkZSR7SWR9YFxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaXRlbSwgZXZlbnQudGFyZ2V0LmNoZWNrZWQpXHJcbiAgfVxyXG5cclxuICBhZGRUYWdzID0gKCkgPT4ge1xyXG4gICAgdGhpcy50YWdzID0gdGhpcy50YWdzSW5wdXQudmFsdWU7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbW9tZW50dW1UYWdzJywgdGhpcy50YWdzKTtcclxuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdhZGRUYWdzJywge1xyXG4gICAgICBkZXRhaWw6IHRoaXMudGFncyxcclxuICAgICAgYnViYmxlczogdHJ1ZVxyXG4gICAgfSlcclxuICAgIHRoaXMuZWxlbS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIGxvYWRTZXR0aW5ncyA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLl9sb2NhbGUgPT09ICdlbicpIHRoaXMubG9jYWxlVG9nZ2xlLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5zb3VyY2VSYWRpb3MuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgaWYgKGl0ZW0uaWQgPT09IHRoaXMuaW1hZ2VTb3VyY2UpIGl0ZW0uY2hlY2tlZCA9IHRydWU7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2VjdGlvbnNJbnB1dHMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgaWYgKHRoaXMuc2VjdGlvbnNbaXRlbS5pZF0gPT09ICd0cnVlJykgaXRlbS5jaGVja2VkID0gdHJ1ZVxyXG4gICAgfSlcclxuICAgIGlmICh0aGlzLmltYWdlU291cmNlID09PSAndW5zcGxhc2gnIFxyXG4gICAgICB8fCB0aGlzLmltYWdlU291cmNlID09PSAnZmxpY2tyJykgdGhpcy50YWdzQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmUnKTtcclxuICAgIGVsc2UgdGhpcy50YWdzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25vbmUnKVxyXG4gICAgdGhpcy50YWdzSW5wdXQudmFsdWUgPSB0aGlzLnRhZ3M7XHJcbiAgfVxyXG5cclxuICBldmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuc291cmNlUmFkaW9zLmZvckVhY2gocmFkaW8gPT4ge1xyXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNoYW5nZUltZ1NvdXJjZSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubG9jYWxlVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuY2hhbmdlTG9jYWxlKTtcclxuICAgIHRoaXMuc2VjdGlvbnNJbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGlkZVNlY3Rpb24pXHJcbiAgICB9KVxyXG4gICAgdGhpcy50YWdzSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5hZGRUYWdzKVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHRoaXMubG9hZFNldHRpbmdzKVxyXG4gIH1cclxuXHJcbiAgc2V0dGluZ3NUZW1wbGF0ZSgpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tc2V0dGluZ3NcIj48L2J1dHRvbj5cclxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1jb250YWluZXIgaGlkZGVuXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsYW5ndWFnZVwiPlxyXG4gICAgICAgIDxoMj4ke2xvY2FsaXphdGlvblt0aGlzLl9sb2NhbGVdLnNldHRpbmdzLmxhbmd9PC9oMj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHNwYW4+UnU8L3NwYW4+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImxhbmd1YWdlXCIgaWQ9XCJsYW5ndWFnZVwiPjxsYWJlbCBmb3I9XCJsYW5ndWFnZVwiIGNsYXNzPVwidG9nZ2xlXCI+PC9sYWJlbD5cclxuICAgICAgICAgIDxzcGFuPkVuPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImJnLXNvdXJjZVwiPlxyXG4gICAgICAgIDxoMj4ke2xvY2FsaXphdGlvblt0aGlzLl9sb2NhbGVdLnNldHRpbmdzLmltZ1NyY308L2gyPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0IGxpc3Qtc291cmNlXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdpdFwiPkdpdEh1Yjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInNvdXJjZVwiIGlkPVwiZ2l0XCIgY2hlY2tlZD5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZ2l0XCI+PHNwYW4+PC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVuc3BsYXNoXCI+VW5zcGxhc2ggQVBJPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwic291cmNlXCIgaWQ9XCJ1bnNwbGFzaFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1bnNwbGFzaFwiPjxzcGFuPjwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbGlja3JcIj5GbGlja3IgQVBJPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwic291cmNlXCIgaWQ9XCJmbGlja3JcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmxpY2tyXCI+PHNwYW4+PC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhZ3Mgbm9uZVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj4ke2xvY2FsaXphdGlvblt0aGlzLl9sb2NhbGVdLnNldHRpbmdzLnRhZ3N9PC9zcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGFnc1wiIGlkPVwidGFnc1wiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2hvdy1zZWN0aW9uc1wiPlxyXG4gICAgICAgIDxoMj4ke2xvY2FsaXphdGlvblt0aGlzLl9sb2NhbGVdLnNldHRpbmdzLnNob3d9PC9oMj5cclxuICAgICAgICA8dWwgY2xhc3M9XCJsaXN0IGxpc3Qtc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC0taXRlbVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBsYXllclwiPiR7bG9jYWxpemF0aW9uW3RoaXMuX2xvY2FsZV0uc2V0dGluZ3MucGxheWVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwbGF5ZXJcIiBpZD1cInBsYXllclwiPjxsYWJlbCBmb3I9XCJwbGF5ZXJcIiBjbGFzcz1cInRvZ2dsZVwiPjwvbGFiZWw+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC0taXRlbVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIndlYXRoZXJcIj4ke2xvY2FsaXphdGlvblt0aGlzLl9sb2NhbGVdLnNldHRpbmdzLndlYXRoZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIndlYXRoZXJcIiBpZD1cIndlYXRoZXJcIj48bGFiZWwgZm9yPVwid2VhdGhlclwiIGNsYXNzPVwidG9nZ2xlXCI+PC9sYWJlbD5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LS1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvY2tcIj4ke2xvY2FsaXphdGlvblt0aGlzLl9sb2NhbGVdLnNldHRpbmdzLmNsb2NrfTwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJjbG9ja1wiIGlkPVwiY2xvY2tcIj48bGFiZWwgZm9yPVwiY2xvY2tcIiBjbGFzcz1cInRvZ2dsZVwiPjwvbGFiZWw+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC0taXRlbVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInF1b3Rlc1wiPiR7bG9jYWxpemF0aW9uW3RoaXMuX2xvY2FsZV0uc2V0dGluZ3MucXVvdGVzfTwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJxdW90ZXNcIiBpZD1cInF1b3Rlc1wiPjxsYWJlbCBmb3I9XCJxdW90ZXNcIiBjbGFzcz1cInRvZ2dsZVwiPjwvbGFiZWw+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBgXHJcbiAgfVxyXG59IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xpZGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lciA9IG51bGw7XHJcbiAgICB0aGlzLm51bWJlciA9IG51bGw7XHJcbiAgICB0aGlzLl90YWdzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vbWVudHVtVGFncycpIHx8ICcnO1xyXG4gICAgdGhpcy5faW1hZ2VTb3VyY2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9tZW50dW1JbWFnZVNvdXJjZScpIHx8ICdnaXQnO1xyXG4gICAgdGhpcy5mbGlja3JDb2xsZWN0aW9uID0gW107XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0IzQjNCMydcclxuICAgIHRoaXMuX2NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ3NsaWRlci1idXR0b25zJywgdGhpcy5zbGlkZXJUZW1wbGF0ZSgpKTtcclxuICAgIHRoaXMubnVtYmVyID0gdGhpcy5nZXRSYW5kb21OdW0oKTtcclxuICAgIHRoaXMuc2V0QmcoKTtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hhbmdlQmFja2dyb3VuZCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZWxlbSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBzZXQgaW1hZ2VTb3VyY2UodmFsdWUpIHtcclxuICAgIHRoaXMuX2ltYWdlU291cmNlID0gdmFsdWU7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbW9tZW50dW1JbWFnZVNvdXJjZScsIHRoaXMuX2ltYWdlU291cmNlKTtcclxuICAgIHRoaXMuc2V0QmcoKTtcclxuICB9XHJcblxyXG4gIHNldCB0YWdzKHZhbHVlKSB7XHJcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XHJcbiAgICB0aGlzLnNldEJnKCk7XHJcbiAgfSBcclxuXHJcbiAgZ2V0VGltZU9mRGF5KCkge1xyXG4gICAgY29uc3QgaG91ciA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcclxuICAgIHJldHVybiBob3VyID49IDAgJiYgaG91ciA8IDYgPyAnbmlnaHQnIDpcclxuICAgICAgaG91ciA+PSA2ICYmIGhvdXIgPCAxMiA/ICdtb3JuaW5nJyA6XHJcbiAgICAgIGhvdXIgPj0gMTIgJiYgaG91ciA8IDE4ID8gJ2FmdGVybm9vbicgOiAnZXZlbmluZyc7XHJcbiAgfVxyXG5cclxuICBnZXRSYW5kb21OdW0oKSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTkpICsgMTtcclxuICB9XHJcblxyXG4gIGNoYW5nZUJhY2tncm91bmQgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgIGlmKHRhcmdldC50YWdOYW1lICE9PSAnQlVUVE9OJykgcmV0dXJuO1xyXG5cclxuICAgIGlmKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2J1dHRvbi1wcmV2JykpIHtcclxuICAgICAgdGhpcy5udW1iZXIgPT09IDEgPyB0aGlzLm51bWJlciA9IDIwIDogdGhpcy5udW1iZXItLTtcclxuICAgICAgdGhpcy5zZXRCZygpXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5udW1iZXIgPT09IDIwID8gdGhpcy5udW1iZXIgPSAxIDogdGhpcy5udW1iZXIrKztcclxuICAgICAgdGhpcy5zZXRCZygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgc2V0QmcoKSB7XHJcbiAgICBpZih0aGlzLl9pbWFnZVNvdXJjZSA9PSAnZ2l0JykgdGhpcy5zZXRCZ0dpdCgpO1xyXG4gICAgaWYodGhpcy5faW1hZ2VTb3VyY2UgPT0gJ3Vuc3BsYXNoJykgdGhpcy5zZXRCZ1Vuc3BsYXNoKCk7XHJcbiAgICBpZih0aGlzLl9pbWFnZVNvdXJjZSA9PSAnZmxpY2tyJykgdGhpcy5zZXRCZ0ZsaWNrcigpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgc2V0QmdHaXQoKSB7XHJcbiAgICBjb25zdCBudW1iZXIgPSB0aGlzLm51bWJlciA8IDEwID8gYDAke3RoaXMubnVtYmVyfWAgOiB0aGlzLm51bWJlcjtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vTk1ha2FyZXZpY2gvc3RhZ2UxLXRhc2tzL2Fzc2V0cy9pbWFnZXMvJHt0aGlzLmdldFRpbWVPZkRheSgpfS8ke251bWJlcn0uanBnYCk7XHJcbiAgICBjb25zdCBibG9iID0gYXdhaXQgcmVzLmJsb2IoKTsgXHJcbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7dXJsfSlgXHJcbiAgfVxyXG5cclxuICBhc3luYyBzZXRCZ1Vuc3BsYXNoKCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9waG90b3MvcmFuZG9tLz9jbGllbnRfaWQ9aU9sMG5Eb3RIeWdYRjRwVnpGQnkzc0VRQjBWM3BrQ0JiWkY4cGJsUno4WSZvcmllbnRhdGlvbj1sYW5kc2NhcGUmcXVlcnk9JHt0aGlzLmdldFRpbWVPZkRheSgpfSwke3RoaXMuX3RhZ3N9YClcclxuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgY29uc3QgcmVndWxhciA9IGF3YWl0IGJvZHkudXJscy5yZWd1bGFyO1xyXG4gICAgY29uc3QgaW1nID0gYXdhaXQgZmV0Y2gocmVndWxhcik7XHJcbiAgICBjb25zdCBibG9iID0gYXdhaXQgaW1nLmJsb2IoKTtcclxuICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYilcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3VybH0pYDtcclxuICB9XHJcblxyXG4gIGFzeW5jIHNldEJnRmxpY2tyKCkge1xyXG4gICAgaWYgKHRoaXMuZmxpY2tyQ29sbGVjdGlvbi5sZW5ndGggPT0gMCkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93d3cuZmxpY2tyLmNvbS9zZXJ2aWNlcy9yZXN0Lz9tZXRob2Q9ZmxpY2tyLnBob3Rvcy5zZWFyY2gmYXBpX2tleT0yNmU4Zjk5ZjAyNDQyOGZmMjYxNDEwZmI3N2FkNTExMCZ0YWdzPSR7dGhpcy5nZXRUaW1lT2ZEYXkoKX0sJHt0aGlzLl90YWdzfSZ0YWdfbW9kZT1hbGwmZXh0cmFzPXVybF9vJmZvcm1hdD1qc29uJm5vanNvbmNhbGxiYWNrPTFgKVxyXG4gICAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgdGhpcy5mbGlja3JDb2xsZWN0aW9uID0gYXdhaXQgYm9keS5waG90b3MucGhvdG8uZmlsdGVyKGl0ZW0gPT4gaXRlbS51cmxfbyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuZmxpY2tyQ29sbGVjdGlvbi5sZW5ndGgpO1xyXG4gICAgY29uc3QgaW1nID0gYXdhaXQgZmV0Y2godGhpcy5mbGlja3JDb2xsZWN0aW9uW3JhbmRvbUluZGV4XS51cmxfbyk7XHJcbiAgICBjb25zdCBibG9iID0gYXdhaXQgaW1nLmJsb2IoKTtcclxuICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYilcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3VybH0pYDtcclxuICB9XHJcblxyXG4gIHNsaWRlclRlbXBsYXRlKCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG5hbWU9XCJwcmV2LXNsaWRlXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLXByZXZcIj48L2J1dHRvbj5cclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG5hbWU9XCJuZXh0LXNsaWRlXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLW5leHRcIj48L2J1dHRvbj5cclxuICAgIGBcclxuICB9XHJcbn0iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XHJcbmltcG9ydCBsb2NhbGl6YXRpb24gZnJvbSBcIi4vbG9jYWxpemF0aW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWF0aGVyIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lciA9IG51bGw7XHJcbiAgICB0aGlzLl9sb2NhbGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9tZW50dW1Mb2NhbGUnKSB8fCAnZW4nO1xyXG4gICAgdGhpcy5jaXR5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vbWVudHVtQ2l0eScpIHx8IGxvY2FsaXphdGlvblt0aGlzLl9sb2NhbGVdLndlYXRoZXIuY2l0eTtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdjb250YWluZXIgd2VhdGhlci1jb250YWluZXInLCB0aGlzLndlYXRoZXJUZW1wbGF0ZSh0aGlzLmNpdHkpKTtcclxuICAgIHRoaXMuZ2V0V2VhdGhlcih0aGlzLmNpdHksIHRoaXMuX2xvY2FsZSk7XHJcbiAgICB0aGlzLmlucHV0Q2l0eS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNoYW5nZUNpdHkpXHJcbiAgfVxyXG5cclxuICBnZXQgZWxlbSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBnZXQgaW5wdXRDaXR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2l0eScpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGljb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5pY29uJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgdGVtcGVyYXR1cmUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZScpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRlc2NyaXB0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24nKVxyXG4gIH1cclxuXHJcbiAgZ2V0IGZlZWxzVGVtcCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcignLmZlZWxzJylcclxuICB9XHJcblxyXG4gIGdldCB3aW5kKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcud2luZCcpXHJcbiAgfVxyXG5cclxuICBnZXQgaHVtaWRpdHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eScpXHJcbiAgfVxyXG5cclxuICBzZXQgbG9jYWxlKHZhbHVlKSB7XHJcbiAgICB0aGlzLl9sb2NhbGUgPSB2YWx1ZTtcclxuICAgIGlmICh0aGlzLl9sb2NhbGUgPT09ICdydScgJiYgdGhpcy5jaXR5ID09PSAnTWluc2snKSB7XHJcbiAgICAgIHRoaXMuY2l0eSA9ICfQnNC40L3RgdC6JztcclxuICAgICAgdGhpcy5pbnB1dENpdHkudmFsdWUgPSB0aGlzLmNpdHk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fbG9jYWxlID09PSAnZW4nICYmIHRoaXMuY2l0eSA9PT0gJ9Cc0LjQvdGB0LonKSB7XHJcbiAgICAgIHRoaXMuY2l0eSA9ICdNaW5zayc7XHJcbiAgICAgIHRoaXMuaW5wdXRDaXR5LnZhbHVlID0gdGhpcy5jaXR5O1xyXG4gICAgfVxyXG4gICAgdGhpcy5nZXRXZWF0aGVyKHRoaXMuY2l0eSwgdGhpcy5fbG9jYWxlKVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlQ2l0eSA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLmlucHV0Q2l0eS52YWx1ZSkge1xyXG4gICAgICB0aGlzLmNpdHkgPSB0aGlzLmlucHV0Q2l0eS52YWx1ZTtcclxuICAgICAgdGhpcy5nZXRXZWF0aGVyKHRoaXMuY2l0eSwgdGhpcy5fbG9jYWxlKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmlucHV0Q2l0eS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgbG9jYWxpemF0aW9uW3RoaXMuX2xvY2FsZV0ud2VhdGhlci5wbGFjZWhvbGRlcilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGdldFdlYXRoZXIoY2l0eSwgbGFuZykge1xyXG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZhcHBpZD1iMzkwZDAzODJiZDI3YjNlYzk5NWE2ZTUxZTRkZGI5MCZ1bml0cz1tZXRyaWMmbGFuZz0ke2xhbmd9YFxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21vbWVudHVtQ2l0eScsIGNpdHkpO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgdGhpcy50ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IE1hdGgucm91bmQoZGF0YS5tYWluLnRlbXApO1xyXG4gICAgICB0aGlzLmljb24uY2xhc3NOYW1lID0gJ2ljb24gb3dmJztcclxuICAgICAgdGhpcy5pY29uLmNsYXNzTGlzdC5hZGQoYG93Zi0ke2RhdGEud2VhdGhlclswXS5pZH1gKTtcclxuICAgICAgdGhpcy5kZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcclxuICAgICAgdGhpcy5mZWVsc1RlbXAudGV4dENvbnRlbnQgPSBgJHtsb2NhbGl6YXRpb25bdGhpcy5fbG9jYWxlXS53ZWF0aGVyLmZlZWxzfSAgJHtNYXRoLnJvdW5kKGRhdGEubWFpbi5mZWVsc19saWtlKX3CsCBDYFxyXG4gICAgICB0aGlzLndpbmQudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEud2luZC5zcGVlZCl9ICR7bG9jYWxpemF0aW9uW3RoaXMuX2xvY2FsZV0ud2VhdGhlci5zcGVlZH1gO1xyXG4gICAgICB0aGlzLmh1bWlkaXR5LnRleHRDb250ZW50ID0gYCR7ZGF0YS5tYWluLmh1bWlkaXR5fSVgO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuaW5wdXRDaXR5LnZhbHVlID0gJyc7XHJcbiAgICAgIHRoaXMuaW5wdXRDaXR5LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBsb2NhbGl6YXRpb25bdGhpcy5fbG9jYWxlXS53ZWF0aGVyLnBsYWNlaG9sZGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdlYXRoZXJUZW1wbGF0ZShjaXR5KSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImNpdHlcIiB2YWx1ZT1cIiR7Y2l0eX1cIiBjbGFzcz1cImNpdHlcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJpY29uLXRlbXBlcmF0dXJlXCI+XHJcbiAgICAgIDxpIGNsYXNzPVwiaWNvbiBvd2ZcIj48L2k+PGRpdj48c3BhbiBjbGFzcz1cInRlbXBlcmF0dXJlXCI+PC9zcGFuPiZkZWc7IEM8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIndlYXRoZXItZGVzY3JpcHRpb25cIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJkZXNjcmlwdGlvblwiPjwvc3Bhbj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZlZWxzXCI+PHNwYW4+JmRlZzsgQzwvc3Bhbj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIndpbmQtaHVtaWRpdHlcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJ3aW5kXCI+PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImh1bWlkaXR5XCI8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIGBcclxuICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9vd2ZvbnQtcmVndWxhci5jc3MnXHJcbmltcG9ydCAnLi9zYXNzL3N0eWxlLnNjc3MnXHJcblxyXG5pbXBvcnQgUGxheWVyIGZyb20gJy4vanMvcGxheWVyJ1xyXG5pbXBvcnQgQ2xvY2sgZnJvbSAnLi9qcy9jbG9jayc7XHJcbmltcG9ydCBXZWF0aGVyIGZyb20gJy4vanMvd2VhdGhlcic7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSAnLi9qcy9zbGlkZXInO1xyXG5pbXBvcnQgUXVvdGVzIGZyb20gJy4vanMvcXVvdGVzJztcclxuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4vanMvc2V0dGluZ3MnO1xyXG5cclxuY29uc3QgcXVvdGVzTGliID0gcmVxdWlyZSgnLi9qc29uL3F1b3Rlcy5qc29uJylcclxuXHJcbmNvbnN0IHBsYXllclNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbi1wbGF5ZXInKVxyXG5jb25zdCBjbG9ja1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbi1jbG9jaycpO1xyXG5jb25zdCB3ZWF0aGVyU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uLXdlYXRoZXInKTtcclxuY29uc3QgcXVvdGVzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uLXF1b3RlcycpO1xyXG5cclxuY29uc3Qgc2xpZGVyID0gbmV3IFNsaWRlcigpO1xyXG5kb2N1bWVudC5ib2R5LnByZXBlbmQoc2xpZGVyLmVsZW0pXHJcblxyXG5jb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKCk7XHJcbnBsYXllclNlY3Rpb24uYXBwZW5kKHBsYXllci5lbGVtKTtcclxuXHJcbmNvbnN0IHdlYXRoZXIgPSBuZXcgV2VhdGhlcigpO1xyXG53ZWF0aGVyU2VjdGlvbi5hcHBlbmQod2VhdGhlci5lbGVtKTtcclxuXHJcbmNvbnN0IGNsb2NrID0gbmV3IENsb2NrKCk7XHJcbmNsb2NrU2VjdGlvbi5hcHBlbmQoY2xvY2suZWxlbSlcclxuc2V0SW50ZXJ2YWwoY2xvY2sudXBkYXRlQ2xvY2ssIDEwMDApO1xyXG5cclxuY29uc3QgcXVvdGVzID0gbmV3IFF1b3RlcygpO1xyXG5xdW90ZXNTZWN0aW9uLmFwcGVuZChxdW90ZXMuZWxlbSlcclxuXHJcbmNvbnN0IHNldHRpbmdzID0gbmV3IFNldHRpbmdzKCk7XHJcbnF1b3Rlc1NlY3Rpb24uYWZ0ZXIoc2V0dGluZ3MuZWxlbSk7XHJcbmNvbnN0IHNldHRpbmdzQ29udGFpbmVyID0gc2V0dGluZ3MuZWxlbS5xdWVyeVNlbGVjdG9yKCcuc2V0dGluZ3MtY29udGFpbmVyJyk7XHJcblxyXG5zZXR0aW5ncy5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZUltZ1NvdXJjZScsIChldmVudCkgPT4ge1xyXG4gIHNsaWRlci5pbWFnZVNvdXJjZSA9IGV2ZW50LmRldGFpbDtcclxufSlcclxuXHJcbnNldHRpbmdzLmVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlTG9jYWxlJywgKGV2ZW50KSA9PiB7XHJcbiAgbGV0IGxhbmcgPSAnJ1xyXG4gIGlmIChldmVudC5kZXRhaWwpIGxhbmcgPSAnZW4nO1xyXG4gIGVsc2UgbGFuZyA9ICdydSc7XHJcbiAgd2VhdGhlci5sb2NhbGUgPSBsYW5nO1xyXG4gIGNsb2NrLmxvY2FsZSA9IGxhbmc7XHJcbiAgcXVvdGVzLmxvY2FsZSA9IGxhbmc7XHJcbiAgc2V0dGluZ3MubG9jYWxlID0gbGFuZztcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbW9tZW50dW1Mb2NhbGUnLCBsYW5nKVxyXG59KVxyXG5cclxuc2V0dGluZ3MuZWxlbS5hZGRFdmVudExpc3RlbmVyKCdoaWRlU2VjdGlvbicsIChldmVudCkgPT4ge1xyXG4gIGlmIChzZXR0aW5ncy5lbGVtLnF1ZXJ5U2VsZWN0b3IoYCMke2V2ZW50LmRldGFpbH1gKS5jaGVja2VkKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2VjdGlvbi0ke2V2ZW50LmRldGFpbH1gKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICB9XHJcbiAgZWxzZSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2VjdGlvbi0ke2V2ZW50LmRldGFpbH1gKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxufSlcclxuXHJcbnNldHRpbmdzLmVsZW0uYWRkRXZlbnRMaXN0ZW5lcignYWRkVGFncycsIChldmVudCkgPT4ge1xyXG4gIHNsaWRlci50YWdzID0gZXZlbnQuZGV0YWlsO1xyXG59KVxyXG5cclxuc2V0dGluZ3Muc2V0dGluZ3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgaWYgKHNldHRpbmdzQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykpIHNldHRpbmdzQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXHJcbiAgZWxzZSBzZXR0aW5nc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxyXG59KVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICBpZiAoZXZlbnQudGFyZ2V0ID09IHNldHRpbmdzLnNldHRpbmdzQnV0dG9uIHx8IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuc2V0dGluZ3MtY29udGFpbmVyJykpIHJldHVyblxyXG4gIGlmICghc2V0dGluZ3NDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkgc2V0dGluZ3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcclxufSlcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgc2V0dGluZ3Muc2VjdGlvbnNJbnB1dHMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgIGlmIChpdGVtLmNoZWNrZWQpIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWN0aW9uLSR7aXRlbS5pZH1gKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIGVsc2UgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNlY3Rpb24tJHtpdGVtLmlkfWApLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gIH0pXHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9