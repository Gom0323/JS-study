/**
 * Loops
 *
 * 1) for
 * 2) while
 */

for (i = 0; i < 10; i++) {
  console.log(i);
}

for (i = 10; i > 0; i--) {
  console.log(i);
}

console.log("========================");
// i가 반복될때마다 j를 3,2,1을 출력하고 j를 반복시 i가 늘어나게되는 구조
for (let i = 0; i < 3; i++) {
  for (let j = 3; j > 0; j--) {
    console.log(i, j);
  }
}

console.log("========================");
let square = "";
let side = 6;

for (i = 0; i < 6; i++) {
  for (j = 0; j < 6; j++) {
    square += "*";
  }
  square += "\n";
}
console.log(square);

console.log("========================");
/**
 * for ...in
 */
const yuJin = {
  name: "안유진",
  year: 2003,
};

for (let key in yuJin) {
  console.log(key);
}

console.log("========================");

const iveMembersAarray = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];

for (let key in iveMembersAarray) {
  console.log(`${key}: ${iveMembersAarray[key]}`);
}

console.log("========================");

// while

let num = 0;

while (num < 10) {
  num++;
}
console.log(num);

// break
console.log("===========================");

for (i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

console.log("===========================");
num = 0;

while (num < 10) {
  if (num === 5) {
    break;
  }
  num++;
  console.log(num);
}

console.log("===========================");
// continue
// 5는 생략 후 진행하라는 뜻
for (i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
console.log("===========================");

num = 0;

while (num < 10) {
  num++;
  if (num === 9) {
    continue;
  }
  console.log(num);
}
