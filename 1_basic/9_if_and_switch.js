/**
 * If and Switch
 */
let num = 5;

if (num % 2 === 0) {
  console.log("num 변수는 짝수입니다.");
} else {
  console.log("num 변수는 홀수입니다.");
}

if (num % 2 === 0) {
  console.log("2의 배수입니다.");
} else if (num % 3 === 0) {
  console.log("3의 배수입니다.");
} else if (num % 4 === 0) {
  console.log("4의 배수입니다");
} else {
  console.log("2,3,4의 배수가 아닙니다.");
}

const engDay = "thursday";

let korDay;

// 위에서부터 체크 후 해당사항의 객체를 리턴후 break로 빠져나오게됨
switch (engDay) {
  case "monday":
    korDay = "월요일";
    break;
  case "tuesday":
    korDay = "화요일";
    break;
  case "wednsday":
    korDay = "수요일";
    break;
  case "thursday":
    korDay = "목요일";
    break;
  case "friday":
    korDay = "금요일";
    break;
  default:
    korDay = "주말";
    break;
}
console.log(korDay);
