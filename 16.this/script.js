// Method => Object 해당 객체

const audio = {
  title: 'a',
  play() {
    console.log('play this', this);
  },
};

audio.play();

audio.stop = function () {
  console.log('stop this', this);
};

audio.stop();

// function => Window Object
function playAudio() {
  console.log(this);
}

playAudio();

// Constructor Function 생성자 함수 => {} 빈객체
function Audio(title) {
  this.title = title;
  console.log(this);
}

const audio1 = new Audio('a');

const audio2 = {
  title: 'audio',
  categories: ['rock', 'pop', 'hiphop'],
  displayCategries() {
    this.categories.forEach(
      function (category) {
        console.log(`title: ${this.title}, category: ${category}`);
      },
      { title: 'audio' } // 이 자리에 this 적으면 이 this는 함수 안이 아니라 메소드 안에 존재함으로 audio2를 참조
    ); // -> 함수 안 this.title에서 this는 객체를 가리키는 것이 아니라 함수 안에 있으므로 윈도우 객체를 가리킨다.
  }, // 함수 안 this를 다른 것으로 참조하도록 하고 싶으면 {title: 'audio'} 넣으면 이것을 참조함
};

audio2.displayCategries();

// 화살표 함수 ==> this 항상 상위 scope의 this를 가리키게 됨
// Lexical this
const audio3 = {
  title: 'audio',
  categories: ['rock', 'pop', 'hiphop'],
  displayCategries() {
    this.categories.forEach((category) => {
      console.log(this);
    });
  },
};

audio3.displayCategries();
