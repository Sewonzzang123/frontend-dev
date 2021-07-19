const ex02 = function (param) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (param == "param-data") {
        resolve("ok");
      } else {
        reject(new Error("fail"));
      }
    }, 2000);
  });
};

if (require.main == module) {
  // test 01
  ex02("param-data").then(function (res) {
    console.log(res);
  });

  // test 02
  ex02("param-error").catch(function (err) {
    console.error(err.message);
  });

  console.log("wait...");
} else {
  module.exports = ex02;
}
