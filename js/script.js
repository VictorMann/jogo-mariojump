const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


let flagJump = 0;

function jump() {
  !flagJump && mario.classList.add('jump');
  !flagJump && setTimeout(() => {
    mario.classList.remove('jump');
    flagJump = 0;
  }, 500);

  flagJump = 1;
}

const loop = setInterval(() => { 
  const pipePosition = pipe.offsetLeft;
  const marioPosition = parseFloat(window.getComputedStyle(mario).bottom);
  
   if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {
    pipe.style.animation = 'none';
    pipe.style.left = pipePosition + 'px';

    mario.style.animation = 'none';
    mario.style.bottom = marioPosition + 'px';
    mario.src = '/images/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';

    clearInterval(loop);
  }

}, 10);

document.addEventListener('keydown', jump);