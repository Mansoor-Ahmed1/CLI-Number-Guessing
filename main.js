#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
// const randomNumber:number=23; 
var randomNumber = Math.random();
// console.log(randomNumber)
var randomNumber_rounded = randomNumber * 6;
// console.log(randomNumber_rounded)
var finalNum = Math.ceil(randomNumber_rounded);
// console.log(finalNum)
var user_input = await inquirer_1.default.prompt([
    {
        message: "Try to Guess a number between 1 and 6:",
        type: "number",
        name: "user_num",
    },
]);
if (finalNum == user_input.user_num) {
    console.log("Congratulations! You got it right, Absolutely it was " + finalNum + "!");
}
else {
    console.log("No! " + user_input.user_num + " isn't the correct number, Instead it was " + finalNum + "!");
}
