var score = 0;
var restart_button = document.getElementById('restart');
var userScore = document.getElementById('scoreCard');
var block = document.getElementById('block');
var timer = document.getElementById('timer');

var gameTimeInSeconds = 25;
var timerInterval;

document.getElementById('block').addEventListener('click', game);
document.getElementById('restart').addEventListener('click', restartGame);

function game() {
  score++;
  var blockWidth = block.offsetWidth;
  var blockHeight = block.offsetHeight;
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var top = Math.random() * (windowHeight - blockHeight);
  var left = Math.random() * (windowWidth - blockWidth);

  if (left + blockWidth > windowWidth) {
    left = windowWidth - blockWidth;
  }

  if (top + blockHeight > windowHeight) {
    top = windowHeight - blockHeight;
  }

  if (left < 0) {
    left = 0;
  }

  if (top < 0) {
    top = 0;
  }

  block.style.top = top + 'px';
  block.style.left = left + 'px';
  document.getElementById('scoreCard').textContent = 'Score: ' + score;

  if (timer.textContent === '00:00') {
    restart_button.style.display = 'block';
  }
}

function restartGame() {
  score = 0;
  restart_button.style.display = 'none';
  document.getElementById('scoreCard').textContent = 'Score: ' + score;

  startTimer();
  game();
}

function startTimer() {
  var secondsRemaining = gameTimeInSeconds;
  timer.textContent = formatTime(secondsRemaining);

  timerInterval = setInterval(function() {
    secondsRemaining--;

    if (secondsRemaining >= 0) {
      timer.textContent = formatTime(secondsRemaining);
    } else {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000); 
}

function formatTime(seconds) {
  var minutes = Math.floor(seconds / 60);
  var remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function endGame() {
  restart_button.style.display = 'block';
}

startTimer();
