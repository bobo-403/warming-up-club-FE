// (function () {
//   var aName = 'Barry';
// })();

// IIFE 내부에서 정의된 변수는 외부 범위에서 접근 불가
//console.log(aName); // not defined

var result = (function () {
  var name = 'Barry';
  return name;
})();

console.log(result);

// 함수 이름 없으려면 두가지 조건 충족
// 할당받을 변수 지정
const hello = function (a, b) {
  return a - b;
};

// 즉시 호출
(function (a, b) {
  return a - b;
})(1, 2);

const score = () => {
  let count = 0;
  return {
    current: () => {
      return count;
    },
    increment: () => {
      count++;
    },
    reset: () => {
      count = 0;
    },
  };
};

console.log(typeof score);
console.log(score);
console.log(score().current());
score().increment(); // ++ 해도
console.log(score().current()); // score를 다시 부르면 0으로 초기화 되서 0임
// => 이럴때 즉시 실행 함수로 실행하자

const score1 = (() => {
  let count = 0;
  return {
    current: () => {
      return count;
    },
    increment: () => {
      count++;
    },
    reset: () => {
      count = 0;
    },
  };
})();

console.log(typeof score1);
console.log(score1);
console.log(score1.current());
score1.increment();
console.log(score1.current());

const increment = () => {
  let counter = 0;
  console.log(counter);
  const number = (num) => console.log(`It is ${num} number`);
  return () => {
    counter++;
    number(counter);
  };
};

increment(); // 0
increment(); // 마찬가지로 0이 됨

const increment1 = (() => {
  let counter = 0;
  console.log(counter);
  const number = (num) => console.log(`It is ${num} number`);
  return () => {
    counter++;
    number(counter);
  };
})();

console.log(increment1);
increment1(); // 1
increment1(); // 2
