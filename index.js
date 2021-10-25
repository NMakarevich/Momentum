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
      this.volumeValue = 0.5;
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
      this.currentAudio--;
      if (this.currentAudio < 0) this.currentAudio = _playlist__WEBPACK_IMPORTED_MODULE_1__["default"].length - 1;
      this.playAudio();
    }
  
    nextAudio = () => {
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
          this.highlightCurrentAudio();
          this.audio.play();
        }
        else {
          this.audio.removeEventListener('timeupdate', this.updatePlayerProgress);
          target.classList.toggle('paused');
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
  
      this.currentAudio = target.dataset.index;
      this._container.querySelector('.button-play').classList.remove('paused');
      this.playAudio();
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
            <button type="button" class="button button-item" data-index="${index}"></button>
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
  
    setBgGit() {
      const img = new Image();
      const number = this.number < 10 ? `0${this.number}` : this.number;
      img.src = `https://raw.githubusercontent.com/NMakarevich/stage1-tasks/assets/images/${this.getTimeOfDay()}/${number}.jpg`;
      img.onload = () => {
        document.body.style.backgroundImage = `url(${img.src})`;
      }
    }
  
    async setBgUnsplash() {
      const res = await fetch(`https://api.unsplash.com/photos/random/?client_id=iOl0nDotHygXF4pVzFBy3sEQB0V3pkCBbZF8pblRz8Y&orientation=landscape&query=${this.getTimeOfDay()},${this._tags}`)
      const body = await res.json();
      const regular = await body.urls.regular;
      const img = new Image();
      img.src = regular;
      img.onload = () => {
          document.body.style.backgroundImage = `url(${regular})`;
      }
    }
  
    async setBgFlickr() {
      const res = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=26e8f99f024428ff261410fb77ad5110&tags=${this.getTimeOfDay()},${this._tags}&tag_mode=all&extras=url_o&format=json&nojsoncallback=1`)
      const body = await res.json();
      const photos = await body.photos.photo;
      const randomPhoto = Math.floor(Math.random() * 99);
      const photo = await photos[randomPhoto].url_o || this.setBgFlickr();
      const img = new Image();
      img.src = photo;
      img.onload = () => {
          document.body.style.backgroundImage = `url(${photo})`;
      }
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
  //# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUTtBQUNwRCxHQUFHO0FBQ0gsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW9tZW50dW0vLi9zcmMvc2Fzcy9zdHlsZS5zY3NzPzNhYzQiLCJ3ZWJwYWNrOi8vbW9tZW50dW0vLi9zcmMvb3dmb250LXJlZ3VsYXIuY3NzP2UwZTciLCJ3ZWJwYWNrOi8vbW9tZW50dW0vLi9zcmMvanMvY2xvY2suanMiLCJ3ZWJwYWNrOi8vbW9tZW50dW0vLi9zcmMvanMvY3JlYXRlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9tb21lbnR1bS8uL3NyYy9qcy9sb2NhbGl6YXRpb24uanMiLCJ3ZWJwYWNrOi8vbW9tZW50dW0vLi9zcmMvanMvcGxheWVyLmpzIiwid2VicGFjazovL21vbWVudHVtLy4vc3JjL2pzL3BsYXlsaXN0LmpzIiwid2VicGFjazovL21vbWVudHVtLy4vc3JjL2pzL3F1b3Rlcy5qcyIsIndlYnBhY2s6Ly9tb21lbnR1bS8uL3NyYy9qcy9zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly9tb21lbnR1bS8uL3NyYy9qcy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vbW9tZW50dW0vLi9zcmMvanMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly9tb21lbnR1bS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tb21lbnR1bS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbW9tZW50dW0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tb21lbnR1bS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21vbWVudHVtLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcclxuaW1wb3J0IGxvY2FsaXphdGlvbiBmcm9tIFwiLi9sb2NhbGl6YXRpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb2NrIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lciA9IG51bGw7XHJcbiAgICB0aGlzLl91c2VybmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb21lbnR1bVVzZXJuYW1lJykgfHwgJyc7XHJcbiAgICB0aGlzLl9sb2NhbGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9tZW50dW1Mb2NhbGUnKSB8fCAnZW4nO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIGdldCBlbGVtKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lclxyXG4gIH1cclxuXHJcbiAgZ2V0IGlucHV0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG4gIH1cclxuXHJcbiAgc2V0IGxvY2FsZSh2YWx1ZSkge1xyXG4gICAgdGhpcy5fbG9jYWxlID0gdmFsdWU7XHJcbiAgICB0aGlzLmlucHV0LnBsYWNlaG9sZGVyID0gbG9jYWxpemF0aW9uW3RoaXMuX2xvY2FsZV0uY2xvY2sucGxhY2Vob2xkZXJcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2NvbnRhaW5lciBjbG9jay1jb250YWluZXInLCB0aGlzLmNsb2NrVGVtcGxhdGUodGhpcy5fdXNlcm5hbWUpKTtcclxuICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5pbnB1dFVzZXJuYW1lKTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRVc2VybmFtZSA9ICgpID0+IHtcclxuICAgIHRoaXMuX3VzZXJuYW1lID0gdGhpcy5pbnB1dC52YWx1ZTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtb21lbnR1bVVzZXJuYW1lJywgdGhpcy5fdXNlcm5hbWUpXHJcbiAgfVxyXG5cclxuICBjbG9ja1RlbXBsYXRlKG5hbWUpIHtcclxuICAgIHJldHVybiBgPGRpdiBjbGFzcz1cInRpbWVcIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJkYXRlXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZ3JlZXRpbmdzXCI+XHJcbiAgICAgIDxwIGNsYXNzPVwiZ3JlZXRpbmdcIj48L3A+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ1c2VybmFtZVwiIGlkPVwibW9tZW50dW1Vc2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiJHtsb2NhbGl6YXRpb25bdGhpcy5fbG9jYWxlXS5jbG9jay5wbGFjZWhvbGRlcn1cIiB2YWx1ZT1cIiR7bmFtZX1cIj5cclxuICAgIDwvZGl2PmBcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNsb2NrID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0ZU9iaiA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCB0aW1lID0gdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy50aW1lJyk7XHJcbiAgICBjb25zdCBkYXRlID0gdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5kYXRlJyk7XHJcbiAgICBjb25zdCBncmVldGluZ3MgPSB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcignLmdyZWV0aW5ncycpO1xyXG4gICAgY29uc3QgZ3JlZXRpbmcgPSBncmVldGluZ3MucXVlcnlTZWxlY3RvcignLmdyZWV0aW5nJyk7XHJcbiAgICBjb25zdCBvcHRpb25zID0ge3dlZWtkYXk6ICdsb25nJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYyd9XHJcbiAgICBjb25zdCBwYXJ0T2ZEYXkgPSB7XHJcbiAgICAgICdydSc6IFsn0JTQvtCx0YDQvtC1INGD0YLRgNC+LCZuYnNwOycsICfQlNC+0LHRgNGL0Lkg0LTQtdC90YwsJm5ic3A7JywgJ9CU0L7QsdGA0YvQuSDQstC10YfQtdGALCZuYnNwOycsICfQlNC+0LHRgNC+0Lkg0L3QvtGH0LgsJm5ic3A7J10sXHJcbiAgICAgICdlbic6IFsnR29vZCBtb3JuaW5nLCZuYnNwOycsICdHb29kIGFmdGVybm9vbiwmbmJzcDsnLCAnR29vZCBldmVuaW5nLCZuYnNwOycsICdHb29kIG5pZ2h0LCZuYnNwOyddXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaG91ciA9IGRhdGVPYmouZ2V0SG91cnMoKTtcclxuICAgIHRpbWUuaW5uZXJIVE1MID0gZGF0ZU9iai50b0xvY2FsZVRpbWVTdHJpbmcodGhpcy5fbG9jYWxlLCB7aG91cjEyOiBmYWxzZX0pO1xyXG4gICAgZGF0ZS5pbm5lckhUTUwgPSBkYXRlT2JqLnRvTG9jYWxlRGF0ZVN0cmluZyh0aGlzLl9sb2NhbGUsIG9wdGlvbnMpO1xyXG4gICAgZ3JlZXRpbmcuaW5uZXJIVE1MID0gaG91ciA+PSAwICYmIGhvdXIgPCA2ID8gcGFydE9mRGF5W3RoaXMuX2xvY2FsZV1bM10gXHJcbiAgICAgIDogaG91ciA+PSA2ICYmIGhvdXIgPCAxMiA/IHBhcnRPZkRheVt0aGlzLl9sb2NhbGVdWzBdIFxyXG4gICAgICA6IGhvdXIgPj0gMTIgJiYgaG91ciA8IDE4ID8gcGFydE9mRGF5W3RoaXMuX2xvY2FsZV1bMV0gXHJcbiAgICAgIDogcGFydE9mRGF5W3RoaXMuX2xvY2FsZV1bMl1cclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGNsYXNzTmFtZSwgaHRtbCkge1xyXG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBlbGVtZW50LmNsYXNzTGlzdCA9IGNsYXNzTmFtZTtcclxuICBlbGVtZW50Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGh0bWwpXHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgJ2VuJzoge1xyXG4gICAgd2VhdGhlcjoge1xyXG4gICAgICBjaXR5OiAnTWluc2snLFxyXG4gICAgICBmZWVsczogJ0ZlZWxzIGxpa2UnLFxyXG4gICAgICBzcGVlZDogJ20vcycsXHJcbiAgICAgIHBsYWNlaG9sZGVyOiAnQ2l0eSBpcyBub3QgZm91bmQnXHJcbiAgICB9LFxyXG4gICAgY2xvY2s6IHtcclxuICAgICAgcGxhY2Vob2xkZXI6ICdFbnRlciB5b3VyIG5hbWUnXHJcbiAgICB9LFxyXG4gICAgc2V0dGluZ3M6IHtcclxuICAgICAgbGFuZzogJ0xhbmd1YWdlJyxcclxuICAgICAgaW1nU3JjOiAnSW1hZ2Ugc291cmNlJyxcclxuICAgICAgdGFnczogJ1NldCBpbWFnZSB0YWdzJyxcclxuICAgICAgc2hvdzogJ1Nob3cnLFxyXG4gICAgICBwbGF5ZXI6ICdQbGF5ZXInLFxyXG4gICAgICB3ZWF0aGVyOiAnV2VhdGhlcicsXHJcbiAgICAgIHF1b3RlczogJ1F1b3RlcydcclxuICAgIH1cclxuICB9LFxyXG4gICdydSc6IHtcclxuICAgIHdlYXRoZXI6IHtcclxuICAgICAgY2l0eTogJ9Cc0LjQvdGB0LonLFxyXG4gICAgICBmZWVsczogJ9Ce0YnRg9GJ0LDQtdGC0YHRjyDQutCw0LonLFxyXG4gICAgICBzcGVlZDogJ9C8L9GBJyxcclxuICAgICAgcGxhY2Vob2xkZXI6ICfQk9C+0YDQvtC0INC90LUg0L3QsNC50LTQtdC9J1xyXG4gICAgfSxcclxuICAgIGNsb2NrOiB7XHJcbiAgICAgIHBsYWNlaG9sZGVyOiAn0JLQstC10LTQuNGC0LUg0LLQsNGI0LUg0LjQvNGPJ1xyXG4gICAgfSxcclxuICAgIHNldHRpbmdzOiB7XHJcbiAgICAgIGxhbmc6ICfQr9C30YvQuicsXHJcbiAgICAgIGltZ1NyYzogJ9CY0YHRgtC+0YfQvdC40Log0LjQt9C+0LHRgNCw0LbQtdC90LjQuScsXHJcbiAgICAgIHRhZ3M6ICfQo9C60LDQt9Cw0YLRjCDRgtC10LPQuCcsXHJcbiAgICAgIHNob3c6ICfQn9C+0LrQsNC30LDRgtGMJyxcclxuICAgICAgcGxheWVyOiAn0J/Qu9C10LXRgCcsXHJcbiAgICAgIHdlYXRoZXI6ICfQn9C+0LPQvtC00LAnLFxyXG4gICAgICBxdW90ZXM6ICfQptC40YLQsNGC0YsnXHJcbiAgICB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xyXG5pbXBvcnQgcGxheWxpc3QgZnJvbSBcIi4vcGxheWxpc3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBudWxsO1xyXG4gICAgdGhpcy5jdXJyZW50QXVkaW8gPSAwO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIGdldCBlbGVtKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2NvbnRhaW5lciBwbGF5ZXItY29udGFpbmVyJywgdGhpcy5wbGF5ZXJUZW1wbGF0ZShwbGF5bGlzdCkpO1xyXG4gICAgdGhpcy5hdWRpbyA9IG5ldyBBdWRpbygpO1xyXG4gICAgdGhpcy5pbml0QXVkaW8odGhpcy5jdXJyZW50QXVkaW8pO1xyXG4gICAgdGhpcy5ldmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBsYXllclRpdGxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucGxheWVyLXRpdGxlJylcclxuICB9XHJcblxyXG4gIGdldCBwbGF5ZXJQcm9ncmVzcygpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcignLnBsYXllci1wcm9ncmVzcycpXHJcbiAgfVxyXG5cclxuICBnZXQgcGxheWVyQ3VycmVudFRpbWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXRpbWUnKVxyXG4gIH1cclxuXHJcbiAgZ2V0IHBsYXllckR1cmF0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZHVyYXRpb24nKVxyXG4gIH1cclxuXHJcbiAgZ2V0IHZvbHVtZUJ1dHRvbigpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcignLnZvbHVtZS1idXR0b24nKTtcclxuICB9XHJcblxyXG4gIGdldCB2b2x1bWVCYXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXItdm9sdW1lJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgY29udHJvbHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9scy1idXR0b25zJyk7XHJcbiAgfVxyXG5cclxuICBnZXQgcGxheUxpc3QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5bGlzdCcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHBsYXlsaXN0SXRlbXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5bGlzdC1pdGVtJyk7XHJcbiAgfVxyXG5cclxuICBjb252ZXJ0VGltZSh0aW1lKSB7XHJcbiAgICBjb25zdCBzZWNvbmRzID0gTWF0aC5mbG9vcih0aW1lICUgNjApIDwgMTAgPyBgMCR7TWF0aC5mbG9vcih0aW1lICUgNjApfWAgOiBNYXRoLmZsb29yKHRpbWUgJSA2MCk7XHJcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lIC8gNjApIDwgMTAgPyBgMCR7TWF0aC5mbG9vcih0aW1lIC8gNjApfWAgOiBNYXRoLmZsb29yKHRpbWUgLyA2MCk7XHJcbiAgICByZXR1cm4gYCR7bWludXRlc306JHtzZWNvbmRzfWBcclxuICB9XHJcblxyXG4gIGluaXRBdWRpbyhudW1iZXIpIHtcclxuICAgIHRoaXMuYXVkaW8ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIHRoaXMudXBkYXRlUGxheWVyUHJvZ3Jlc3MpO1xyXG4gICAgdGhpcy5hdWRpby5zcmMgPSBwbGF5bGlzdFtudW1iZXJdLnNyY1xyXG4gICAgdGhpcy5hdWRpby5jdXJyZW50VGltZSA9IDA7XHJcbiAgICB0aGlzLnBsYXllckN1cnJlbnRUaW1lLnRleHRDb250ZW50ID0gJzAwOjAwJztcclxuICAgIHRoaXMucGxheWVyRHVyYXRpb24udGV4dENvbnRlbnQgPSBwbGF5bGlzdFtudW1iZXJdLmR1cmF0aW9uO1xyXG4gICAgdGhpcy5wbGF5ZXJQcm9ncmVzcy52YWx1ZSA9IDA7XHJcbiAgICB0aGlzLnZvbHVtZVZhbHVlID0gMC41O1xyXG4gICAgdGhpcy5hdWRpby52b2x1bWUgPSB0aGlzLnZvbHVtZVZhbHVlO1xyXG4gIH1cclxuXHJcbiAgaGlnaGxpZ2h0Q3VycmVudEF1ZGlvID0gKCkgPT4ge1xyXG4gICAgdGhpcy5wbGF5bGlzdEl0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpKTtcclxuICAgIHRoaXMucGxheWxpc3RJdGVtc1t0aGlzLmN1cnJlbnRBdWRpb10uY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0Jyk7XHJcbiAgfVxyXG5cclxuICBwbGF5QXVkaW8gPSAoKSA9PiB7XHJcbiAgICB0aGlzLmluaXRBdWRpbyh0aGlzLmN1cnJlbnRBdWRpbyk7XHJcbiAgICB0aGlzLnBsYXllclRpdGxlLnRleHRDb250ZW50ID0gcGxheWxpc3RbdGhpcy5jdXJyZW50QXVkaW9dLnRpdGxlO1xyXG4gICAgdGhpcy5oaWdobGlnaHRDdXJyZW50QXVkaW8oKTtcclxuICAgIHRoaXMuYXVkaW8ucGxheSgpO1xyXG4gICAgdGhpcy5hdWRpby5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgdGhpcy51cGRhdGVQbGF5ZXJQcm9ncmVzcyk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQbGF5ZXJQcm9ncmVzcyA9ICgpID0+IHtcclxuICAgIGxldCBjdXJyZW50VGltZSA9IHRoaXMuYXVkaW8uY3VycmVudFRpbWU7XHJcbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuYXVkaW8uZHVyYXRpb247XHJcbiAgICBsZXQgcGVyY2VudCA9IE1hdGguZmxvb3IoY3VycmVudFRpbWUpIC8gTWF0aC5mbG9vcihkdXJhdGlvbikgKiAxMDAgfHwgMDtcclxuICAgIHRoaXMucGxheWVyUHJvZ3Jlc3MudmFsdWUgPSBNYXRoLnJvdW5kKHBlcmNlbnQpO1xyXG4gICAgdGhpcy5wbGF5ZXJDdXJyZW50VGltZS50ZXh0Q29udGVudCA9IHRoaXMuY29udmVydFRpbWUoY3VycmVudFRpbWUpO1xyXG4gIH1cclxuICBcclxuICBzZXRBdWRpb1RpbWUgPSAoKSA9PiB7XHJcbiAgICBsZXQgcGVyY2VudCA9IHRoaXMucGxheWVyUHJvZ3Jlc3MudmFsdWU7XHJcbiAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMuYXVkaW8uZHVyYXRpb247XHJcbiAgICBsZXQgY3VycmVudFRpbWUgPSBNYXRoLmZsb29yKHBlcmNlbnQpICogTWF0aC5mbG9vcihkdXJhdGlvbikgLyAxMDA7XHJcbiAgICB0aGlzLmF1ZGlvLmN1cnJlbnRUaW1lID0gTWF0aC5mbG9vcihjdXJyZW50VGltZSk7XHJcbiAgICB0aGlzLmF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCB0aGlzLnVwZGF0ZVBsYXllclByb2dyZXNzKTtcclxuICB9XHJcblxyXG4gIHByZXZBdWRpbyA9ICgpID0+IHtcclxuICAgIHRoaXMuY3VycmVudEF1ZGlvLS07XHJcbiAgICBpZiAodGhpcy5jdXJyZW50QXVkaW8gPCAwKSB0aGlzLmN1cnJlbnRBdWRpbyA9IHBsYXlsaXN0Lmxlbmd0aCAtIDE7XHJcbiAgICB0aGlzLnBsYXlBdWRpbygpO1xyXG4gIH1cclxuXHJcbiAgbmV4dEF1ZGlvID0gKCkgPT4ge1xyXG4gICAgdGhpcy5jdXJyZW50QXVkaW8rKztcclxuICAgIGlmICh0aGlzLmN1cnJlbnRBdWRpbyA+IHBsYXlsaXN0Lmxlbmd0aCAtIDEpIHRoaXMuY3VycmVudEF1ZGlvID0gMDtcclxuICAgIHRoaXMucGxheUF1ZGlvKCk7XHJcbiAgfVxyXG5cclxuICBhdWRpb0NvbnRyb2wgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgIGlmICh0YXJnZXQudGFnTmFtZSAhPSAnQlVUVE9OJykgcmV0dXJuO1xyXG5cclxuICAgIGlmKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2J1dHRvbi1wcmV2JykpIHtcclxuICAgICAgdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKCdwYXVzZWQnKTtcclxuICAgICAgdGhpcy5wcmV2QXVkaW8oKTtcclxuICAgIH1cclxuXHJcbiAgICBpZih0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdidXR0b24tbmV4dCcpKSB7XHJcbiAgICAgIHRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ3BhdXNlZCcpO1xyXG4gICAgICB0aGlzLm5leHRBdWRpbygpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2J1dHRvbi1wbGF5JykpIHtcclxuICAgICAgaWYgKHRoaXMuYXVkaW8ucGF1c2VkKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpby5hZGRFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgdGhpcy51cGRhdGVQbGF5ZXJQcm9ncmVzcyk7XHJcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3BhdXNlZCcpO1xyXG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0Q3VycmVudEF1ZGlvKCk7XHJcbiAgICAgICAgdGhpcy5hdWRpby5wbGF5KCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hdWRpby5yZW1vdmVFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgdGhpcy51cGRhdGVQbGF5ZXJQcm9ncmVzcyk7XHJcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ3BhdXNlZCcpO1xyXG4gICAgICAgIHRoaXMuYXVkaW8ucGF1c2UoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlVm9sdW1lID0gKCkgPT4ge1xyXG4gICAgdGhpcy5hdWRpby52b2x1bWUgPSB0aGlzLnZvbHVtZUJhci52YWx1ZTtcclxuICAgIGlmICh0aGlzLmF1ZGlvLnZvbHVtZSA9PSAwKSB7XHJcbiAgICAgIHRoaXMudm9sdW1lQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMudm9sdW1lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdm9sdW1lQ29udHJvbCA9ICgpID0+IHtcclxuICAgIHRoaXMudm9sdW1lQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgaWYgKHRoaXMudm9sdW1lQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgdGhpcy5hdWRpby52b2x1bWUgPSB0aGlzLnZvbHVtZVZhbHVlO1xyXG4gICAgICB0aGlzLnZvbHVtZUJhci52YWx1ZSA9IHRoaXMudm9sdW1lVmFsdWU7XHJcbiAgICAgIHRoaXMudXBkYXRlVm9sdW1lKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy52b2x1bWVWYWx1ZSA9IHRoaXMuYXVkaW8udm9sdW1lO1xyXG4gICAgICB0aGlzLnZvbHVtZUJhci52YWx1ZSA9IDA7XHJcbiAgICAgIHRoaXMuYXVkaW8udm9sdW1lID0gMDtcclxuICAgICAgdGhpcy51cGRhdGVWb2x1bWUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNob29zZUF1ZGlvRnJvbVBsYXlsaXN0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICBpZiAodGFyZ2V0LnRhZ05hbWUgIT09ICdCVVRUT04nKSByZXR1cm47XHJcblxyXG4gICAgdGhpcy5jdXJyZW50QXVkaW8gPSB0YXJnZXQuZGF0YXNldC5pbmRleDtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXBsYXknKS5jbGFzc0xpc3QucmVtb3ZlKCdwYXVzZWQnKTtcclxuICAgIHRoaXMucGxheUF1ZGlvKCk7XHJcbiAgfVxyXG5cclxuICBldmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuY29udHJvbHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmF1ZGlvQ29udHJvbClcclxuICAgIHRoaXMudm9sdW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy52b2x1bWVDb250cm9sKTtcclxuICAgIHRoaXMudm9sdW1lQmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy51cGRhdGVWb2x1bWUpO1xyXG4gICAgdGhpcy5wbGF5ZXJQcm9ncmVzcy5hZGRFdmVudExpc3RlbmVyKCdwb2ludGVyZG93bicsICgpID0+IHtcclxuICAgICAgdGhpcy5hdWRpby5yZW1vdmVFdmVudExpc3RlbmVyKCd0aW1ldXBkYXRlJywgdGhpcy51cGRhdGVQbGF5ZXJQcm9ncmVzcyk7XHJcbiAgICAgIHRoaXMucGxheWVyUHJvZ3Jlc3MuYWRkRXZlbnRMaXN0ZW5lcigncG9pbnRlcnVwJywgdGhpcy5zZXRBdWRpb1RpbWUpXHJcbiAgICAgIHRoaXMucGxheWVyUHJvZ3Jlc3MuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLnNldEF1ZGlvVGltZSlcclxuICAgIH0pO1xyXG4gICAgdGhpcy5hdWRpby5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIHRoaXMubmV4dEF1ZGlvKVxyXG4gICAgdGhpcy5wbGF5TGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hvb3NlQXVkaW9Gcm9tUGxheWxpc3QpXHJcbiAgfVxyXG5cclxuICBwbGF5ZXJUZW1wbGF0ZShwbGF5bGlzdCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxwIGNsYXNzPVwicGxheWVyLXRpdGxlXCI+JHtwbGF5bGlzdFt0aGlzLmN1cnJlbnRBdWRpb10udGl0bGV9PC9wPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRyb2xzXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9scy1wcm9ncmVzc1wiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY3VycmVudC10aW1lXCI+MDA6MDA8L3NwYW4+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiB2YWx1ZT1cIjBcIiBjbGFzcz1cInBsYXllci1wcm9ncmVzc1wiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiZHVyYXRpb25cIj48L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHMtYnV0dG9uc1wiPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1wcmV2XCIgbmFtZT1cInByZXZUcmFja1wiPjwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1wbGF5IHBhdXNlZFwiIG5hbWU9XCJwbGF5XCI+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLW5leHRcIiBuYW1lPVwibmV4dFRyYWNrXCI+PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbHMtdm9sdW1lXCI+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gdm9sdW1lLWJ1dHRvbiBhY3RpdmVcIj48L2J1dHRvbj4gIFxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49XCIwXCIgbWF4PVwiMVwiIHN0ZXA9XCIwLjAxXCIgdmFsdWU9XCIwLjVcIiBjbGFzcz1cInBsYXllci12b2x1bWVcIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDx1bCBjbGFzcz1cInBsYXlsaXN0XCI+XHJcbiAgICAgICR7cGxheWxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4gXHJcbiAgICAgICAgYDxsaSBjbGFzcz1cInBsYXlsaXN0LWl0ZW1cIj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1pdGVtXCIgZGF0YS1pbmRleD1cIiR7aW5kZXh9XCI+PC9idXR0b24+XHJcbiAgICAgICAgICA8c3Bhbj4ke2l0ZW0udGl0bGV9PC9zcGFuPlxyXG4gICAgICAgIDwvbGk+YCkuam9pbignJyl9XHJcbiAgICA8L3VsPmBcclxuICB9XHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnSW50cm8nLFxyXG4gICAgc3JjOiAnLi9hc3NldHMvcGxheWxpc3QvMC5tcDMnLFxyXG4gICAgZHVyYXRpb246ICcwMjowNSdcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnVGhlIExvbmVseSBTaGVwaGVyZCcsXHJcbiAgICBzcmM6ICcuL2Fzc2V0cy9wbGF5bGlzdC8xLm1wMycsXHJcbiAgICBkdXJhdGlvbjogJzA0OjIwJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdQYXRoJyxcclxuICAgIHNyYzogJy4vYXNzZXRzL3BsYXlsaXN0LzIubXAzJyxcclxuICAgIGR1cmF0aW9uOiAnMDM6MDgnXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1J1bm5pbmcgdG8gdGhlIFNlYScsXHJcbiAgICBzcmM6ICcuL2Fzc2V0cy9wbGF5bGlzdC8zLm1wMycsXHJcbiAgICBkdXJhdGlvbjogJzA0OjU0J1xyXG4gIH1cclxuXSIsImltcG9ydCBjcmVhdGVFbGVtZW50IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1b3RlcyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBudWxsO1xyXG4gICAgdGhpcy5fbG9jYWxlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vbWVudHVtTG9jYWxlJykgfHwgJ2VuJztcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZWxlbSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBnZXQgcmVsb2FkQnV0dG9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXJlbG9hZCcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHF1b3RlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucXVvdGUnKVxyXG4gIH1cclxuXHJcbiAgZ2V0IHF1b3RlQXV0aG9yKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdjaXRlJylcclxuICB9XHJcblxyXG4gIHNldCBsb2NhbGUodmFsdWUpIHtcclxuICAgIHRoaXMuX2xvY2FsZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5nZXRRdW90ZSgpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlUXVvdGUgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnJlbG9hZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhbmltYXRpb24nKTtcclxuICAgIHRoaXMuZ2V0UXVvdGUoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ2NvbnRhaW5lciBxdW90ZXMtY29udGFpbmVyJywgdGhpcy5xdW90ZXNUZW1wbGF0ZSgpKTtcclxuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMuZ2V0UXVvdGUoKTtcclxuICAgIHNldEludGVydmFsKCgpID0+IHRoaXMuZ2V0UXVvdGUoKSwgNjAwMDApXHJcbiAgfVxyXG5cclxuICBldmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMucmVsb2FkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jaGFuZ2VRdW90ZSlcclxuICAgIHRoaXMucmVsb2FkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMucmVsb2FkQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGlvbicpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldFF1b3RlKCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy4vanNvbi9xdW90ZXMuanNvbicpO1xyXG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICBjb25zdCBhcnJheSA9IGF3YWl0IGJvZHlbdGhpcy5fbG9jYWxlXTtcclxuICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGFycmF5Lmxlbmd0aCAtIDEpKTtcclxuICAgIGNvbnN0IHF1b3RlID0gYXJyYXlbaW5kZXhdO1xyXG4gICAgdGhpcy5xdW90ZS50ZXh0Q29udGVudCA9IHF1b3RlLnF1b3RlO1xyXG4gICAgdGhpcy5xdW90ZUF1dGhvci50ZXh0Q29udGVudCA9IHF1b3RlLmF1dGhvcjtcclxuICB9XHJcblxyXG4gIHF1b3Rlc1RlbXBsYXRlKCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG5hbWU9XCJyZWxvYWRcIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tcmVsb2FkXCI+PC9idXR0b24+XHJcbiAgICA8YmxvY2txdW90ZT5cclxuICAgICAgPGRpdiBjbGFzcz1cInF1b3RlXCI+PC9kaXY+XHJcbiAgICAgIDxjaXRlPjwvY2l0ZT5cclxuICAgIDwvYmxvY2txdW90ZT5cclxuICAgIGBcclxuICB9XHJcbn0iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XHJcbmltcG9ydCBsb2NhbGl6YXRpb24gZnJvbSBcIi4vbG9jYWxpemF0aW9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5ncyB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBudWxsXHJcbiAgICB0aGlzLl9sb2NhbGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9tZW50dW1Mb2NhbGUnKSB8fCAnZW4nO1xyXG4gICAgdGhpcy5pbWFnZVNvdXJjZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb21lbnR1bUltYWdlU291cmNlJykgfHwgJ2dpdCc7XHJcbiAgICB0aGlzLnRhZ3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9tZW50dW1UYWdzJykgfHwgJyc7XHJcbiAgICB0aGlzLnNlY3Rpb25zID0ge1xyXG4gICAgICBwbGF5ZXI6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb21lbnR1bUhpZGVQbGF5ZXInKSB8fCAndHJ1ZScsXHJcbiAgICAgIHdlYXRoZXI6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb21lbnR1bUhpZGVXZWF0aGVyJykgfHwgJ3RydWUnLFxyXG4gICAgICBxdW90ZXM6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb21lbnR1bUhpZGVRdW90ZXMnKSB8fCAndHJ1ZSdcclxuICAgIH1cclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZWxlbSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBnZXQgc2V0dGluZ3NCdXR0b24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tc2V0dGluZ3MnKTtcclxuICB9XHJcblxyXG4gIGdldCB0ZXh0VGFncygpIHtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHtcclxuICAgICAgICBsYW5nOiB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcignLmxhbmd1YWdlIGgyJylcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGltZ1NyYzogdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5iZy1zb3VyY2UgaDInKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGFnczogdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy50YWdzIHNwYW4nKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgc2hvdzogdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5zaG93LXNlY3Rpb25zIGgyJylcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBsYXllcjogdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4ucGxheWVyJylcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHdlYXRoZXI6IHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdzcGFuLndlYXRoZXInKVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcXVvdGVzOiB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3Rvcignc3Bhbi5xdW90ZXMnKVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG5cclxuICBnZXQgbG9jYWxlVG9nZ2xlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCdpbnB1dFtpZD1cImxhbmd1YWdlXCJdJylcclxuICB9XHJcblxyXG4gIGdldCBzb3VyY2VSYWRpb3MoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W25hbWU9XCJzb3VyY2VcIl0nKVxyXG4gIH1cclxuXHJcbiAgZ2V0IHNlY3Rpb25zSW5wdXRzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1zZWN0aW9uIGlucHV0JylcclxuICB9XHJcblxyXG4gIGdldCB0YWdzQ29udGFpbmVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudGFncycpXHJcbiAgfVxyXG5cclxuICBnZXQgdGFnc0lucHV0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcjdGFncycpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBjcmVhdGVFbGVtZW50KCdzZXR0aW5ncycsIHRoaXMuc2V0dGluZ3NUZW1wbGF0ZSgpKTtcclxuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZUltZ1NvdXJjZSA9IChldmVudCkgPT4ge1xyXG4gICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XHJcbiAgICAgIHRoaXMuaW1hZ2VTb3VyY2UgPSBldmVudC50YXJnZXQuaWQ7XHJcblxyXG4gICAgICBjb25zdCBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZUltZ1NvdXJjZScsIHtcclxuICAgICAgICBkZXRhaWw6IHRoaXMuaW1hZ2VTb3VyY2UsXHJcbiAgICAgICAgYnVibGVzOiB0cnVlXHJcbiAgICAgIH0pXHJcbiAgICAgIHRoaXMuZWxlbS5kaXNwYXRjaEV2ZW50KGV2dCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaW1hZ2VTb3VyY2UgPT09ICd1bnNwbGFzaCcgXHJcbiAgICAgIHx8IHRoaXMuaW1hZ2VTb3VyY2UgPT09ICdmbGlja3InKSB0aGlzLnRhZ3NDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnbm9uZScpO1xyXG4gICAgZWxzZSB0aGlzLnRhZ3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbm9uZScpXHJcbiAgfVxyXG5cclxuICBjaGFuZ2VMb2NhbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnY2hhbmdlTG9jYWxlJywge1xyXG4gICAgICBkZXRhaWw6IHRoaXMubG9jYWxlVG9nZ2xlLmNoZWNrZWQsXHJcbiAgICAgIGJ1YmJsZXM6IHRydWVcclxuICAgIH0pXHJcbiAgICB0aGlzLmVsZW0uZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICBpZiAodGhpcy5sb2NhbGVUb2dnbGUuY2hlY2tlZCkgdGhpcy5fbG9jYWxlID0gJ2VuJztcclxuICAgIGVsc2UgdGhpcy5fbG9jYWxlID0gJ3J1JztcclxuICAgIHRoaXMudGV4dFRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xyXG4gICAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyh0YWcpWzBdO1xyXG4gICAgICB0YWdba2V5XS50ZXh0Q29udGVudCA9IGxvY2FsaXphdGlvblt0aGlzLl9sb2NhbGVdLnNldHRpbmdzW2tleV07XHJcbiAgICB9KVxyXG4gIH0gXHJcblxyXG4gIGhpZGVTZWN0aW9uID0gKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBldnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ2hpZGVTZWN0aW9uJywge1xyXG4gICAgICBkZXRhaWw6IGV2ZW50LnRhcmdldC5pZCxcclxuICAgICAgYnViYmxlczogdHJ1ZVxyXG4gICAgfSlcclxuICAgIHRoaXMuZWxlbS5kaXNwYXRjaEV2ZW50KGV2dCk7XHJcbiAgICBjb25zdCBJZCA9IGV2ZW50LnRhcmdldC5pZFswXS50b1VwcGVyQ2FzZSgpICsgZXZlbnQudGFyZ2V0LmlkLnNsaWNlKDEpXHJcbiAgICBjb25zdCBpdGVtID0gYG1vbWVudHVtSGlkZSR7SWR9YFxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oaXRlbSwgZXZlbnQudGFyZ2V0LmNoZWNrZWQpXHJcbiAgfVxyXG5cclxuICBhZGRUYWdzID0gKCkgPT4ge1xyXG4gICAgdGhpcy50YWdzID0gdGhpcy50YWdzSW5wdXQudmFsdWU7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbW9tZW50dW1UYWdzJywgdGhpcy50YWdzKTtcclxuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdhZGRUYWdzJywge1xyXG4gICAgICBkZXRhaWw6IHRoaXMudGFncyxcclxuICAgICAgYnViYmxlczogdHJ1ZVxyXG4gICAgfSlcclxuICAgIHRoaXMuZWxlbS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIGxvYWRTZXR0aW5ncyA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLl9sb2NhbGUgPT09ICdlbicpIHRoaXMubG9jYWxlVG9nZ2xlLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5zb3VyY2VSYWRpb3MuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgaWYgKGl0ZW0uaWQgPT09IHRoaXMuaW1hZ2VTb3VyY2UpIGl0ZW0uY2hlY2tlZCA9IHRydWU7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2VjdGlvbnNJbnB1dHMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgaWYgKHRoaXMuc2VjdGlvbnNbaXRlbS5pZF0gPT09ICd0cnVlJykgaXRlbS5jaGVja2VkID0gdHJ1ZVxyXG4gICAgfSlcclxuICAgIGlmICh0aGlzLmltYWdlU291cmNlID09PSAndW5zcGxhc2gnIFxyXG4gICAgICB8fCB0aGlzLmltYWdlU291cmNlID09PSAnZmxpY2tyJykgdGhpcy50YWdzQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmUnKTtcclxuICAgIGVsc2UgdGhpcy50YWdzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25vbmUnKVxyXG4gICAgdGhpcy50YWdzSW5wdXQudmFsdWUgPSB0aGlzLnRhZ3M7XHJcbiAgfVxyXG5cclxuICBldmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuc291cmNlUmFkaW9zLmZvckVhY2gocmFkaW8gPT4ge1xyXG4gICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmNoYW5nZUltZ1NvdXJjZSk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubG9jYWxlVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuY2hhbmdlTG9jYWxlKTtcclxuICAgIHRoaXMuc2VjdGlvbnNJbnB1dHMuZm9yRWFjaChpbnB1dCA9PiB7XHJcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGlkZVNlY3Rpb24pXHJcbiAgICB9KVxyXG4gICAgdGhpcy50YWdzSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5hZGRUYWdzKVxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHRoaXMubG9hZFNldHRpbmdzKVxyXG4gIH1cclxuXHJcbiAgc2V0dGluZ3NUZW1wbGF0ZSgpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tc2V0dGluZ3NcIj48L2J1dHRvbj5cclxuICAgIDxkaXYgY2xhc3M9XCJzZXR0aW5ncy1jb250YWluZXIgaGlkZGVuXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsYW5ndWFnZVwiPlxyXG4gICAgICAgIDxoMj4ke2xvY2FsaXphdGlvblt0aGlzLl9sb2NhbGVdLnNldHRpbmdzLmxhbmd9PC9oMj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHNwYW4+UnU8L3NwYW4+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImxhbmd1YWdlXCIgaWQ9XCJsYW5ndWFnZVwiPjxsYWJlbCBmb3I9XCJsYW5ndWFnZVwiIGNsYXNzPVwidG9nZ2xlXCI+PC9sYWJlbD5cclxuICAgICAgICAgIDxzcGFuPkVuPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImJnLXNvdXJjZVwiPlxyXG4gICAgICAgIDxoMj4ke2xvY2FsaXphdGlvblt0aGlzLl9sb2NhbGVdLnNldHRpbmdzLmltZ1NyY308L2gyPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8dWwgY2xhc3M9XCJsaXN0IGxpc3Qtc291cmNlXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdpdFwiPkdpdEh1Yjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInNvdXJjZVwiIGlkPVwiZ2l0XCIgY2hlY2tlZD5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZ2l0XCI+PHNwYW4+PC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzcz1cImxpc3QtLWl0ZW1cIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInVuc3BsYXNoXCI+VW5zcGxhc2ggQVBJPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwic291cmNlXCIgaWQ9XCJ1bnNwbGFzaFwiPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1bnNwbGFzaFwiPjxzcGFuPjwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbGlja3JcIj5GbGlja3IgQVBJPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwic291cmNlXCIgaWQ9XCJmbGlja3JcIj5cclxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZmxpY2tyXCI+PHNwYW4+PC9zcGFuPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhZ3Mgbm9uZVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj4ke2xvY2FsaXphdGlvblt0aGlzLl9sb2NhbGVdLnNldHRpbmdzLnRhZ3N9PC9zcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGFnc1wiIGlkPVwidGFnc1wiPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2hvdy1zZWN0aW9uc1wiPlxyXG4gICAgICAgIDxoMj4ke2xvY2FsaXphdGlvblt0aGlzLl9sb2NhbGVdLnNldHRpbmdzLnNob3d9PC9oMj5cclxuICAgICAgICA8dWwgY2xhc3M9XCJsaXN0IGxpc3Qtc2VjdGlvblwiPlxyXG4gICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC0taXRlbVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBsYXllclwiPiR7bG9jYWxpemF0aW9uW3RoaXMuX2xvY2FsZV0uc2V0dGluZ3MucGxheWVyfTwvc3Bhbj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJwbGF5ZXJcIiBpZD1cInBsYXllclwiPjxsYWJlbCBmb3I9XCJwbGF5ZXJcIiBjbGFzcz1cInRvZ2dsZVwiPjwvbGFiZWw+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzPVwibGlzdC0taXRlbVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIndlYXRoZXJcIj4ke2xvY2FsaXphdGlvblt0aGlzLl9sb2NhbGVdLnNldHRpbmdzLndlYXRoZXJ9PC9zcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cIndlYXRoZXJcIiBpZD1cIndlYXRoZXJcIj48bGFiZWwgZm9yPVwid2VhdGhlclwiIGNsYXNzPVwidG9nZ2xlXCI+PC9sYWJlbD5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3M9XCJsaXN0LS1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicXVvdGVzXCI+JHtsb2NhbGl6YXRpb25bdGhpcy5fbG9jYWxlXS5zZXR0aW5ncy5xdW90ZXN9PC9zcGFuPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cInF1b3Rlc1wiIGlkPVwicXVvdGVzXCI+PGxhYmVsIGZvcj1cInF1b3Rlc1wiIGNsYXNzPVwidG9nZ2xlXCI+PC9sYWJlbD5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGBcclxuICB9XHJcbn0iLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tIFwiLi9jcmVhdGVFbGVtZW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGlkZXIge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gbnVsbDtcclxuICAgIHRoaXMubnVtYmVyID0gbnVsbDtcclxuICAgIHRoaXMuX3RhZ3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9tZW50dW1UYWdzJykgfHwgJyc7XHJcbiAgICB0aGlzLl9pbWFnZVNvdXJjZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb21lbnR1bUltYWdlU291cmNlJykgfHwgJ2dpdCc7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0IzQjNCMydcclxuICAgIHRoaXMuX2NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoJ3NsaWRlci1idXR0b25zJywgdGhpcy5zbGlkZXJUZW1wbGF0ZSgpKTtcclxuICAgIHRoaXMubnVtYmVyID0gdGhpcy5nZXRSYW5kb21OdW0oKTtcclxuICAgIHRoaXMuc2V0QmcoKTtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2hhbmdlQmFja2dyb3VuZCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZWxlbSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBzZXQgaW1hZ2VTb3VyY2UodmFsdWUpIHtcclxuICAgIHRoaXMuX2ltYWdlU291cmNlID0gdmFsdWU7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbW9tZW50dW1JbWFnZVNvdXJjZScsIHRoaXMuX2ltYWdlU291cmNlKTtcclxuICAgIHRoaXMuc2V0QmcoKTtcclxuICB9XHJcblxyXG4gIHNldCB0YWdzKHZhbHVlKSB7XHJcbiAgICB0aGlzLl90YWdzID0gdmFsdWU7XHJcbiAgICB0aGlzLnNldEJnKCk7XHJcbiAgfSBcclxuXHJcbiAgZ2V0VGltZU9mRGF5KCkge1xyXG4gICAgY29uc3QgaG91ciA9IG5ldyBEYXRlKCkuZ2V0SG91cnMoKTtcclxuICAgIHJldHVybiBob3VyID49IDAgJiYgaG91ciA8IDYgPyAnbmlnaHQnIDpcclxuICAgICAgaG91ciA+PSA2ICYmIGhvdXIgPCAxMiA/ICdtb3JuaW5nJyA6XHJcbiAgICAgIGhvdXIgPj0gMTIgJiYgaG91ciA8IDE4ID8gJ2FmdGVybm9vbicgOiAnZXZlbmluZyc7XHJcbiAgfVxyXG5cclxuICBnZXRSYW5kb21OdW0oKSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTkpICsgMTtcclxuICB9XHJcblxyXG4gIGNoYW5nZUJhY2tncm91bmQgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgIGlmKHRhcmdldC50YWdOYW1lICE9PSAnQlVUVE9OJykgcmV0dXJuO1xyXG5cclxuICAgIGlmKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2J1dHRvbi1wcmV2JykpIHtcclxuICAgICAgdGhpcy5udW1iZXIgPT09IDEgPyB0aGlzLm51bWJlciA9IDIwIDogdGhpcy5udW1iZXItLTtcclxuICAgICAgdGhpcy5zZXRCZygpXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5udW1iZXIgPT09IDIwID8gdGhpcy5udW1iZXIgPSAxIDogdGhpcy5udW1iZXIrKztcclxuICAgICAgdGhpcy5zZXRCZygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgc2V0QmcoKSB7XHJcbiAgICBpZih0aGlzLl9pbWFnZVNvdXJjZSA9PSAnZ2l0JykgdGhpcy5zZXRCZ0dpdCgpO1xyXG4gICAgaWYodGhpcy5faW1hZ2VTb3VyY2UgPT0gJ3Vuc3BsYXNoJykgdGhpcy5zZXRCZ1Vuc3BsYXNoKCk7XHJcbiAgICBpZih0aGlzLl9pbWFnZVNvdXJjZSA9PSAnZmxpY2tyJykgdGhpcy5zZXRCZ0ZsaWNrcigpO1xyXG4gIH1cclxuXHJcbiAgc2V0QmdHaXQoKSB7XHJcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGNvbnN0IG51bWJlciA9IHRoaXMubnVtYmVyIDwgMTAgPyBgMCR7dGhpcy5udW1iZXJ9YCA6IHRoaXMubnVtYmVyO1xyXG4gICAgaW1nLnNyYyA9IGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vTk1ha2FyZXZpY2gvc3RhZ2UxLXRhc2tzL2Fzc2V0cy9pbWFnZXMvJHt0aGlzLmdldFRpbWVPZkRheSgpfS8ke251bWJlcn0uanBnYDtcclxuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltZy5zcmN9KWA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBzZXRCZ1Vuc3BsYXNoKCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9waG90b3MvcmFuZG9tLz9jbGllbnRfaWQ9aU9sMG5Eb3RIeWdYRjRwVnpGQnkzc0VRQjBWM3BrQ0JiWkY4cGJsUno4WSZvcmllbnRhdGlvbj1sYW5kc2NhcGUmcXVlcnk9JHt0aGlzLmdldFRpbWVPZkRheSgpfSwke3RoaXMuX3RhZ3N9YClcclxuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgY29uc3QgcmVndWxhciA9IGF3YWl0IGJvZHkudXJscy5yZWd1bGFyO1xyXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBpbWcuc3JjID0gcmVndWxhcjtcclxuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cmVndWxhcn0pYDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHNldEJnRmxpY2tyKCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vd3d3LmZsaWNrci5jb20vc2VydmljZXMvcmVzdC8/bWV0aG9kPWZsaWNrci5waG90b3Muc2VhcmNoJmFwaV9rZXk9MjZlOGY5OWYwMjQ0MjhmZjI2MTQxMGZiNzdhZDUxMTAmdGFncz0ke3RoaXMuZ2V0VGltZU9mRGF5KCl9LCR7dGhpcy5fdGFnc30mdGFnX21vZGU9YWxsJmV4dHJhcz11cmxfbyZmb3JtYXQ9anNvbiZub2pzb25jYWxsYmFjaz0xYClcclxuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgY29uc3QgcGhvdG9zID0gYXdhaXQgYm9keS5waG90b3MucGhvdG87XHJcbiAgICBjb25zdCByYW5kb21QaG90byA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5KTtcclxuICAgIGNvbnN0IHBob3RvID0gYXdhaXQgcGhvdG9zW3JhbmRvbVBob3RvXS51cmxfbyB8fCB0aGlzLnNldEJnRmxpY2tyKCk7XHJcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltZy5zcmMgPSBwaG90bztcclxuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7cGhvdG99KWA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzbGlkZXJUZW1wbGF0ZSgpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBuYW1lPVwicHJldi1zbGlkZVwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1wcmV2XCI+PC9idXR0b24+XHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBuYW1lPVwibmV4dC1zbGlkZVwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1uZXh0XCI+PC9idXR0b24+XHJcbiAgICBgXHJcbiAgfVxyXG59IiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSBcIi4vY3JlYXRlRWxlbWVudFwiO1xyXG5pbXBvcnQgbG9jYWxpemF0aW9uIGZyb20gXCIuL2xvY2FsaXphdGlvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VhdGhlciB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBudWxsO1xyXG4gICAgdGhpcy5fbG9jYWxlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vbWVudHVtTG9jYWxlJykgfHwgJ2VuJztcclxuICAgIHRoaXMuY2l0eSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb21lbnR1bUNpdHknKSB8fCBsb2NhbGl6YXRpb25bdGhpcy5fbG9jYWxlXS53ZWF0aGVyLmNpdHk7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gY3JlYXRlRWxlbWVudCgnY29udGFpbmVyIHdlYXRoZXItY29udGFpbmVyJywgdGhpcy53ZWF0aGVyVGVtcGxhdGUodGhpcy5jaXR5KSk7XHJcbiAgICB0aGlzLmdldFdlYXRoZXIodGhpcy5jaXR5LCB0aGlzLl9sb2NhbGUpO1xyXG4gICAgdGhpcy5pbnB1dENpdHkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5jaGFuZ2VDaXR5KVxyXG4gIH1cclxuXHJcbiAgZ2V0IGVsZW0oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlucHV0Q2l0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcignLmNpdHknKTtcclxuICB9XHJcblxyXG4gIGdldCBpY29uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaWNvbicpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRlbXBlcmF0dXJlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUnKTtcclxuICB9XHJcblxyXG4gIGdldCBkZXNjcmlwdGlvbigpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJylcclxuICB9XHJcblxyXG4gIGdldCBmZWVsc1RlbXAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5mZWVscycpXHJcbiAgfVxyXG5cclxuICBnZXQgd2luZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jb250YWluZXIucXVlcnlTZWxlY3RvcignLndpbmQnKVxyXG4gIH1cclxuXHJcbiAgZ2V0IGh1bWlkaXR5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuaHVtaWRpdHknKVxyXG4gIH1cclxuXHJcbiAgc2V0IGxvY2FsZSh2YWx1ZSkge1xyXG4gICAgdGhpcy5fbG9jYWxlID0gdmFsdWU7XHJcbiAgICB0aGlzLmdldFdlYXRoZXIodGhpcy5jaXR5LCB0aGlzLl9sb2NhbGUpXHJcbiAgfVxyXG5cclxuICBjaGFuZ2VDaXR5ID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuaW5wdXRDaXR5LnZhbHVlKSB7XHJcbiAgICAgIHRoaXMuY2l0eSA9IHRoaXMuaW5wdXRDaXR5LnZhbHVlO1xyXG4gICAgICB0aGlzLmdldFdlYXRoZXIodGhpcy5jaXR5LCB0aGlzLl9sb2NhbGUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuaW5wdXRDaXR5LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBsb2NhbGl6YXRpb25bdGhpcy5fbG9jYWxlXS53ZWF0aGVyLnBsYWNlaG9sZGVyKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0V2VhdGhlcihjaXR5LCBsYW5nKSB7XHJcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JmFwcGlkPWIzOTBkMDM4MmJkMjdiM2VjOTk1YTZlNTFlNGRkYjkwJnVuaXRzPW1ldHJpYyZsYW5nPSR7bGFuZ31gXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbW9tZW50dW1DaXR5JywgY2l0eSk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICB0aGlzLnRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcCk7XHJcbiAgICAgIHRoaXMuaWNvbi5jbGFzc05hbWUgPSAnaWNvbiBvd2YnO1xyXG4gICAgICB0aGlzLmljb24uY2xhc3NMaXN0LmFkZChgb3dmLSR7ZGF0YS53ZWF0aGVyWzBdLmlkfWApO1xyXG4gICAgICB0aGlzLmRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xyXG4gICAgICB0aGlzLmZlZWxzVGVtcC50ZXh0Q29udGVudCA9IGAke2xvY2FsaXphdGlvblt0aGlzLl9sb2NhbGVdLndlYXRoZXIuZmVlbHN9ICAke01hdGgucm91bmQoZGF0YS5tYWluLmZlZWxzX2xpa2UpfcKwIENgXHJcbiAgICAgIHRoaXMud2luZC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS53aW5kLnNwZWVkKX0gJHtsb2NhbGl6YXRpb25bdGhpcy5fbG9jYWxlXS53ZWF0aGVyLnNwZWVkfWA7XHJcbiAgICAgIHRoaXMuaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtkYXRhLm1haW4uaHVtaWRpdHl9JWA7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5pbnB1dENpdHkudmFsdWUgPSAnJztcclxuICAgICAgdGhpcy5pbnB1dENpdHkuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIGxvY2FsaXphdGlvblt0aGlzLl9sb2NhbGVdLndlYXRoZXIucGxhY2Vob2xkZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd2VhdGhlclRlbXBsYXRlKGNpdHkpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY2l0eVwiIHZhbHVlPVwiJHtjaXR5fVwiIGNsYXNzPVwiY2l0eVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImljb24tdGVtcGVyYXR1cmVcIj5cclxuICAgICAgPGkgY2xhc3M9XCJpY29uIG93ZlwiPjwvaT48ZGl2PjxzcGFuIGNsYXNzPVwidGVtcGVyYXR1cmVcIj48L3NwYW4+JmRlZzsgQzwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwid2VhdGhlci1kZXNjcmlwdGlvblwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+PC9zcGFuPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmVlbHNcIj48c3Bhbj4mZGVnOyBDPC9zcGFuPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwid2luZC1odW1pZGl0eVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cIndpbmRcIj48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiaHVtaWRpdHlcIjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgYFxyXG4gIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL293Zm9udC1yZWd1bGFyLmNzcydcclxuaW1wb3J0ICcuL3Nhc3Mvc3R5bGUuc2NzcydcclxuXHJcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9qcy9wbGF5ZXInXHJcbmltcG9ydCBDbG9jayBmcm9tICcuL2pzL2Nsb2NrJztcclxuaW1wb3J0IFdlYXRoZXIgZnJvbSAnLi9qcy93ZWF0aGVyJztcclxuaW1wb3J0IFNsaWRlciBmcm9tICcuL2pzL3NsaWRlcic7XHJcbmltcG9ydCBRdW90ZXMgZnJvbSAnLi9qcy9xdW90ZXMnO1xyXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi9qcy9zZXR0aW5ncyc7XHJcblxyXG5jb25zdCBxdW90ZXNMaWIgPSByZXF1aXJlKCcuL2pzb24vcXVvdGVzLmpzb24nKVxyXG5cclxuY29uc3QgcGxheWVyU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uLXBsYXllcicpXHJcbmNvbnN0IGNsb2NrU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uLWNsb2NrJyk7XHJcbmNvbnN0IHdlYXRoZXJTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb24td2VhdGhlcicpO1xyXG5jb25zdCBxdW90ZXNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY3Rpb24tcXVvdGVzJyk7XHJcblxyXG5jb25zdCBzbGlkZXIgPSBuZXcgU2xpZGVyKCk7XHJcbmRvY3VtZW50LmJvZHkucHJlcGVuZChzbGlkZXIuZWxlbSlcclxuXHJcbmNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoKTtcclxucGxheWVyU2VjdGlvbi5hcHBlbmQocGxheWVyLmVsZW0pO1xyXG5cclxuY29uc3Qgd2VhdGhlciA9IG5ldyBXZWF0aGVyKCk7XHJcbndlYXRoZXJTZWN0aW9uLmFwcGVuZCh3ZWF0aGVyLmVsZW0pO1xyXG5cclxuY29uc3QgY2xvY2sgPSBuZXcgQ2xvY2soKTtcclxuY2xvY2tTZWN0aW9uLmFwcGVuZChjbG9jay5lbGVtKVxyXG5zZXRJbnRlcnZhbChjbG9jay51cGRhdGVDbG9jaywgMTAwMCk7XHJcblxyXG5jb25zdCBxdW90ZXMgPSBuZXcgUXVvdGVzKCk7XHJcbnF1b3Rlc1NlY3Rpb24uYXBwZW5kKHF1b3Rlcy5lbGVtKVxyXG5cclxuY29uc3Qgc2V0dGluZ3MgPSBuZXcgU2V0dGluZ3MoKTtcclxucXVvdGVzU2VjdGlvbi5hZnRlcihzZXR0aW5ncy5lbGVtKTtcclxuY29uc3Qgc2V0dGluZ3NDb250YWluZXIgPSBzZXR0aW5ncy5lbGVtLnF1ZXJ5U2VsZWN0b3IoJy5zZXR0aW5ncy1jb250YWluZXInKTtcclxuXHJcbnNldHRpbmdzLmVsZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlSW1nU291cmNlJywgKGV2ZW50KSA9PiB7XHJcbiAgc2xpZGVyLmltYWdlU291cmNlID0gZXZlbnQuZGV0YWlsO1xyXG59KVxyXG5cclxuc2V0dGluZ3MuZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2VMb2NhbGUnLCAoZXZlbnQpID0+IHtcclxuICBsZXQgbGFuZyA9ICcnXHJcbiAgaWYgKGV2ZW50LmRldGFpbCkgbGFuZyA9ICdlbic7XHJcbiAgZWxzZSBsYW5nID0gJ3J1JztcclxuICB3ZWF0aGVyLmxvY2FsZSA9IGxhbmc7XHJcbiAgY2xvY2subG9jYWxlID0gbGFuZztcclxuICBxdW90ZXMubG9jYWxlID0gbGFuZztcclxuICBzZXR0aW5ncy5sb2NhbGUgPSBsYW5nO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtb21lbnR1bUxvY2FsZScsIGxhbmcpXHJcbn0pXHJcblxyXG5zZXR0aW5ncy5lbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGVTZWN0aW9uJywgKGV2ZW50KSA9PiB7XHJcbiAgaWYgKHNldHRpbmdzLmVsZW0ucXVlcnlTZWxlY3RvcihgIyR7ZXZlbnQuZGV0YWlsfWApLmNoZWNrZWQpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWN0aW9uLSR7ZXZlbnQuZGV0YWlsfWApLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gIH1cclxuICBlbHNlIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zZWN0aW9uLSR7ZXZlbnQuZGV0YWlsfWApLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG59KVxyXG5cclxuc2V0dGluZ3MuZWxlbS5hZGRFdmVudExpc3RlbmVyKCdhZGRUYWdzJywgKGV2ZW50KSA9PiB7XHJcbiAgc2xpZGVyLnRhZ3MgPSBldmVudC5kZXRhaWw7XHJcbn0pXHJcblxyXG5zZXR0aW5ncy5zZXR0aW5nc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBpZiAoc2V0dGluZ3NDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkgc2V0dGluZ3NDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcclxuICBlbHNlIHNldHRpbmdzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXHJcbn0pXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gIGlmIChldmVudC50YXJnZXQgPT0gc2V0dGluZ3Muc2V0dGluZ3NCdXR0b24gfHwgZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5zZXR0aW5ncy1jb250YWluZXInKSkgcmV0dXJuXHJcbiAgaWYgKCFzZXR0aW5nc0NvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSBzZXR0aW5nc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxyXG59KVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICBzZXR0aW5ncy5zZWN0aW9uc0lucHV0cy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgaWYgKGl0ZW0uY2hlY2tlZCkgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNlY3Rpb24tJHtpdGVtLmlkfWApLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgZWxzZSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2VjdGlvbi0ke2l0ZW0uaWR9YCkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgfSlcclxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=