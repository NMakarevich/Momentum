import createElement from "./createElement";

export default class Clock {
  constructor() {
    this._container = null;
    this._username = '';
    this.render()
  }

  get elem() {
    return this._container
  }

  get username() {
    return this._username = localStorage.getItem('momentumUsername') || '';
  }

  get input() {
    return this._container.querySelector('input');
  }

  render() {
    this._container = createElement('clock-container', this.clockTemplate(this.username));
    this.input.addEventListener('change', this.inputUsername);
  }
  
  inputUsername = () => {
    this._username = this.value;
    localStorage.setItem('momentumUsername', this._username)
  }

  clockTemplate(name) {
    return `<div class="time"></div>
    <div class="date"></div>
    <div class="greetings">
      <p class="greeting"><p>
      <input type="text" name="username" id="momentumUsername" placeholder="Enter your name" value="${name}">
    </div>`
  }

  updateClock = (locale='ru-RU') => {
    const dateObj = new Date();
    const time = this._container.querySelector('.time');
    const date = this._container.querySelector('.date');
    const greetings = this._container.querySelector('.greetings');
    const greeting = greetings.querySelector('.greeting');
    const options = {weekday: 'long', month: 'long', day: 'numeric'}
    const partOfDay = {
      'ru-RU': ['Доброе утро', 'Добрый день', 'Добрый вечер', 'Доброй ночи'],
      'en-US': ['Good morning', 'Good day', 'Good evening', 'Good night']
    }

    const hour = dateObj.getHours();
    time.innerHTML = dateObj.toLocaleTimeString(locale);
    date.innerHTML = dateObj.toLocaleDateString(locale, options);
    greeting.innerHTML = hour >= 0 && hour < 6 ? partOfDay[locale][3] 
      : hour >= 6 && hour < 12 ? partOfDay[locale][0] 
      : hour >= 12 && hour < 18 ? partOfDay[locale][1] 
      : partOfDay[locale][2]
  }
}