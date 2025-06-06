import http from "http";
// import fs from "fs";
import fs from "fs/promises";

const server = http.createServer(async (req, res) => {
  if (req.url === "/file") {
    // const data = fs.readFileSync("./message.txt", "utf-8");
    // res.end(data);

    // fs.readFile("./message11.txt", "utf-8", (err, data) => {
    //   if (err) {
    //     console.error("เกิดข้อผิดพลาด:", err);
    //     return;
    //   }
    //   console.log(data);
    // });

    try {
      const data = await fs.readFile("./message.txt", "utf-8");
      res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
      //   console.log(data);
      res.end(data);
    } catch (err) {
      console.error("เกิดข้อผิดพลาด:", err);
    }
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
