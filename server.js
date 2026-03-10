const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(cors());
app.use(bodyParser.json());

// Serve all static portfolio files (index.html, style.css, *.js, etc.)
app.use(express.static(path.join(__dirname)));

// ─── Nodemailer Transporter ───────────────────────────────────────────────────
// Create a .env file locally (never commit it!) with:
//   EMAIL_USER=your-email@gmail.com
//   EMAIL_PASS=your-gmail-app-password
// On Render / Railway, add these as environment variables in their dashboard.
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ─── POST /send-email ─────────────────────────────────────────────────────────
app.post("/send-email", async (req, res) => {
  const { user_name, user_email, message } = req.body;

  // Basic validation
  if (!user_name || !user_email || !message) {
    return res.status(400).json({ success: false, error: "All fields are required." });
  }

  try {
    // Email notification to YOU
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Hire Me Message from ${user_name}`,
      text: `Name: ${user_name}\nEmail: ${user_email}\nMessage:\n${message}`,
    });

    // Auto-reply to the SENDER
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: user_email,
      subject: `Thanks for contacting me, ${user_name}!`,
      text: `Hi ${user_name},\n\nThanks for reaching out! I have received your message and will get back to you soon.\n\nBest regards,\nVunnam Sai Nivas\nJava Full Stack Developer`,
    });

    res.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: "Failed to send email. Please try again." });
  }
});

// ─── Fallback: serve index.html for any unknown route ─────────────────────────
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// ─── Start Server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});