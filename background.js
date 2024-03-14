function throwConfetti() {
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.left = 0;
  container.style.top = 0;
  container.style.width = '100vw';
  container.style.height = '100vh';
  container.style.pointerEvents = 'none';
  document.body.appendChild(container);

  const colors = ['#f00', '#0f0', '#00f'];

  for (let i = 0; i < 100; i++) {
    const confettiPiece = document.createElement('div');
    confettiPiece.style.position = 'absolute';
    confettiPiece.style.left = Math.random() * 100 + 'vw';
    confettiPiece.style.top = '-10px';
    confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confettiPiece.style.width = '5px';
    confettiPiece.style.height = '5px';
    confettiPiece.style.borderRadius = '50%';
    confettiPiece.style.animation = 'confettiFall 3s linear';
    container.appendChild(confettiPiece);
  }

  setTimeout(() => {
    container.parentNode.removeChild(container);
  }, 3000);
}

chrome.runtime.onInstalled.addListener(() => {
  chrome.action.onClicked.addListener(throwConfetti);
});

// Optional animation styles (add to confetti.css)
@keyframes confettiFall {
  0% {
    top: -10px;
    transform: rotate(0deg);
  }
  100% {
    top: 110vh;
    transform: rotate(360deg);
  }
}
