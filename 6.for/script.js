for (let i = 0; i < 10; i++) {
  if (i === 3) {
    console.log('It is 3');
    continue;
  }

  if (i === 5) {
    console.log('5 stop the loop');
    break;
  }

  console.log('Number ' + i);
}

const user = {
  name: 'Han',
  province: '경기도',
  city: '성남시',
};

// 객체의 속성 반복
for (let x in user) {
  console.log(`${x} : ${user[x]}`);
}

let i = 0;

while (i < 10) {
  console.log('Number ' + i);
  i++;
}

i = 100;

do {
  console.log('Number ' + i);
  i++;
} while (i < 10);

const locatoins = ['서울', '부산', '경기도', '대구'];

for (let i = 0; i < locatoins.length; i++) {
  console.log(locatoins[i]);
}

locatoins.forEach(function (location, index, array) {
  console.log(`${index} : ${location}`);
  console.log(array);
});

locatoins.map(function (location) {
  console.log(location);
});
