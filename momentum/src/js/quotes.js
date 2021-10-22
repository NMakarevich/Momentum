import createElement from "./createElement";

export default class Quotes {
  constructor() {
    this._container = null;
    this._locale = localStorage.getItem('momentumLocale') || 'en'
    this.render();
  }

  get elem() {
    return this._container;
  }

  get reloadButton() {
    return this._container.querySelector('.button-reload');
  }

  changeQuote = () => {
    this.reloadButton.classList.add('animation')
  }

  render() {
    this._container = createElement('quotes-container', this.quotesTemplate());
    this.eventListeners();
  }

  eventListeners() {
    this.reloadButton.addEventListener('click', this.changeQuote)
    this.reloadButton.addEventListener('transitionend', () => {
      this.reloadButton.classList.remove('animation');
    })
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