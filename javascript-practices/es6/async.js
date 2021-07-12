/**비동기 xmlhttpRequest*/

const req01 = function (url, callback) {
  console.log("request01 [" + url + "]");
  setTimeout(function () {
    const resp = {
      data: "hello world",
    };
    callback(resp);
  }, 1000);
};

req01("http:/www.sewon.com/api", function (response) {
  console.log("response");
});
