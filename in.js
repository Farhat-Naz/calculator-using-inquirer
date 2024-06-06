"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// using inquirer 
const inquirer_1 = __importDefault(require("inquirer"));
let answer = await inquirer_1.default.prompt([{
        name: "num1",
        type: "number",
        message: "Enter yur your first number",
    },
    {
        name: "num2",
        type: "number",
        message: "Enter your second number",
    },
    {
        name: "operator",
        tye: "list",
        message: "Enter Operator",
    },
]);
console.log('Your answer is &{num1} ${operator} ${num2}');
console.log(answer);
