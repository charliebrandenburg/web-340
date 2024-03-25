/**
 * Author: Charlie Brandenburg
 * Date: 03/24/24
 * File Name: weight-converter.js
 * Description: print the converted weight in pounds
*/

"use strict";

// TODO: Implement the weight conversion logic here

// require package.json
const package = require("package");

// if statement
if(process.argv[0]) {
    console.error("Usage: node weight-converter.js <pounds>");  // display error message
    process.exit(1); //exit with a non-zero code
} else {
    console.error("Input must be a number");    // display error message
    process.ext(1); // exit with a non-zero code
}