/**
 * Data Types
 *
 * 여섯개의 Primitive Type과
 * 한개의 오브젝트 타입이 있다.
 *
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolena (불리언)
 * 4) undefined
 * 5) null
 * 6) SYmbol (심볼)
 *
 * 7) Object(객체)
 *    Function
 *    Array
 *    Object
 */

const age = 32;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log("========================================");

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);
console.log("========================================");

/**
 * String타입
 */
const gom = "이승준";
console.log(gom);
console.log(typeof gom);

const ive = "'아이브' 안유진";
console.log(ive);

/**
 * Temlate Literal
 *
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고싶다면 두번 입력
 */
const iveYuJin = "아이브\n안유진";
console.log(iveYuJin);
const iveWonYoung = "아이브\t장원영";
console.log(iveWonYoung);
const backSlash = "아이브\\이승준";
console.log(backSlash);
const smallQutoation = "아이브'이승준";
console.log(smallQutoation);

const iveWonYoung2 = `아이브
장원영`;
console.log(iveWonYoung2);

console.log(typeof iveWonYoung2);

const groupName = "아이브";
console.log(groupName + " 안유진");
console.log(`${groupName} 안유진`);

/**
 * Boolean 타입
 */
const isTrue = true;
const isFalse = false;

console.log(isTrue);
console.log(isFalse);

/**
 * undefined
 *
 * 사용자가 직접 값을 초기화하지 않았을 때 지정되는값
 *
 * 직접 undefined로 값을 초기화 하는건 지양해야함
 */
let noInit;
console.log(noInit);
console.log(typeof noInit);

/**
 * null타입
 *
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는값으로 초기화 할 때 사용한다.
 */
let init = null;
console.log(init);
console.log(typeof init);

/**
 * Symbol타입
 *
 * 유일무이한 값을 생성할때 사용
 * 다른 프리미티브 값들과 다르게 symbol함수를 호출하여 사용
 */

const test1 = "1";
const test2 = "2";

console.log(test1 === test2);

const symbol1 = Symbol("1");
const symbol2 = Symbol("2");

console.log(symbol1 === symbol2);

/**
 * Object 타입
 *
 * Map
 * 키:벨류의 쌍으로 이루어져있음
 * key : value
 */

const dictionary = {
  red: "빨강",
  orange: "주황",
  yellow: "노랑",
};

console.log(dictionary);
console.log(dictionary["red"]);
console.log(dictionary["orange"]);
console.log(dictionary["yellow"]);

console.log(typeof dictionary);

/**
 * Array 타입
 *
 * 값을 리스트로 나열 할 수 있는 타입이다
 */
const iveMemebersArray = [
  "안유진",
  "가을",
  "가을",
  "레이",
  "장원영",
  "리즈",
  "이서",
];
console.log(iveMemebersArray);

/**
 * index
 *
 * 0부터 시작하여 1씩 올라감
 */
console.log(iveMemebersArray[0]);
console.log(iveMemebersArray[5]);

iveMemebersArray[0] = "이승준";
console.log(iveMemebersArray);
console.log(typeof iveMemebersArray);

/**
 * static typing -> 변수를 선언할때 어떤 타입의 변수를 선언할지 명시함
 *
 * dynamic typing -> 변수의 타입을 명시적으로 선언x 갑에의해 타입을 '추론'함
 * JS -> dynamic typing
 */
