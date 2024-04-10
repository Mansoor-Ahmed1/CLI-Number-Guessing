#! /usr/bin/env node
import inquirer from "inquirer";
// const randomNumber=23; 
const randomNumber = Math.random();
// console.log(randomNumber)
const randomNumber_rounded = randomNumber * 6;
// console.log(randomNumber_rounded)
const finalNum = Math.ceil(randomNumber_rounded);
// console.log(finalNum)
const user_input = await inquirer.prompt([
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
