const { Circle, Square, Triangle } = require('./lib/shapes.js');


describe('Circle', () => {
        it('should return a circle with a red background, black font, and the initials GOS', () => {
            const circle = new Circle('red', 'GOS', 'black');
            expect(circle.render()).toEqual(
            `
            <svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="150" cy="100" r="100" fill="red" />
                <text x="150" y="125" font-size="70" text-anchor="middle" fill="black">GOS</text>
            </svg>
            `
            );
        });
    });


