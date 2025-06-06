import os from "os";
import dayjs from "dayjs";
import colors from "colors";

const name = process.argv[2] || "Guest";

const greeting = `Hello, ${name}!`.green;
const today = `Today is ${dayjs().format("YYYY-MM-DD")}`.blue;
const platform = `OS; ${os.platform()}`.yellow;

console.log(greeting);
console.log(today);
console.log(platform);
