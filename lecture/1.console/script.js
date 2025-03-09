console.log('안녕하세요!');
console.log(123);
console.log(true);
var greeting = '안녕하세요.';
console.log(greeting);
console.log({ a: 'a', b: 'b' });
console.table({ a: 'a', b: 'b' });

console.error('Error!'); // 에러
console.warn('Warning'); // 경고

console.time('Hello');
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.timeEnd('Hello'); // 12345 출력하는데 얼마나 시간이 걸렸는지

console.clear(); // 모두 지움
