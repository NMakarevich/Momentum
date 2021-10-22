import createElement from "./createElement";

export default class Slider {
  constructor() {
    this._container = null;
    this.number = null;
    this._imageSource = localStorage.getItem('momentumImageSource') || 'git';
    this.render();
  }

  render() {
    document.body.style.backgroundColor = '#B3B3B3'
    this._container = createElement('slider-buttons', this.sliderTemplate());
    this.number = this.getRandomNum();
    this.setBg(this.getTimeOfDay());
    this._container.addEventListener('click', this.changeBackground);
  }

  get elem() {
    return this._container;
  }

  set imageSource(value) {
    this._imageSource = value;
    localStorage.setItem('momentumImageSource', this._imageSource)
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
      this.setBg(this.getTimeOfDay())
    }
    else {
      this.number === 20 ? this.number = 1 : this.number++;
      this.setBg(this.getTimeOfDay());
    }
  }

  async setBg(time) {
    if(this._imageSource == 'git') this.setBgGit(time);
    if(this._imageSource == 'unsplash') this.setBgUnsplash(time);
    if(this._imageSource == 'flickr') this.setBgFlickr(time);
  }

  setBgGit(time) {
    const img = new Image();
    const number = this.number < 10 ? `0${this.number}` : this.number;
    img.src = `https://raw.githubusercontent.com/NMakarevich/stage1-tasks/assets/images/${time}/${number}.jpg`;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${img.src})`;
    }
  }

  async setBgUnsplash(time) {
    const res = await fetch(`https://api.unsplash.com/photos/random/?client_id=iOl0nDotHygXF4pVzFBy3sEQB0V3pkCBbZF8pblRz8Y&orientation=landscape&query=${time},nature`)
    const body = await res.json();
    const regular = await body.urls.regular;
    const img = new Image();
    img.src = regular;
    img.onload = () => {
        document.body.style.backgroundImage = `url(${regular})`;
    }
  }

  async setBgFlickr(time) {
    const res = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=26e8f99f024428ff261410fb77ad5110&tags=nature,${time}&tags_mode=all&extras=url_l&format=json&nojsoncallback=1`)
    const body = await res.json();
    const photos = await body.photos.photo;
    const randomPhoto = Math.floor(Math.random() * 100);
    const photo = await photos[randomPhoto].url_l;
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