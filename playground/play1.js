const os = require("os");

// console.log("ระบบปฎิบัติการ:", os.platform());
// console.log("CPU:", os.cpus().length, "คอร์");
// console.log("Memory:", os.totalmem() / (1024 * 1024), "MB");
// console.log("User info:", os.userInfo());
// console.log("Home directory:", os.homedir());

const path = require("path");
// const filePath = "/Users/princemacmini/Desktop/cc20/nodejs/day1/lab1/hello.js";
// console.log("ชื่อไฟล์:", path.basename(filePath));
// console.log("นามสกุลไฟล์:", path.extname(filePath));
// console.log("dirname:", path.dirname(filePath));

const uptime = os.uptime(); //seconds
const hour = Math.floor(uptime / 3600);
const minutes = Math.floor((uptime % 60) / 60);
const seconds = uptime % 60;

// console.log(
//   `เครื่องเปิดมาแล้ว: ${hour} ชั่วโมง ${minutes} นาที ${seconds} วินาที`
// );

const uploadPath = path.join("uploads", "profile.jpg");
console.log("Full path:", uploadPath);
