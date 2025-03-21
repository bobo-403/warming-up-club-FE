// submit 버튼을 눌렀을 때
// BookName, Author 입력값을 가져옴
//  없다면
//    입력하라는 경고 메시지
//  있다면
//    입력란을 다시 초기화

function getData() {
  const nameInput = document.getElementById('name');
  const authorInput = document.getElementById('author');

  const bookName = nameInput.value;
  const author = authorInput.value;

  nameInput.value = '';
  authorInput.value = '';

  return [bookName, author];
}

//    입력값을 book-item으로 추가
function addBookItem(bookName, author) {
  const bookWrapper = document.querySelector('.book-wrapper');
  const bookItem = document.createElement('div');
  bookItem.className = 'book-item';
  bookItem.innerHTML = `
        <span>${bookName}</span>
        <span>${author}</span>
        <span>X</span>
      `;
  bookWrapper.appendChild(bookItem);
}

//    입력 완료 되었다는 알림 추가
function addAlarm(message) {
  const alarmWrapper = document.querySelector('.alarm-wrapper');
  const alarm = document.createElement('div');
  alarm.className = 'alarm';
  alarm.textContent = message;
  alarmWrapper.appendChild(alarm);
  return alarm;
}

//    알림 삭제
function removeAlarm(alarm) {
  const alarmWrapper = document.querySelector('.alarm-wrapper');
  alarmWrapper.removeChild(alarm);
}

function registerBook(e) {
  e.preventDefault();

  const [bookName, author] = getData();
  if (bookName === '' || author === '')
    return alert('책 이름과 저자 이름을 입력해주세요!');

  addBookItem(bookName, author);
  const alarm = addAlarm('Book recored has been added');

  setTimeout(() => removeAlarm(alarm), 3000);
}

// 등록된 도서 삭제 버튼을 눌렀을 때
// 표에서 해당 book-item 정보 삭제
// 삭제 알림 추가
