// 'use strict'; // 느슨한 모드에서 엄격한 모드로 변경

// function sum(a, b) {
//   //'use strict' 함수 안에 넣어줄 수도 있음
//   return a + b;
// }

// class Cat {
//   // 클래스 문법 사용시 자동으로 stric mode
// }

let greeting = 'hello';

greating = 'hi';
// strict mode가 아닐때는 에러 발생 X
// strict mode시 에러 발생 O

console.log(greeting);
console.log(greeting, window.greating); // 자동으로 윈도우 객체에 할당 되서 hi가 들어감

undefined = 8; // indefined에 값 할당 시 strict mode가 아닐때는 에러 발생 X
NaN = 10; // NaN에 값 할당 시 strict mode가 아닐때는 에러 발생 X

const obj = {};

Object.defineProperty(obj, 'readOnly', {
  writable: false, // 값이 바뀌지 않도록 설정
  value: 7,
});

obj.readOnly = 10; // 안바뀜, strict mode가 아닐때는 에러 발생 X

console.log(obj);

const obj1 = {
  get readOnly() {
    return 7; // 수정할 수 없음음
  },
};

console.log(obj1.readOnly);

obj1.readOnly = 10; // 안바뀜, strict mode가 아닐때는 에러 발생 X

console.log(obj1.readOnly);

function add(a, a, b) {
  // 같은 매개변수를 가져옴
  return a + a + b;
}

console.log(add(1, 2, 3)); //stric mode에서 파라미터 매개변수 중복 X

'string'.prop = 7; // string에다가 속성을 넣을 수는 없음
console.log('string'.prop); // undefined, strict mode가 아닐때는 에러 발생 X

function sum(a, b) {
  console.log(this);
  return a + b;
}

console.log(this); // stript scope 안 this = window 객체
sum(1, 2); // 함수 안 this = window 객체인데 strict mode에서는 undefined
sum.bind(this)(1, 2); // strick mode에서 함수 안 this가 window 객체 가르치도록 하려면
