const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes");
const fs = require("fs");
const prompt = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "shape",
      message: "Select a shape.",
      choices: ["circle", "square", "triangle"],
    },
    {
      type: "input",
      name: "text",
      message: "Enter text (maximum 3 letters):",
      validate: function (input) {
        if (input.length > 3) {
          return "maximum 3 letters allowed";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "color",
      message: "Enter a hex color code:",
    },
  ]);
};
function renderSvg(shape, text, color) {
  let shapeObject;
  switch (shape) {
    case "circle":
      shapeObject = new Circle(text, color);
      break;
    case "square":
      shapeObject = new Square(text, color);
      break;
    case "triangle":
      shapeObject = new Triangle(text, color);
      break;
    default:
      throw new Error("invalid shape");
  }
  console.log(shapeObject.generateSvg());
  return shapeObject.generateSvg();
}
prompt().then((data) => {
  fs.writeFile(
    `./examples/${data.shape}.svg`,
    renderSvg(data.shape, data.text, data.color),
    function (error) {}
  );
});
