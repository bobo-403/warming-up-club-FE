//Promise : 프로미스 지원하지 않는 함수를 감쌀떄 사용

function fetchData() {
  return new Promise((resolve, reject) => {
    //비동기 요청
    const success = false;
    if (success) {
      console.log('성공');
    } else {
      console.log('실패');
    }
  });
}

fetchData()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

fetch('http://jsonplaceholder.typicode.com/todos/1') // 프로미스 지원함
  .then((reponse1) => reponse1.json())
  .then((json) => console.log(json))
  .then(() => fetch('http://jsonplaceholder.typicode.com/todos/2'))
  .then((reponse2) => reponse2.json())
  .then((json2) => console.log(json2))
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('작업 끝!');
  });
