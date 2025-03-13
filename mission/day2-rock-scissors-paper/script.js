const hand = ['Rock', 'Sicssors', 'Paper'];
const leftCount = document.getElementById('count');
const playerScore = document.getElementById('player_score');
const computeScore = document.getElementById('computer_score');
const result = document.querySelector('.result');

function randomComHand() {
  return hand[Math.floor(Math.random() * 3)];
}

function getResult(playerHand, computerHand) {
  if (
    (playerHand === 'Rock' && computerHand === 'Rock') ||
    (playerHand === 'Sicssors' && computerHand === 'Sicssors') ||
    (playerHand === 'Paper' && computerHand === 'Paper')
  )
    return 'draw!';
  if (
    (playerHand === 'Rock' && computerHand === 'Sicssors') ||
    (playerHand === 'Sicssors' && computerHand === 'Paper') ||
    (playerHand === 'Paper' && computerHand === 'Rock')
  ) {
    ++playerScore.textContent;
    return 'win!';
  }
  ++computeScore.textContent;
  return 'lose!';
}

function handBntHandler(e) {
  const playerHand = e.target.textContent;
  const computerHand = randomComHand();
  const resultText = getResult(playerHand, computerHand);
  result.textContent = resultText;
}

function retryBntHandler(e) {
  e.target.classList.add('hidden');
  const hands = document.querySelectorAll('.hand');
  hands.forEach((hand) => hand.classList.remove('hidden'));
  leftCount.textContent = 10;
  playerScore.textContent = 0;
  computeScore.textContent = 0;
  result.textContent = '';
}

function viewFinalResult() {
  const hands = document.querySelectorAll('.hand');
  hands.forEach((hand) => hand.classList.add('hidden'));
  const retry = document.querySelector('.retry');
  retry.classList.remove('hidden');
  if (computeScore.innerText === playerScore.innerText)
    result.innerText = 'Final Result : DRAW!';
  else {
    const status =
      playerScore.innerText > computeScore.innerText ? 'WIN!' : 'LOSE!';
    result.innerText = `Final Result : ${status}`;
  }
}

function main() {
  const buttonWrapper = document.querySelector('.button-wrapper');
  buttonWrapper.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') return;

    if (e.target.textContent === 'Retry') return retryBntHandler(e);

    handBntHandler(e);

    if (--leftCount.textContent === 0) viewFinalResult();
  });
}

main();
