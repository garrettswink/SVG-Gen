# svg-gen
### A SVG Simple Logo Generator

## Dev Note
It took me a minute to conceptually wrap my head around this assignment, but once things clicked the app came together in pretty short order.

Please note that the demo below does not include running the test.js file, though the three shape file test created do pass when run through Jest.

One thing that perplexed me is that the test files do not seem to pick up the imported/required shapes.js file when I place the file in the lib or a tests folder. However, when tests.js is floating outside a folder the import/require path works fine. For the sake of organization, I would like to put the tests.js doc into a tests or lib folder. Any suggestions on why the pathway gets screwed up would be greatly appreciated, as I've tried rewriting the path several different ways to no avail.

## User Story
As a freelance web developer

I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

## Demo
![demo](https://github.com/garrettswink/svg-gen/assets/22800055/fb011895-7c71-4c0c-ab79-1e526d99f92e)
