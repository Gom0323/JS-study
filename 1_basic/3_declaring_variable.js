/**
 * Variable 선언
 *
 * 1) var - 더이상 사용하지않음
 * 2) let
 * 3) const
 */
var name = "이승준";
console.log(name);

var age = 23;
console.log(age);

let ive = "아이브";
console.log(ive);

/**
 * let과 var로 선언시 값을 추후 변경가능
 */

ive = "안유진";
console.log(ive);

const newjeans = "뉴진스";
console.log(newjeans);

// newjeans = "하니";
// console.log(newjeans);

/**
 * 선언과 할당
 *
 * 1) 변수를 선언하는것.
 * 2) 할당
 */

var name = "이승준";
console.log(name);

// 변수를 선언했지만 할당하지않음.
let gf;
console.log(gf);

// const는 undefined로 출력되지않고 에러출력함
// const gf2;
