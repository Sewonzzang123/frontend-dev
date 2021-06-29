// Date

// 현재 시간
var now = new Date();
console.log(now); // 2021-06-29T05:44:38.880Z

// 2021년 6월 29일
var d1 = new Date(2021, 5, 29);
console.log(d1);

// 2021년 6월 29일 12:30:40
var d2 = new Date(2021, 5, 29, 12, 30, 40);
console.log(d2);

// 객체 메서드
console.log(
  "년도: " +
    (d2.getYear() + 1900) +
    "\n" +
    "월: " +
    (d2.getMonth() + 1) +
    "\n" +
    "일: " +
    d2.getDate() +
    "\n" +
    "시: " +
    d2.getHours() +
    "\n" +
    "분: " +
    d2.getMinutes() +
    "\n" +
    "초: " +
    d2.getSeconds() +
    "\n" +
    "밀리초: " +
    d2.getMilliseconds()
);

d2.setFullYear(2022);
console.log(d2); // 2022-06-29T03:30:40.000Z
d2.setMonth(11);
console.log(d2); // 2022-12-29T03:30:40.000Z
