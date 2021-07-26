/**
 * unnamed export(default)
 *
 * 이름 없는 객체 하나를 exports 하는 것이다.
 * 따라서 module.exports (CommonJS)와 차이점이 있다.
 */

export default {
  add: function (a, b) {
    return a + b;
  },
  substract: function (a, b) {
    return a - b;
  },
};
