#! /usr/bin/env node
import inquirer from "inquirer";
//Printing A Welcome Message
console.log("n\t welcome To 'CodeWithMaham' - CLI Simple  Calculator\n");
const answer = await inquirer.prompt([
    { message: "Entre first number", type: "number", name: "firstNumber" },
    { message: "Entre second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
// console.log("answer") ;
//conditional statement If/ELSE
if (answer.operator === "Addition") {
    console.log("your answer is: ", answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log("your answer is: ", answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log("your answer is: ", answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log("your answer is: ", answer.firstNumber / answer.secondNumber);
}
else {
    console.log("please select valid operator");
}
console.log("answer");
