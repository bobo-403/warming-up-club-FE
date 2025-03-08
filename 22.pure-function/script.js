// 함수 외부 값 변경 시킴 not pure function
// let x = 0;
// const numberUp = () => x + 1;
// console.log(numberUp());
// console.log(x);

let x = 0;
const pureNumberUp = (num) => num + 1;
console.log(pureNumberUp());
console.log(x);
