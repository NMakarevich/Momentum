import createElement from "./createElement";

export default class Slider {
  constructor() {
    this._container = null;
    this.number = null;
    this.render();
  }

  render() {
    document.body.style.backgroundColor = '#B3B3B3'
    this._container = createElement('slider-buttons', this.sliderTemplate());
    this.number = this.getRandomNum();
    this.setBackground(this.getTimeOfDay(), this.number);
    this._container.addEventListener('click', this.changeBackground);
  }

  get elem() {
    return this._container;
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
      this.setBackground(this.getTimeOfDay(), this.number)
    }
    else {
      this.number === 20 ? this.number = 1 : this.number++;
      this.setBackground(this.getTimeOfDay(), this.number);
    }
  }

  setBackground(time, number) {
    const img = new Image();
    number = number < 10 ? `0${number}` : number;
    img.src = `https://raw.githubusercontent.com/NMakarevich/stage1-tasks/assets/images/${time}/${number}.jpg`;
    img.onload = () => {
      document.body.style.backgroundImage = `url(${img.src})`;
    }
  }

  sliderTemplate() {
    return `
    <button type="button" name="prev-slide" class="button button-prev"></button>
    <button type="button" name="next-slide" class="button button-next"></button>
    `
  }
}