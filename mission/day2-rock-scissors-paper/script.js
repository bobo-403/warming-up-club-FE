const randomHand = ['Rock', 'Sicssors', 'Paper'];

function main() {
  const buttons = document.querySelectorAll('button');
  const result = document.querySelector('.result');
  const playerScore = document.getElementById('player_score');
  const computeScore = document.getElementById('computer_score');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const countElement = document.getElementById('time');
      let count = Number(countElement.innerText);
      if (count === 0) return;

      countElement.innerText = --count;

      const playerHand = button.innerText;
      const computerHand = randomHand[Math.floor(Math.random() * 3)];

      if (
        (playerHand === 'Rock' && computerHand === 'Rock') ||
        (playerHand === 'Sicssors' && computerHand === 'Sicssors') ||
        (playerHand === 'Paper' && computerHand === 'Paper')
      )
        result.innerText = 'draw!';
      else if (
        (playerHand === 'Rock' && computerHand === 'Sicssors') ||
        (playerHand === 'Sicssors' && computerHand === 'Paper') ||
        (playerHand === 'Paper' && computerHand === 'Rock')
      ) {
        result.innerText = 'win!';
        playerScore.innerText = Number(playerScore.innerText) + 1;
      } else if (
        (playerHand === 'Rock' && computerHand === 'Paper') ||
        (playerHand === 'Sicssors' && computerHand === 'Rock') ||
        (playerHand === 'Paper' && computerHand === 'Sicssors')
      ) {
        result.innerText = 'lose!';
        computeScore.innerText = Number(computeScore.innerText) + 1;
      }

      if (count === 0) {
        if (Number(computeScore.innerText) === Number(playerScore.innerText))
          setTimeout(() => (result.innerText = 'Final Result : DRAW!'), 1000);
        else {
          const status =
            Number(playerScore.innerText) > Number(computeScore.innerText)
              ? 'WIN!'
              : 'LOSE!';
          setTimeout(
            () => (result.innerText = `Final Result : ${status}`),
            1000
          );
        }
      }
    });
  });
}

main();

// 버튼이 눌리면 횟수 확인
// 0번 보다 많으면 실행
// 횟수 감소
// 컴퓨터 가위바위보 중에 랜덤 뽑기
// 클릭한 버튼의 내용 확인
// 승패 계산
// 결과 발표
// 만약 버튼이 0이라면 파이널 우승자출력
