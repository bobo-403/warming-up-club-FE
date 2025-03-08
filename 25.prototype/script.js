let user = {
  name: 'john',
  age: 45,
};

console.log(user.name);
console.log(user.hasOwnProperty('email'));

// 모든 객체는 global Object prototype을 가짐.

function Person(name, email, birthday) {
  this.name = name;
  this.email = email;
  this.birthday = new Date(birthday);
  // this.calculateAge = function () {
  //   const diff = Date.new() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // };
}

// 프로토타입 => 재사용 가능, 메모리 적게 사용

// calculateAge 함수는 같기 때문에 프로토타입에 넣어주면 좋음

Person.calculateAge = function () {
  const diff = Date.new() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const john = new Person('john', 'john@example.com', '7-10-91');
const han = new Person('han', 'han@example.com', '2-11-91');
console.log(john);
console.log(han);

// Object.create 사용하여 프로토 타입에 넣음

function Person1(name, email, birthday) {
  const person = Object.create(personsPrototype); // 객체를 만듦
  person.name = name;
  person.email = email;
  person.birthday = new Date(birthday);
  return person;
}

const personsPrototype = {
  calculateAge() {
    const diff = Date.new() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  },
};

const john1 = new Person1('john', 'john@example.com', '7-10-91');
const han1 = new Person1('han', 'han@example.com', '2-11-91');
console.log(john1);
console.log(han1);
