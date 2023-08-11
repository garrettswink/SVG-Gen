
const colorKeywords = require('./colorKeywords.js');


const questions = [
    {
        name: 'shape',
        type: 'list',
        message: 'Select a shape',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        name: 'shapeColorFormat',
        type: 'list',
        message: 'Choose a color format.',
        choices: ['color keyword', 'hexadecimal']
    },
    {
        name: 'shapeColor',
        type: 'input',
        message: 'Enter the color keyword',
        when: (answers) => {
            if (answers.shapeColorFormat === 'color keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
                    return true;
                }
            }
            return "Enter a valid color keyword";
        }
    },
    {
        name: 'shapeColor',
        type: 'input',
        message: 'Enter the hexadecimal color number',
        when: (answers) => {
            if(answers.shapeColorFormat === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = /^#[A-Fa-f0-9]{6}$/;
            if (!answer.match(hexRegEx)) {
                return "Enter a valid hexadecimal"
            }
            return true;
        } 
    },
    {
        name: 'text',
        type: 'input',
        message: 'Enter up to three characters',
        validate: (answer) => {
            if (answer.length > 3) {
                return "Text must be three characters or less"
            }
            return true;
        }
    },
    {
        name: 'textColorFormat',
        type: 'list',
        message: 'Choose a color format.',
        choices: ['color keyword', 'hexadecimal']
    },
    {
        name: 'textColor',
        type: 'input',
        message: 'Enter a color keyword.',
        when: (answers) => {
            if (answers.textColorFormat === 'color keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeywords.length; i < len; i++) {
                if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
                    return true;
                }
            }
            return "Enter a valid color keyword."
        }
    },
    {
        name: 'textColor',
        type: 'input',
        message: 'Enter a hexadecimal color number.',
        when: (answers) => {
            if (answers.textColorFormat === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = /^#[A-Fa-f0-9]{6}$/;
            if (!answer.match(hexRegEx)) {
                return "Enter a valid hexadecimal"
            }
            return true;
        }
    }
];

module.exports = questions;