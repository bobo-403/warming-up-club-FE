// 원시 타입
// 문자열 string
const name = 'han';
// Number
const age = 30;
// Boolean
const hasJob = true;
// null(대문자 X)
const car = null; // 명시적으로 없다고 표시할 때
// undefined
let anything;
// Symbol
const sym = Symbol();

// 참조 타입
// Array 배열 -> 결국 object의 한 형태
const hobbies = ['walking', 'books'];
// Object 객체
const address = {
  province: '경기도',
  city: '성남시',
};

console.log(typeof hobbies);
console.log(Array.isArray(hobbies));
