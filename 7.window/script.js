let val;

val = window.outerHeight;
val = window.outerWidth;

val = window.innerHeight;
val = window.innerWidth;

val = window.scrollY;
val = window.scrollX;

val = window.location;

//window.location.href = 'http://google.com/';

console.log(val);

// html은 요소(DOM)들로 구성되어 있음
// Browser Object Model
// window.document : Document Object Model
// 돔은 트리 구조로 표현 하는 것
// 돔의 하나하나의 요소임 이것을 API를 이용하여 접근, 업데이트, 조작할 수 있음
// document가 브라우저에서 제공해주는 것임
// css 작성한것도 CSDOM으로 바꾸고 DOM 과 결합, 최종 렌더링 트리
