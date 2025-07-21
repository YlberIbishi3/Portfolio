// Simple Express server for contact form
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Replace with your real email and password or use environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ylberibishi03@gmail.com', // your email
    pass: 'nvst sybs ltms ocji' // use an app password, not your real password
  }
});

app.post('/api/contact', async (req, res) => {
  const { fullname, email, message } = req.body;
  if (!fullname || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const mailOptions = {
    from: email,
    to: 'ylberibishi03@gmail.com',
    subject: `New Contact Form Submission from ${fullname}`,
    text: `Name: ${fullname}\nEmail: ${email}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:3001/api/contact`);
});
