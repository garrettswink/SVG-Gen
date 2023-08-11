const inquirer = require('inquirer');
const fs = require('fs');

const questions = require('./lib/questions.js');
const fileName = './examples/logo.svg';
const newShape = require('./lib/newShape.js');


function generateLogo() {
    inquirer.prompt(questions)
        .then(response => {
            let svg = newShape(response);

            fs.writeFile(fileName, svg, (err) => {
                if (err) {
                    console.log('Error writing file', err);
                } else {
                    console.log('File written successfully');
                }
            });
        })
        .catch(err => {
            console.error('Error during inquiry:', err);
        });
};

generateLogo();
