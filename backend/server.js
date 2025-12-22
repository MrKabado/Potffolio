const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');

require('dotenv').config();
const app = express();

const resend = new Resend(process.env.RESEND_API_KEY); // Make sure to set this environment variable

app.use(express.json());
app.use(cors({
  origin: ["https://potffolio-one.vercel.app"],
  methods: ["GET", "POST"], 
  allowedHeaders: ["Content-Type"]
}));

// Remove trailing slash from origin if present
app.get('/', (req, res) => {
  res.send("Hello, Backend is running");
});

app.get('/data', (req, res) => {
  res.send("this is data");
});

app.post('/data', async (req, res) => {
  console.log("The received data from client:", req.body);

  const { name, email, textMessage } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Use your verified domain here
      to: 'jersonjaybonghanoy@gmail.com',
      subject: 'New Contact Form Message',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${textMessage}</p>
        </div>
      `,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${textMessage}`,
      reply_to: email
    });

    if (error) {
      console.log("❌ Resend error:", error);
      return res.status(500).json({ 
        message: "Failed to send message", 
        error: error.message 
      });
    }

    console.log("✅ Email sent from contact form:", data.id);
    return res.json({ 
      message: "Message sent successfully!", 
      id: data.id 
    });
    
  } catch (err) {
    console.log("❌ Error sending email:", err);
    return res.status(500).json({ 
      message: "Failed to send message", 
      error: err.message 
    });
  }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});