import createElement from "./createElement";

export default class Weather {
  constructor() {
    this._container = null;
    this._locale = 'en-US'.split('-')[0];
    this.city = localStorage.getItem('momentumCity') ? localStorage.getItem('momentumCity') : 'Minsk';
    this.render();
  }

  render() {
    this._container = createElement('weather-container', this.weatherTemplate(this.city));
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
    return this._container.querySelector('.feels-temp')
  }

  get wind() {
    return this._container.querySelector('.wind')
  }

  get humidity() {
    return this._container.querySelector('.humidity')
  }

  set locale(value) {
    this._locale = value.split('-')[0];
  }

  changeCity = () => {
    if (this.inputCity.value) {
      this.city = this.inputCity.value;
      this.getWeather(this.city, this._locale);
    }
    else {
      this.inputCity.setAttribute('placeholder', 'Enter correct city')
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
      this.feelsTemp.textContent = Math.round(data.main.feels_like)
      this.wind.textContent = `${Math.round(data.wind.speed)} m/s`;
      this.humidity.textContent = `${data.main.humidity}%`;
    }
    else {
      this.inputCity.value = '';
      this.inputCity.setAttribute('placeholder', 'Enter correct city');
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
      <div class="feels">Feels like <span class="feels-temp"></span><span>&deg; C</span></div>
    </div>
    <div class="wind-humidity">
      <span class="wind"></span>
      <span class="humidity"</span>
    </div>
    `
  }
}