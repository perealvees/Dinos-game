const dino = document.querySelector('.dino');
const background = document.querySelector('.background');

function handleKeyUp(event) {
    if (event.keyCode === 32) {
      if (!isJumping) {
        jump();
      }
    }
  }

document.addEventListener ('keyup', handleKeyUp);
