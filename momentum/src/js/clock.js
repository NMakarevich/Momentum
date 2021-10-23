import createElement from "./createElement";
import localization from "./localization";

export default class Clock {
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
  }

  render() {
    this._container = createElement('container clock-container', this.clockTemplate(this._username));
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
      <input type="text" name="username" id="momentumUsername" placeholder="${localization[this._locale].clock.placeholder}" value="${name}">
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