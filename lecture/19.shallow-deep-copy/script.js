// shallow copy
const aArray = [1, 2, 3];

// shallow copy whith spread operator
const bArray = [...aArray, 4];
console.log('aArray', aArray);
console.log('bArray', bArray);
console.log('aArray === bArrray', aArray === bArray);
false;

//shallow copy with Object.assign()
const cArray = Object.assign([], bArray);
console.log('cArray', cArray);
console.log('bArray === cArray', bArray === cArray); // false

// Nested Arrays and Objexts
cArray.push([5, 6, 7]);
console.log('cArray', cArray);
const dArray = [...cArray, 10];
console.log('dArray', dArray);
dArray[4].push(8); // 중첩된 배열에나 객체에는 복사가 안되므로 변함
console.log('cArray', cArray);
console.log('dArray', dArray);

// 얕은 동결
const aObject = {
  a: 'a',
  b: 'b',
  cObject: { a: 1, b: 2 },
};

// Object.freeze(aObject);
// aObject.a = 'c';
// console.log('aOBject', aObject);

// aObject.cObject.a = 3;
// console.log('aObject', aObject);

// deep copy with json.parse(json.stringify() ) 깊은 복사를 하니까 객체 내의 객체도 변하지 않음
// const newAObject = JSON.parse(JSON.stringify(aObject));

// console.log('aObject', aObject);
// console.log('newAObject', newAObject);
// aObject.cObject.a = 3;
// console.log('aObject', aObject);
// console.log('newAObject', newAObject);

// deep copy with newsted spread operator
const newAObject = { ...aObject, cObject: { ...aObject.cObject } };

console.log('aObject', aObject);
console.log('newAObject', newAObject);
aObject.cObject.a = 3;
console.log('aObject', aObject);
console.log('newAObject', newAObject);
