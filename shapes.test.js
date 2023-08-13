const { Circle, Square, Triangle } = require('./lib/shapes.js');


describe('Square', () => {

    it('should return an SVG of a square with specified color, text, and text color', () => {
        const square = new Square('blue', 'GOS', 'white');

        const expectedSVG = `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="blue"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="white">GOS</text>
        </svg>
        `;

        expect(square.render()).toEqual(expectedSVG);
    });

});

describe('Circle', () => {

    it('should return an SVG of a circle with specified color, text, and text color', () => {
        const circle = new Circle('red', 'GOS', 'black');

        const expectedSVG = `
        <svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="100" fill="red" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="black">GOS</text>
        </svg>
        `;

        expect(circle.render()).toEqual(expectedSVG);

    });
});


describe('Triangle', () => {

    it('should return an SVG of a triangle with specified color, text, and text color', () => {
        const triangle = new Triangle('green', 'GOS', 'white');

        const expectedSVG = `
        <svg version="1.1" 
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            <polygon points="100, 15 200, 200 0, 200" fill="green"/>
            <text x="100" y="185" font-size="70" text-anchor="middle" fill="white">GOS</text>
        </svg>
        `;

        expect(triangle.render()).toEqual(expectedSVG);
    });

});