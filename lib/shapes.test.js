const { Circle, Square, Triangle } = require("./shapes");
describe("circle", () => {
  test("You are generating the circle SVG", () => {
    const circle = new Circle("abc", "white", "#FF0000");
    const svg = circle.generateSvg();
    const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="#FF0000" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">abc</text>
  
  </svg>`;
    expect(svg).toBe(expectedSVG);
  });
});
describe("square", () => {
  test("You are generating the square SVG", () => {
    const square = new Square("abc", "white", "#FF0000");
    const svg = square.generateSvg();
    const expectedSVG = `<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  
    <rect x="50" y="50" width="150" height="150" fill="#FF0000" />
  
    <text x="125" y="135" font-size="60" text-anchor="middle" fill="white">abc</text>
  
  </svg>`;
    expect(svg).toBe(expectedSVG);
  });
});
describe("triangle", () => {
  test("You are generating the triangle SVG", () => {
    const triangle = new Triangle("abc", "#fff", "#FF0000");
    const svg = triangle.generateSvg();
    const expectedSVG = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <path fill="#FF0000" d="M100 180 25 20h150z"/>
    <text x="100" y="100" font-size="40" text-anchor="middle" fill="#fff">abc</text>
  </svg>`;
    expect(svg).toBe(expectedSVG);
  });
});
