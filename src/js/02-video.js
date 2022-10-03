import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// const throttle = require('lodash.throttle');


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = 'videoplayer-current-time';

player.on('timeupdate', throttle(timeUpDate, 1000));

function timeUpDate(data) {
  localStorage.setItem(currentTime, data.seconds);
}

player.setCurrentTime(localStorage.getItem(currentTime));