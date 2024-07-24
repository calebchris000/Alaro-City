const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const http = require("http");
const fs = require("fs");
const path = require("path");
const moment = require("moment");
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
    const {
      full_name,
      email,
      phone,
      interest,
      comment,
      user_type,
      site_visit,
    } = req.body;
    // const html_path = path.join(__dirname, "html", "info.html");
    const date = moment(site_visit).format("dddd, Do [of] MMMM, YYYY.");
    const html_body = email_content({
      full_name,
      email,
      phone,
      interest,
      comment,
      user_type,
      site_visit: date,
    });
    await sendEmail({
      to: "michaeluduzoije@gmail.com",
      subject: "New Lead from Alaro City Landing Page",
      body: html_body,
    });

    return res.status(200).send("Message sent!");
  } catch (e) {
    res.status(500).json(String(e));
  }
});

app.post("/sendVisit", (req, res) => {
  const file_path = path.join(__dirname, "visit_count.txt");

  try {
    const file = fs.readFileSync(file_path, "utf-8");
    const data = Number(file.trim());
    const inc = data + 1;
    fs.writeFileSync(file_path, String(inc));
    sendEmail({
      to: "calebchris000@gmail.com",
      subject: "VISITED ON ALARO CITY",
      body: `<h1>Total Visited: ${inc}</h1>`,
    });
    console.log(Number(file.trim()));
  } catch (error) {
    console.log(error);
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
