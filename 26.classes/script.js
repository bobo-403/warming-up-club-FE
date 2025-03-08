class Person {
  constructor(name, email, birthday) {
    this.name = name;
    this.email = email;
    this.birthday = new Date(birthday);
  }

  // 프로토 타입에 자동으로 들어감
  introduce() {
    return `Hello my name is ${this.name} `;
  }

  // Static 클래스 함수 자체에 메소드 생성
  // 글로벌 오브젝트
  // 인스턴스가 아닌 클래스 이름을 사용함, this. 사용하지 않을떄
  static multipleNumbers(x, y) {
    return x * y;
  }
}

const john = new Person('john', 'john@example.com', '10-3-98');
console.log(john);

class Person1 {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  introduce() {
    return `Hello my name is ${this.name} `;
  }
}

class Client extends Person1 {
  constructor(name, email, phone, address) {
    super(name, email);
    this.phone = phone;
    this.address = address;
  }
}

const han = new Client('han', 'han@example.com', '010-0000-0000', '서울');
console.log(han.introduce());
