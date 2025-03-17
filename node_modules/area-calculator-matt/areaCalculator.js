class AreaCalculator {
  rect = (width, height) => width * height;
  square = (side) => side ** 2;
  circle = (radius) => Math.PI * radius * radius;
  triangle = (base, height) => 0.5 * base * height;
  parallelogram = (base, height) => base * height;
}

const calc = new AreaCalculator();

module.exports = calc;
