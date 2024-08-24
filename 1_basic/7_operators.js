/**
 * Operators
 *
 * 연산자
 */

/**
 * 산술연산자
 *
 * 1) 덧셈
 * 2) 뻴셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 % 3);

console.log("==========================");

console.log(10 * (10 + 10));

/**
 * 증가와 감소
 */

let num = 1;
num++;
console.log(num);
num--;
console.log(num);
console.log("===================");

/**
 * 연산자의 위치
 */

let result = 1;
console.log(result);

result = num++;
console.log(result, num);

result = num--;
console.log(result, num);

result = ++num;
console.log(result, num);

result = --num;
console.log(result, num);

/**
 * 숫자 타입이 아닌 타입에 +,- 사용하면 어떻게될까?
 */

let sample = "99";

console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);

sample = true;
console.log(+sample);
console.log(typeof +sample);

sample = false;
console.log(+sample);
console.log(typeof +sample);

sample = "안유진";
// NaN => Not a Number
console.log(+sample);

sample = "99";
console.log(-sample);
console.log(typeof -sample);

/**
 * 할당 연산자 (assignment operator)
 */

num = 100;
console.log(num);

num += 10;
console.log(num);

num -= 10;
console.log(num);

num *= 10;
console.log(num);

num /= 10;
console.log(num);

num %= 10;
console.log(num);
console.log("=====================");

/**
 * 비교연산자
 *
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

console.log(5 == 5);

console.log(5 == "5");

console.log(5 == "");

console.log(true == 1);

console.log(false == 1);
console.log("===================");

// ===는 값과 타입까지 함께 비교함
console.log(5 === 5);

console.log(5 === "5");

console.log(5 === "");

console.log(true === 1);

console.log(false === 1);
console.log("===================");
console.log(5 != 5);

console.log(5 != "5");

console.log(5 != "");

console.log(true != 1);

console.log(false != 1);

console.log("===================");
console.log(5 !== 5);

console.log(5 !== "5");

console.log(5 !== "");

console.log(true !== 1);

console.log(false !== 1);
console.log("===================");
/**
 * 대소관계 비교연산자
 */

console.log(100 > 1);
console.log(100 < 1);
console.log(100 >= 1);
console.log(100 <= 1);
console.log("===================");
/**
 * 삼항 조건연산자
 * : 기준으로 왼쪽이 참, 오른쪽이 거짓일때 리턴됨
 */
console.log(10 > 0 ? "10이 0보다 크다" : "10이 0보다 작다");

console.log("===================");
/**
 * 논리연산자
 *
 * 1) &&
 * 2) ||
 */

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

/**
 * ||는 하나만 true여도 true 리턴함
 */
console.log("===================");

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log("===================");

console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 < 1 && 20 < 2);
console.log("===================");

console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 < 2);
console.log("===================");

/**
 * 단축평가 (short circuit evaluation)
 *
 * &&를 사용했을 때 좌측이 true면 우측값 리턴
 * &&를 사용했을 때 좌측이 false면 좌측 값 리턴
 * ||를 사용했을 때 좌측이 true면 좌측 값 리턴
 * ||를 사용했을 때 좌측이 false면 우측 값 리턴
 */

console.log(false && "아이브");
console.log(true && "아이브");
console.log(true || "아이브");
console.log(false || "아이브");
console.log("===================");

console.log(true && true && "아이브");
console.log(true && false && "아이브");

/**
 * 지수 연산자
 *
 */
console.log(2 ** 2);
console.log(10 ** 3);

// null 연산자
let name;
console.log(name);

name = name ?? "이승준";
console.log(name);

name = name ?? "아이브";
console.log(name);

let name2;
name2 ??= "이승준";
console.log(name2);
