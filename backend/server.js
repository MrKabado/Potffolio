const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();


app.use(express.json());
app.use(cors({
  origin: 'https://your-frontend-service.onrender.com'
}));

//app get is getting a data to the server
app.get('/', (req, res) => {
  res.send("Hello, Backend is running")
});

app.get('/data', (req, res) => {
  res.send("this is data");
});

app.post('/data', async (req, res) => {
  console.log("The received data from client:", req.body);

  const {name, email, textMessage} = req.body;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jersonjaybonghanoy@gmail.com',
      pass: 'xaxf qxpm puuj vglr'
    }
  });

  let mailOptions = {
    from: `"${name}", <${email}>`,
    to: 'jersonjaybonghanoy@gmail.com',
    subject: 'New Contact From Message',
    text: 
    `
      Name: ${name},
      Email: ${email},
      Message: ${textMessage}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent from contact form");
    return res.json({message: "Message sent successfully!"});
  } catch (err) {
    console.log("❌ Error sending email:", err);
    return res.status(500).json({ message: "Failed to send message", error: err});
  }
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});