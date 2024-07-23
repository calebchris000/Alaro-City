const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const http = require("http");
const fs = require("fs");
const path = require("path");
const { email_content } = require("./html/email");
const { sendEmail } = require("./service/email_service");
const app = express();
const server = http.createServer(app);
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  const html_path = path.join(__dirname, "html", "info.html");
  console.log(html_path);
  try {
    const html = fs.readFileSync(html_path, "utf-8");
    res.send(html);
  } catch (e) {
    console.log(e);
  }
});

app.post("/sendEmail", async (req, res) => {
  try {
    const { full_name, email, phone, interest, comment } = req.body;
    // const html_path = path.join(__dirname, "html", "info.html");
    const html_body = email_content({
      full_name,
      email,
      phone,
      interest,
      comment,
    });
    await sendEmail({
      subject: "New Lead from Alaro City Landing Page",
      to: email,
      body: html_body,
    });

    return res.status(200).send("Message sent!");
  } catch (e) {
    res.status(500).json(String(e));
  }
});

app.use((req, res) => {
  try {
    const html_path = path.join(__dirname, "html", "not-found.html");

    const html = fs.readFileSync(html_path, "utf-8");
    res.send(html);
  } catch (e) {
    console.log(e);
  }
});

server.listen("8000", () => {
  console.log("Server started at PORT 8000");
});
