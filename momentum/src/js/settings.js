import createElement from "./createElement";
import localization from "./localization";

export default class Settings {
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

  get localeToggle() {
    return this._container.querySelector('input[id="language"]')
  }

  get sourceRadios() {
    return this._container.querySelectorAll('input[name="source"]')
  }

  get sectionsInputs() {
    return this._container.querySelectorAll('.list-section input')
  }

  get tagsInput() {
    return this._container.querySelector('#tags')
  }

  render() {
    this._container = createElement('settings', this.settingsTemplate());
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
  }

  changeLocale = () => {
    const event = new CustomEvent('changeLocale', {
      detail: this.localeToggle.checked,
      bubbles: true
    })
    this.elem.dispatchEvent(event);
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
    <div class="settings-container">
      <div class="language">
        <h2>${localization[this._locale].settings.lang}</h2>
        <div>
          <input type="checkbox" name="language" id="language">
          <span>En</span>
          <label for="language"></label>
          <span>Ru</span>
        </div>
      </div>
      <div class="bg-source">
        <h2>${localization[this._locale].settings.imgSrc}</h2>
        <div>
          <ul class="list list-source">
            <li class="list--item">
              <label for="git">GitHub</label>
              <input type="radio" name="source" id="git" checked>
            </li>
            <li class="list--item">
              <label for="unsplash">Unsplash API</label>
              <input type="radio" name="source" id="unsplash">
            </li>
            <li class="list--item">
              <label for="flickr">Flickr API</label>
              <input type="radio" name="source" id="flickr">
            </li>
          </ul>
          <div class="tags hidden">
            <span>${localization[this._locale].settings.tags}</span>
            <input type="text" name="tags" id="tags">
          </div>
        </div>
      </div>
      <div class="show-sections">
        <h2>${localization[this._locale].settings.show}</h2>
        <ul class="list list-section">
          <li class="list--item">
            <label for="player">${localization[this._locale].settings.player}</label>
            <input type="checkbox" name="player" id="player">
          </li>
          <li class="list--item">
            <label for="weather">${localization[this._locale].settings.weather}</label>
            <input type="checkbox" name="weather" id="weather">
          </li>
          <li class="list--item">
            <label for="quotes">${localization[this._locale].settings.quotes}</label>
            <input type="checkbox" name="quotes" id="quotes">
          </li>
        </ul>
      </div>
    </div>
    `
  }
}