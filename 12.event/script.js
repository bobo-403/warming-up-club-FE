window.onload = function () {
  // 문서가 load 될 때 이 함수를 실행

  let text = document.getElementById('text');
  // 아이디가 'text'인 요소를 return

  text.innerText = 'HTML 문서 loaded';
};

const aElement = document.querySelector('a');

aElement.addEventListener('click', () => {
  alert('a element clicked');
});

const buttonElement = document.querySelector('.btn2');

buttonElement.addEventListener('click', (event) => {
  let val;
  val = event.target;
  val = event.target.id;
  val = event.target.className;
  val = event.target.classList;

  val = event.type;

  // 위도우로부터의 거리 좌표
  val = event.clientY;

  // 요소로 부터 거리 좌표
  val = event.offsetY;

  console.log(val);
});

const submitBtn = document.querySelector('.submit-btn');
const title = document.querySelector('h2');

//CLICK EVENT
submitBtn.addEventListener('click', handleEvent);
submitBtn.addEventListener('dbclibk', handleEvent);
submitBtn.addEventListener('mousedown', handleEvent);
submitBtn.addEventListener('mouseup', handleEvent);
submitBtn.addEventListener('mouseenter', handleEvent);
submitBtn.addEventListener('mouseleave', handleEvent);
submitBtn.addEventListener('mousemove', handleEvent);
// mousedown -> mouseup -> click 순서로 발생

function handleEvent(e) {
  e.preventDefault();
  console.log(`Event Type: ${e.type}`);
  title.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
}

const form = document.querySelector('form');
const emailInput = document.getElementById('email');
//FORM EVENT
form.addEventListener('submit', handleEvent1);
emailInput.addEventListener('keydown', handleEvent1); // 키를 누르는 순간
emailInput.addEventListener('keyup', handleEvent1); // 키를 뗄 떄
emailInput.addEventListener('keypress', handleEvent1); // 사용자가 누른 키가 입력될때
emailInput.addEventListener('focus', handleEvent1);
emailInput.addEventListener('blur', handleEvent1);
emailInput.addEventListener('cut', handleEvent1); // 복사
emailInput.addEventListener('paste', handleEvent1); // 붙여넣기
emailInput.addEventListener('input', handleEvent1); // input 요소값 달라질때

function handleEvent1(e) {
  if (e.type === 'submit') {
    e.preventDefault();
  }

  console.log(`Event Type: ${e.type}`);
  title.textContent = e.target.value;
}
