const { Circle, Square, Triangle } = require("./shapes");
describe("circle", () => {
  const circle = new Circle("abc", "#FF0000");
  const svg = circle.generateSvg();
  const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="#FF0000" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">abc</text>

</svg>`;
  expect(svg).toBe(expectedSVG);
});