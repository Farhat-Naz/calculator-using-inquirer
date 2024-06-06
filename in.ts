// using inquirer 
import inquirer from "inquirer";
let answer = await inquirer.prompt([{
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
    tye:"list",
    message:"Enter Operator",
},
])
export{}
console.log('Your answer is &{num1} ${operator} ${num2}');
console.log(answer);