const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "everythingbusiness2024@gmail.com",
    pass: "emgr svwx hhja hvmb",
  },
});

const sendEmail = async ({ subject, body }) => {
  const info = await transporter.sendMail({
    subject,
    from: "Everything Business everythingbusiness2024@gmail.com",
    // to: "michaeluduzoije@gmail.com",
    to: "michaeluduzoije@gmail.com",
    html: body,
  });

  console.log("Email sent", info.messageId);
};

module.exports = { sendEmail };
