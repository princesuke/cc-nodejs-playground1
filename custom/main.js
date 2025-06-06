import { sayHello, sayBye } from "./greeting.js";
import dayjs from "dayjs";
import "dayjs/locale/th.js";
import colors from "colors";
import chalk from "chalk";

// const greeting = require("./greeting.js");

// console.log(greeting.sayHello("John"));
// console.log(greeting.sayBye("John"));

// console.log(sayHello("John"));
// console.log(sayBye("John"));

dayjs.locale("th");
console.log(dayjs().format("D MMMM YYYY").green);

console.log("Hello in rainbow!".america);

console.log(chalk.bgGreen.red.bold.inverse("ข้อความเขียว"));
