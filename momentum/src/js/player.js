import createElement from "./createElement";
import playlist from "./playlist";

export default class Player {
  constructor() {
    this._container = null;
    this.currentAudio = 0;
    this.render();
  }

  get elem() {
    return this._container;
  }

  render() {
    this._container = createElement('player-container', this.playerTemplate(playlist));
    this.audio = new Audio();
    this.initAudio(this.currentAudio);
    this.eventListeners();
  }

  get playerTitle() {
    return this._container.querySelector('.player-title')
  }

  get playerProgress() {
    return this._container.querySelector('.player-progress')
  }

  get playerCurrentTime() {
    return this._container.querySelector('.current-time')
  }

  get playerDuration() {
    return this._container.querySelector('.duration')
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

  get playList() {
    return this._container.querySelector('.playlist');
  }

  get playlistItems() {
    return this._container.querySelectorAll('.playlist-item');
  }

  convertTime(time) {
    const seconds = Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60);
    const minutes = Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60);
    return `${minutes}:${seconds}`
  }

  initAudio(number) {
    this.audio.removeEventListener('timeupdate', this.updatePlayerProgress);
    this.audio.src = playlist[number].src
    this.audio.currentTime = 0;
    this.playerCurrentTime.textContent = '00:00';
    this.playerDuration.textContent = playlist[number].duration;
    this.playerProgress.value = 0;
    this.volumeValue = 0.5;
    this.audio.volume = this.volumeValue;
  }

  highlightCurrentAudio = () => {
    this.playlistItems.forEach(item => item.classList.remove('highlight'));
    this.playlistItems[this.currentAudio].classList.add('highlight');
  }

  playAudio = () => {
    this.initAudio(this.currentAudio);
    this.playerTitle.textContent = playlist[this.currentAudio].title;
    this.highlightCurrentAudio();
    this.audio.play();
    this.audio.addEventListener('timeupdate', this.updatePlayerProgress);
  }

  updatePlayerProgress = () => {
    let currentTime = this.audio.currentTime;
    const duration = this.audio.duration;
    let percent = Math.floor(currentTime) / Math.floor(duration) * 100 || 0;
    this.playerProgress.value = Math.round(percent);
    this.playerCurrentTime.textContent = this.convertTime(currentTime);
  }
  
  setAudioTime = () => {
    let percent = this.playerProgress.value;
    const duration = this.audio.duration;
    let currentTime = Math.floor(percent) * Math.floor(duration) / 100;
    this.audio.currentTime = Math.floor(currentTime);
    this.audio.addEventListener('timeupdate', this.updatePlayerProgress);
  }

  prevAudio = () => {
    this.currentAudio--;
    if (this.currentAudio < 0) this.currentAudio = playlist.length - 1;
    this.playAudio();
  }

  nextAudio = () => {
    this.currentAudio++;
    if (this.currentAudio > playlist.length - 1) this.currentAudio = 0;
    this.playAudio();
  }

  audioControl = (event) => {
    const target = event.target;
    if (target.tagName != 'BUTTON') return;

    if(target.classList.contains('button-prev')) {
      target.nextElementSibling.classList.remove('paused');
      this.prevAudio();
    }

    if(target.classList.contains('button-next')) {
      target.previousElementSibling.classList.remove('paused');
      this.nextAudio();
    }

    if(target.classList.contains('button-play')) {
      if (this.audio.paused) {
        this.audio.addEventListener('timeupdate', this.updatePlayerProgress);
        target.classList.toggle('paused');
        this.highlightCurrentAudio();
        this.audio.play();
      }
      else {
        this.audio.removeEventListener('timeupdate', this.updatePlayerProgress);
        target.classList.toggle('paused');
        this.audio.pause();
      }
    }
  }

  updateVolume = () => {
    this.audio.volume = this.volumeBar.value;
    if (this.audio.volume == 0) {
      this.volumeButton.classList.remove('active');
    }
    else {
      this.volumeButton.classList.add('active');
    }
  }

  volumeControl = () => {
    this.volumeButton.classList.toggle('active');
    if (this.volumeButton.classList.contains('active')) {
      this.audio.volume = this.volumeValue;
      this.volumeBar.value = this.volumeValue;
      this.updateVolume();
    }
    else {
      this.volumeValue = this.audio.volume;
      this.volumeBar.value = 0;
      this.audio.volume = 0;
      this.updateVolume();
    }
  }

  chooseAudioFromPlaylist = (event) => {
    const target = event.target;
    if (target.tagName !== 'BUTTON') return;

    this.currentAudio = target.dataset.index;
    this.playAudio();
  }

  eventListeners() {
    this.controls.addEventListener('click', this.audioControl)
    this.volumeButton.addEventListener('click', this.volumeControl);
    this.volumeBar.addEventListener('input', this.updateVolume);
    this.playerProgress.addEventListener('pointerdown', () => {
      this.audio.removeEventListener('timeupdate', this.updatePlayerProgress);
      this.playerProgress.addEventListener('pointerup', this.setAudioTime)
      this.playerProgress.addEventListener('touchend', this.setAudioTime)
    });
    this.audio.addEventListener('ended', this.nextAudio)
    this.playList.addEventListener('click', this.chooseAudioFromPlaylist)
  }

  playerTemplate(playlist) {
    return `
    <p class="player-title">${playlist[this.currentAudio].title}</p>
    <div class="controls">
      <div class="controls-progress">
        <span class="current-time">00:00</span>
        <input type="range" min="0" max="100" value="0" class="player-progress">
        <span class="duration"></span>
      </div>
      <div class="controls-buttons">
        <button type="button" class="button button-prev" name="prevTrack"></button>
        <button type="button" class="button button-play paused" name="play"></button>
        <button type="button" class="button button-next" name="nextTrack"></button>
      </div>
      <div class="controls-volume">
        <button type="button" class="volume-button active"></button>  
        <input type="range" min="0" max="1" step="0.01" value="0.5" class="player-volume">
      </div>
    </div>
    <ul class="playlist">
      ${playlist.map((item, index) => 
        `<li class="playlist-item">
          <button type="button" class="button button-item" data-index="${index}"></button>
          <span>${item.title}</span>
        </li>`).join('')}
    </ul>`
  }

}