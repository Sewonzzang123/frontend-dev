// URL 문자열 다루기

var url = "http://www.mysite.com/user?name=둘리";

// 1. escape : URL을 전부 encoding
var url2 = escape(url);
console.log(url2); // http%3A//www.mysite.com/user%3Fname%3D%uB458%uB9AC

// 2. encodeURI : parameter 만 encoding
var url3 = encodeURI(url);
console.log(url3); // http://www.mysite.com/user?name=%EB%91%98%EB%A6%AC

// 3.encodeURIComponent : value만 encoding 해야 하는 경우
var url4 = encodeURIComponent(url); // 안 좋은 사용 예
console.log(url4); // http%3A%2F%2Fwww.mysite.com%2Fuser%3Fname%3D%EB%91%98%EB%A6%AC

// 만들어야 할 URL
// http://www.mysite.com/user?no=10&name=장세원&email=sewon@gmail.com

var toQueryString = function (o) {
  var qs = [];
  for (prop in o) {
    qs.push(prop + "=" + encodeURIComponent(o[prop]));
  }
  return qs.join("&");
};

var url = "http://www.mysite.com/user";
var param = {
  no: 10,
  name: "장세원",
  email: "seweon@gmail.com",
};

var url5 = url + "?" + toQueryString(param);
console.log("url5: " + url5);
// url5: http://www.mysite.com/user?no=10&name=%EC%9E%A5%EC%84%B8%EC%9B%90&email=seweon%40gmail.com
