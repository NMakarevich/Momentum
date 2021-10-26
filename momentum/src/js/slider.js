import createElement from "./createElement";

export default class Slider {
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
    this._container = createElement('slider-buttons', this.sliderTemplate());
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