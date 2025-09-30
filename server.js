const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sathyaasai403@gmail.com",
    pass: "yhsl naye rroj vnrx",
  },
});

// API Route
app.post("/send-email", async (req, res) => {
  const { user_name, user_email, message } = req.body;

  try {
    // Email to YOU
    await transporter.sendMail({
      from: user_email,
      to: "sathyaasai403@gmail.com", // your Gmail again
      subject: `New Hire Me Message from ${user_name}`,
      text: `Name: ${user_name}\nEmail: ${user_email}\nMessage: ${message}`,
    });

    // Auto-Reply to USER
    await transporter.sendMail({
      from: "sathyaasai403@gmail.com",
      to: user_email,
      subject: `Thanks for contacting me, ${user_name}!`,
      text: `Hi ${user_name},\n\nThanks for your message. I'll get back to you soon.\n\nBest,\nSainivas`,
    });

    res.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
