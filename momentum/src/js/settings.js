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
      tag[key].textContent = localization[this._locale].settings[key];
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
        <h2>${localization[this._locale].settings.lang}</h2>
        <div>
          <span>Ru</span>
          <input type="checkbox" name="language" id="language"><label for="language" class="toggle"></label>
          <span>En</span>
        </div>
      </div>
      <div class="bg-source">
        <h2>${localization[this._locale].settings.imgSrc}</h2>
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
            <span>${localization[this._locale].settings.tags}</span>
            <input type="text" name="tags" id="tags">
          </div>
        </div>
      </div>
      <div class="show-sections">
        <h2>${localization[this._locale].settings.show}</h2>
        <ul class="list list-section">
          <li class="list--item">
            <span class="player">${localization[this._locale].settings.player}</span>
            <input type="checkbox" name="player" id="player"><label for="player" class="toggle"></label>
          </li>
          <li class="list--item">
            <span class="weather">${localization[this._locale].settings.weather}</span>
            <input type="checkbox" name="weather" id="weather"><label for="weather" class="toggle"></label>
          </li>
          <li class="list--item">
            <span class="quotes">${localization[this._locale].settings.quotes}</span>
            <input type="checkbox" name="quotes" id="quotes"><label for="quotes" class="toggle"></label>
          </li>
        </ul>
      </div>
    </div>
    `
  }
}