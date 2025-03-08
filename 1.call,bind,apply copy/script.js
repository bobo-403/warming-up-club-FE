// Call();
const fullName1 = function (city, country) {
  console.log(this.firstName + ' ' + this.lastName, city, country);
};

const person1 = {
  firstName: 'John',
  lastName: 'Smith',
};

// .call 하고 객체를 넣으면 함수 안에서 this를 객체로 가짐
fullName1.call(person1, 'Oslo', 'Norway');

// Apply();
const fullName2 = function (city, country) {
  console.log(this.firstName + ' ' + this.lastName, city, country);
};

// apply에서는 인수를 배열을 넣어줌
fullName2.apply(person1, ['Oslo', 'Norway']);

// bind()
function func(language) {
  if (language === 'kor') {
    console.log(`language: ${this.korGreeting}`);
  } else {
    console.log(`language: ${this.engGreeting}`);
  }
}

const greeting = {
  korGreeting: '안녕',
  engGreeting: 'Hello',
};

// 함수를 직접 실행하는 것이 아니라 바인딩 함, 함수 자체를 다시 호출 해야함
const boundFunc = func.bind(greeting);
boundFunc('eng');
