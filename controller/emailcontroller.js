const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASS,
  },
});

module.exports = {
  register: async (req, res) => {
    const { email, message, subject } = req.body;
    console.log(email, subject, message);

    let mailOptions = {
      from: process.env.SMTP_MAIL,
      to: email,
      subject: subject,
      message: message,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        res.status(201).send({ message: "New Cart item Added", resp });
        console.log("Email send successfully to the user");
      }
    });
  },
};
