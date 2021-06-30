// String

// 배열처럼 접근이 가능하다.
var str1 = "hello world ";
for (var i = 0; i < str1.length; i++) {
  console.log(str1[i]);
}

// 문자열 합치기
var str2 = "i am sewon";
console.log(str1 + str2); // hello world i am sewon

// 캐스팅
var str3 = 5 + "5";
console.log(str3); // 55

var str4 = "boolean " + true;
console.log(str4); // boolean true

// 메서드
var str5 = "string1 string2 string3";
console.log(str5.length); //23
var index = str5.indexOf("string2");
console.log(index); //8
var index = str5.indexOf("string4"); //검색결과가없으면 -1
console.log(index); //-1

var str6 = str5.substr(10); //10번째부터 끝까지
console.log(str6); // ring2 string3

var str7 = str5.substr(10, 3); //count
console.log(str7); // rin

var str8 = str5.substr(10, 13); //last index - 1
console.log(str8); // ring2 string3

var a = str5.split(" ");
console.log(a); // [ 'string1', 'string2', 'string3' ]

var str9 = "abcdef";
var b = str9.split(":");
console.log(b); // [ 'abcdef' ]
