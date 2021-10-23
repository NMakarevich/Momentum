import createElement from "./createElement";

export default class Quotes {
  constructor() {
    this._container = null;
    this._locale = localStorage.getItem('momentumLocale') || 'en';
    this.array = [];
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

  changeQuote = () => {
    this.reloadButton.classList.add('animation');
    this.getQuote();
  }

  render() {
    this._container = createElement('quotes-container', this.quotesTemplate());
    this.eventListeners();
    this.getQuote();
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