const ex01 = function (param, callback) {
  // 비동기 코드
  // ex) 파일 시스템 접근, 네트워크 통신, SQL to DB, setTimeout
  setTimeout(function () {
    if (param == "param-data") {
      callback(null, "ok");
    } else {
      callback(new Error("fail"));
    }
  }, 1000);
};
if (require.main == module) {
  // test 01
  ex01("param-data", function (err, res) {
    if (err) {
      // 실패
      console.error(err);
    } else {
      // 성공
      console.log(res);
    }
  });
  console.log("wait...");

  // test 02
  ex01("param-error", function (err, res) {
    if (err) {
      // 실패
      console.error(err);
    } else {
      // 성공
      console.log(res);
    }
  });
  console.log("wait...");
} else {
  module.exports = ex01;
}
