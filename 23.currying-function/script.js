const sum = (x, y) => x + y;

const curriedSum = (x) => (y) => x + y;

console.log(sum(10, 20));
console.log(curriedSum(10));
console.log(curriedSum(10)(20));

// 단일 호출로 처리하는 함수 => 각각의 인수가 호출 가능한 함수

const makeFood = (ingredient1) => {
  return (ingredient2) => {
    return (ingredient3) => {
      return `${ingredient1} ${ingredient2} ${ingredient3}`;
    };
  };
};

const hamburger = makeFood('Bread')('Ham')('Tomato');
console.log(hamburger);

// MakeFood 와 같음
const cleanMakeFood = (ingredient1) => (ingredient2) => (ingredient3) =>
  `${ingredient1} ${ingredient2} ${ingredient3}`;

const newHamburger = cleanMakeFood('Bread')('Ham')('Tomato'); // 세개를 다 넣어줘야 완성됨
console.log(newHamburger);

function log(date, important, message) {
  alert(
    `[${date.getHours()} : ${date.getMinutes()}]: [${important}] ${message}`
  );
}

// log(new Date(), 'DUBUG', 'some bug');

// currying function

function curry(f) {
  return function (a) {
    return function (b) {
      return function (c) {
        return f(a, b, c);
      };
    };
  };
}

const curriedLog = curry(log);

// 보통 함수를 커링이 된 함수로 변경
// curriedLog(new Date())('DEBUG')('some bug');

// 아래 쿼리 함수를 이용하면 매개변수의 개수와 상관 없이 커리가 된 함수로 사용 가능
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

const sum1 = (x, y, z, j, a) => x + y + z + j + a;
const curriedSum1 = curry(sum1);
console.log(curriedSum1(1)(2)(3)(4)(5));
