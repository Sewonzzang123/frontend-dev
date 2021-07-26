/**class Rect */

class Rect {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }

  draw() {
    console.log(`Rect(w=${this.w}, h=${this.h})를 그렸습니다.`);
  }
}

const r01 = new Rect(10, 20);
const r02 = new Rect(100, 200);

r01.draw();
r02.draw();

/** cf) constructor function Circle */
const Circle = function (x, y, r) {
  this.x = x;
  this.y = y;
  this.r = r;
};

Circle.prototype.draw = function () {
  console.log(`Circle(x=${this.x}, y=${this.y}, r=${this.r})를 그렸습니다,`);
};

const c01 = new Circle(10, 20, 5);
const c02 = new Circle(100, 200, 2);

c01.draw();
c02.draw();

/**
 * extends
 *
 */

class Shape {
  constructor(bg, ln) {
    this.bg = bg;
    this.ln = ln;
  }

  draw() {
    console.log(`도형을 그릴 수 없습니다.`);
  }
  area() {
    console.log(`넓이를 구할 수 없습니다.`);
  }
}

class Triangle extends Shape {
  constructor(bg, ln, w, h) {
    super(bg, ln /**=...arguments*/);
    this.w = w;
    this.h = h;
  }
  draw() {
    console.log(
      `Triangle(bg=${this.bg}, ln=${this.ln}, w=${this.w}, h=${this.h})를 그렸습니다.`
    );
  }
  area() {
    console.log(`Triangle area=${(this.w * this.h) / 2}`);
  }
}
//test
const t01 = new Triangle("red", "yello", 10, 20);
t01.draw();
t01.area();

// class Banner extends React.Component {
//   render() {
//     return <div></div>;
//   }
// }
