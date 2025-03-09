const num1 = 20;
const num2 = 10;

let val;
// 간단한 연산
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.E;
val = Math.PI;
val = Math.round(2.4); // 가장 가까운 정수로 리턴
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.abs(-5); // 절댓값
val = Math.min(2, 3, 4, 5, 6, 7, 8, -1);
val = Math.max(2, 3, 4, 5, 6, 7, 8);
val = Math.random(); // 0과 1 사이 숫자

// 1-20 사이 정수 랜덤 리턴
val = Math.floor(Math.random() * 20 + 1);
console.log(val);
