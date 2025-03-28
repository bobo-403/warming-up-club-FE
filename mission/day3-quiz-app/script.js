// 현재 문제 번호
let quizIndex = 0;

// 퀴즈 data 불러오기
async function getData() {
  const response = await fetch('./data.json');
  return response.json();
}

// 문제와 선지 생성
function createQuiz(data) {
  const id = document.getElementById('id');
  const question = document.getElementById('question');
  id.textContent = data.id;
  question.textContent = data.question;

  const choices = document.querySelectorAll('.option');
  choices.forEach((choice, idx) => {
    choice.textContent = data.choices[idx];
    choice.removeAttribute('id');
  });
}

// 선지 버튼을 선택했을때 이벤트
//  선택한 것이 정답인 경우
//    선택한 선지를 초록색
//  선택한 것이 정답이 아닌 경우
//    선택한 선지 빨간색
//    정답 선지 초록색
//  다음 문제가 있을 경우
//    next 버튼 생성
//  마지막 문제인 경우
//    restart 버튼 생성
function viewResult(e, data) {
  const choices = document.querySelectorAll('.option');
  const correctIdx = data.choices.indexOf(data.answer);
  choices[correctIdx].id = 'correct';

  if (e.target.textContent !== data.answer) e.target.id = 'incorrect';

  choices.forEach((choice) => {
    choice.disabled = true;
  });

  if (quizIndex < 9) {
    const next = document.querySelector('.next');
    next.classList.remove('hidden');
    return;
  }

  const restart = document.querySelector('.restart');
  restart.classList.remove('hidden');
}

// next 버튼 선택했을때 이벤트
//  next 버튼 없애기기
//  다음 문제 불러오기
//  선지 버튼 색 원래 상태로

function viewNextQuiz(e, data) {
  createQuiz(data);
  const next = document.querySelector('.next');
  next.classList.add('hidden');

  const choices = document.querySelectorAll('.option');
  choices.forEach((choice) => {
    choice.disabled = false;
  });
}

// restart 버튼 선택했을때 이벤트
//  restart 버튼 삭제
//  퀴즈 초기 상태로 변환
//  다시 시작
function reset(e, data) {
  quizIndex = 0;
  const restart = document.querySelector('.restart');
  restart.classList.add('hidden');

  createQuiz(data);
}

async function main() {
  const data = await getData();

  const choiceBox = document.querySelector('.buttonWrapper');
  choiceBox.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') return;

    if (e.target.textContent === 'next')
      return viewNextQuiz(e, data[++quizIndex]);

    if (e.target.textContent === 'restart') return reset(e, data[0]);

    viewResult(e, data[quizIndex]);
  });

  createQuiz(data[quizIndex]);
}

main();
