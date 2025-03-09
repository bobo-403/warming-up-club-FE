function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log('Outer function: ' + outerVariable);
    console.log('Inner function: ' + innerVariable);
  };
} // 내부함수가 끝난 부분의 outerVariable을 접근 가능

const newFunction = outerFunction('outside');
console.log('New function:' + newFunction);
newFunction('inside');

let a = 'a';

// function functionB() {
//   let c = 'c';
//   console.log(a, b, c);
// }

function functionA() {
  let b = 'b';
  function functionB() {
    let c = 'c';
    console.log(a, b, c);
  }
  functionB();
  console.log(a, b);
}
// 내부 함수에서 외부 함수에 있는 변수를 접근할 수 있는 것
functionA();
