// var : 중복 선언, 재할당 가능
var greeting = 'hello';
console.log(greeting);

var greeting = 'hi';
console.log(greeting);

greeting = 'how are you?';
console.log(greeting);

//let : 중복 선언 불가, 재할당 가능
let greet = 'hello';
console.log(greet);

//let greet = 'hi';
//console.log(greet);

greet = 'hi';
console.log(greet);

//const : 중복 선언, 재할당 불가능
const gre = 'hello';
console.log(gre);

//gre = 'hi';

// var 함수 레벨 스코프
function func() {
  if (true) {
    var a = 'a';
    console.log(a);
  }
  console.log(a);
}
// a 함수 밖에서 사용 불가
func();

// let, const => block 레벨 스코프
function func1() {
  if (true) {
    let a = 'a';
    console.log(a); // 블록 안
  }
  //console.log(a); // 블록 밖
}

func1();

console.log(g);
var g = 'hello';

//인터프리터 : 위에서 부터 하나씩 읽어감 (선언 단계 할당 단계 분할)
// 변수 생성 - 선언 단계, 할당 단계
// var : 생성하지 않은 변수시 undifined 할당

func_hoi();

function func_hoi() {
  console.log('hoising test');
}

// let, const : undefined 값 할당 되지 않음, 호이스팅은 됨
