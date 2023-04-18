var score = 0;
var endBlock = document.getElementById('gameEnd');
var endBlockPos = getComputedStyle(endBlock);

document.getElementById('block').addEventListener('click', game);

function game() {
  score++; 
  var block = document.getElementById('block');
  var userScore = document.getElementById('scoreCard');
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

  if(score == 10){
    endBlock.style.display = 'block';
    block.style.display = 'none';
    userScore.style.top = '50%';
    userScore.style.left = '50%';
    userScore.style.transform = 'translate(-50%, -50%)';
    userScore.style.height = '400px'
    userScore.style.width = '400px'
    userScore.style.fontSize = '56px'
  }
}