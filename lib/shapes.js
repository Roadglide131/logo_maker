class Circle {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  generateSvg() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
  </svg>`;
  }
}
class Square {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  generateSvg() {
    return `<svg version="1.1" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  
    <rect x="50" y="50" width="150" height="150" fill="${this.shapeColor}" />
  
    <text x="125" y="135" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  
  </svg>`;
  }
}
class Triangle {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  generateSvg() {
    return `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <path fill="${this.shapeColor}" d="M100 180 25 20h150z"/>
    <text x="100" y="100" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>`;
  }
}
module.exports = { Circle, Square, Triangle };
