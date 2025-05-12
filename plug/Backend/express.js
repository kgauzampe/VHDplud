const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/api/send', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: 'your-email@gmail.com', pass: 'your-password' },
    });

    await transporter.sendMail({
      from: email,
      to: 'your-email@gmail.com',
      subject: `New message from ${name}`,
      text: message,
    });

    res.json({ message: 'Message sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending message' });
  }
});

app.listen(5000, () => console.log('Server running on port 5000'));