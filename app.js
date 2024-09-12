const clock = document.querySelector('.js-clock-container');

setInterval(function(){
  let shield = new Date();

  let htmlElement = `
  ${shield.getHours()}:
  ${shield.getMinutes()}:
  ${shield.getSeconds()}
  `
  clock.innerHTML = htmlElement;
}, 1000);

const startButton = document.querySelector('.js-start-button');
const stopButton = document.querySelector('.js-stop-interval');
const resetButton = document.querySelector('.js-reset-interval');

let timeUnits = JSON.parse(localStorage.getItem('timeUnits')) || {
  count100Seconds: 0,
  countSeconds: 0,
  countMinutes: 0,
}

let intervalId;
timerWorking = false;

renderTimer();

function setTimer(){
  if(!timerWorking){
    intervalId = setInterval(()=>{
      timeUnits.count100Seconds++;
      intervalSecond();
      renderTimer();
    }, 10);
    timerWorking = true;
  }else {
    clearInterval(intervalId);
    intervalId = setInterval(()=>{
      timeUnits.count100Seconds++;
      intervalSecond();
      renderTimer();
    }, 10);
  };
};

function renderTimer(){
  document.querySelector('.js-minutes-timer').innerHTML = `${timeUnits.countMinutes} `
  document.querySelector('.js-seconds-timer').innerHTML = ` ${timeUnits.countSeconds}`
  document.querySelector('.js-timer-element').innerHTML = ` ${timeUnits.count100Seconds}`;
};

let countdown = false;

startButton.addEventListener('click', ()=>{
  
  if(!countdown){
    setTimer();
    countdown = true;
    startButton.innerHTML = 'STOP';
    Startrotate();
    sandTimerActive();
  }else{
    clearInterval(intervalId);
    countdown = false;
    startButton.innerHTML = 'START';
    Stoprotate();
    stopSandTimerWork();
  };
});

resetButton.addEventListener('click', ()=> {
  resetInterval();
  localStorage.setItem()
});

function resetInterval(){
  timeUnits.count100Seconds = 0;
  timeUnits.countSeconds = 0;
  timeUnits.countMinutes = 0;
  renderTimer();
  localStorage.setItem('timeUnits', JSON.stringify(timeUnits));
}

function intervalSecond(){
  if(timeUnits.count100Seconds === 100){
    timeUnits.countSeconds++;
    timeUnits.count100Seconds = 0;
  }

  if(timeUnits.countSeconds === 60){
    timeUnits.countMinutes++;
    timeUnits.countSeconds = 0;
  }
}

document.querySelector('.js-save-interval').addEventListener('click', () => {
  localStorage.setItem('timeUnits', JSON.stringify(timeUnits));
})

let rotating = false;
let rotatingId;

function Startrotate(){
  rotatingId = setInterval(()=> {
    if(!rotating){
      document.querySelector('.js-hoola-hoop').classList.add('css-hoola-hoop-rotation');
      rotating = true;
    }else{
      document.querySelector('.js-hoola-hoop').classList.remove('css-hoola-hoop-rotation');
      rotating = false;
    }
  }, 10)
}

function Stoprotate(){
  clearInterval(rotatingId);
  document.querySelector('.js-hoola-hoop').classList.remove('css-hoola-hoop-rotation');
};

let isImgChanged = false;

function imgChanging(){
  setInterval(()=>{
    if(!isImgChanged){
      document.querySelector('.js-img-loading').classList.add('css-img-loading-rotate');
      isImgChanged = true;
    }else{
      document.querySelector('.js-img-loading').classList.remove('css-img-loading-rotate');
      isImgChanged = false;
    }
  }, 100)  
};

imgChanging();

let isSandTimerActive = false;
let sandTimerId;

function sandTimerActive(){

 sandTimerId = setInterval( () => {
    if(!isSandTimerActive){
      document.querySelector('.js-img-sand-times').classList.add('css-img-sand-timer-rotate');
      isSandTimerActive = true;
    }else{
      document.querySelector('.js-img-sand-times').classList.remove('css-img-sand-timer-rotate');
      isSandTimerActive = false;
    }
  }, 1000)
}

function stopSandTimerWork(){
  clearInterval(sandTimerId);
}









