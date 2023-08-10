const { Circle, Square, Triangle } = require('./lib/shapes.js')


function newShape(response) {

    let userShape;

switch (response.shape) {
    case 'Circle':
        userShape = new Circle(response.shapeColor, response.text, response.textColor);
        break;
    case 'Square':
        userShape = new Square(response.shapeColor, response.text, response.textColor);
        break;
    case 'Triangle':
        userShape = new Triangle(response.shapeColor, response.text, response.textColor);
        break;
    default:
        return "Invalid input"; 
}

 return userShape.render();

};

module.exports = newShape;