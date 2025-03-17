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

// next 버튼 선택했을때 이벤트
//  next 버튼 없애기기
//  다음 문제 불러오기
//  선지 버튼 색 원래 상태로

// restart 버튼 선택했을때 이벤트
//  restart 버튼 삭제
//  퀴즈 초기 상태로 변환
//  다시 시작
