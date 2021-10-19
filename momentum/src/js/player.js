import createElement from "./createElement";
import playlist from "./playlist";

export default class Player {
  constructor() {
    this._container = null;
    this.render();
    this.volumeValue = 0.5;
    this.audio = new Audio();
  }

  get elem() {
    return this._container;
  }

  render() {
    this._container = createElement('player-container', this.playerTemplate(playlist));
    this.eventListeners();
  }

  get volumeButton() {
    return this._container.querySelector('.volume-button');
  }

  get volumeBar() {
    return this._container.querySelector('.player-volume');
  }

  get controls() {
    return this._container.querySelector('.controls-buttons');
  }

  get playlistItems() {
    return this._container.querySelector('.playlist');
  }

  updateVolume = () => {
    const volSVG = 'url(./assets/svg/volume.svg)';
    const muteSVG = 'url(./assets/svg/mute.svg)';
    this.audio.volume = this.volumeBar.value;
    if (this.audio.volume == 0) {
      this.volumeButton.classList.remove('active');
      this.volumeButton.style.backgroundImage = muteSVG;
    }
    else {
      this.volumeButton.classList.add('active');
      this.volumeButton.style.backgroundImage = volSVG;
    }
  }

  volumeControl = () => {
    const volSVG = 'url(./assets/svg/volume.svg)';
    const muteSVG = 'url(./assets/svg/mute.svg)';
    this.volumeButton.classList.toggle('active');
    if (this.volumeButton.classList.contains('active')) {
      this.audio.volume = this.volumeValue;
      this.volumeBar.value = this.volumeValue;
      this.updateVolume();
      this.volumeButton.style.backgroundImage = volSVG;
    }
    else {
      this.volumeValue = this.audio.volume;
      this.volumeBar.value = 0;
      this.audio.volume = 0;
      this.updateVolume();
      this.volumeButton.style.backgroundImage = muteSVG;
    }
  }

  eventListeners() {
    this.volumeButton.addEventListener('click', this.volumeControl);
    this.volumeBar.addEventListener('input', this.updateVolume);
  }

  playerTemplate(playlist) {
    return `<p class="sound-name">${playlist[0].title}</p>
    <div class="controls">
      <div class="controls-volume">
        <button type="button" class="volume-button"></button>  
        <input type="range" min="0" max="1" step="0.01" value="0.5" class="player-volume">
      </div>
      <div class="controls-buttons">
        <button type="button" class="button button-prev" name="prevTrack"></button>
        <button type="button" class="button button-play" name="play"></button>
        <button type="button" class="button button-next" name="nextTrack"></button>
      </div>
    </div>
    <ul class="playlist">
      ${playlist.map(item => `<li class="playlist-item">${item.title}</li>`).join('')}
    </ul>`
  }

}