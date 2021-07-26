/**
 * named export
 * exports(CommonJS)와 유사하다.
 * 이 모듈을 import 할 때는 destructuring(객체 분해)가 가능하다.
 */
export const add = function (a, b) {
  return a + b;
};
export const substract = function (a, b) {
  return a - b;
};
