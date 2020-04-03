const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 5000;
const nodemailer = require("nodemailer");
const enforce = require("express-sslify");
const compression = require("compression");

// Ethereal Email Account:

// name: Delta Blanda
// username: delta.blanda42@ethereal.email
// password: 	Z6Ygw4fwySddyzQB95

// host: smtp.ethereal.email
// port: 587
// security: STARTTLS

if (process.env.NODE_ENV !== "production") require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(compression());
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "usd"
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

app.post("/api/form", (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email}</li>
      </ul>
      <h3>Subject</h3>
      <h4>${req.body.subject}</h4>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;

    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      post: 587,
      auth: {
        user: "delta.blanda42@ethereal.email",
        pass: "Z6Ygw4fwySddyzQB95"
      }
    });

    let mailOptions = {
      from: req.body.email,
      to: "delta.blanda42@ethereal.email",
      replyTo: req.body.email,
      subject: req.body.subject,
      text: req.body.message,
      html: htmlEmail
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }
      console.log("Message sent: %s", info.message);
      console.log("Message URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
});

app.listen(port, error => {
  if (error) throw error;
  console.log(`Server is running on port ${port}.`);
});
