import http from "http";
import dayjs from "dayjs";
import os from "os";
import { sayHello } from "./greeting.js";

const server = http.createServer((req, res) => {
  //   console.log(req.url);
  const urlObj = new URL(req.url, `http://${req.headers.host}`);

  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, this is my first Node.js server (ESM)!");
  } else if (req.url == "/hello") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, Node!");
  } else if (req.url == "/date") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Now: " + dayjs().format("YYYY-MM-DD HH:mm:ss"));
  } else if (req.url == "/os") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Your os is: " + os.platform());
  } else if (req.url.startsWith("/greet")) {
    const name = urlObj.searchParams.get("name");
    const age = urlObj.searchParams.get("age");
    res.end(`<div style="color:red">${sayHello(name) + age}</div>`);
  } else if (req.url.startsWith("/time")) {
    const zone = urlObj.searchParams.get("zone");
    res.end("Zone is: " + (zone || "UTC"));
  } else if (req.url.startsWith("/multiply")) {
    const a = urlObj.searchParams.get("a");
    const b = urlObj.searchParams.get("b");

    res.end(`Result: ${a * b}`);
  } else if (req.url.startsWith("/color")) {
    const text = urlObj.searchParams.get("text");
    const color = urlObj.searchParams.get("color");

    res.end(`<div style="color:#${color}">${text}</div>`);
  } else if (req.url.startsWith("/products")) {
    const id = req.url.split("/")[2];
    res.end(`Product id = ${id}`);
  } else if (req.url.startsWith("/age")) {
    const birth = urlObj.searchParams.get("birth");
    const age = dayjs().diff(dayjs(birth), "year");
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.end(`คุณอายุ ${age} ปี`);
  } else if (req.url === "/random") {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    res.end(`Random number: ${randomNumber}`);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain;" });
    res.end("404 Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
