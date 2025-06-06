import os from "os";
import dayjs from "dayjs";
import colors from "colors";
import { sayHello } from "./greeting.js";

console.log("=== My Computer Info ===".rainbow);
console.log("ระบบปฎิบัติการ:", os.platform().red);
console.log("เวลาปัจจุบัน:", dayjs().format("YYYY-MM-DD HH:mm:ss").yellow);
console.log(sayHello(os.userInfo().username).green);
