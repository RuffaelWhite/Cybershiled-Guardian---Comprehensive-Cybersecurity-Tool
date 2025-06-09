const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const port = process.env.PORT || 5000;

app.use(helmet());
app.use(cors());
app.use(express.json());

// Simple password strength checker route
app.post('/api/password-strength', (req, res) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ error: 'Password is required' });
  }

  let score = 0;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  let strength = 'Very Weak';
  if (score >= 5) strength = 'Very Strong';
  else if (score >= 4) strength = 'Strong';
  else if (score >= 3) strength = 'Medium';
  else if (score >= 2) strength = 'Weak';

  res.json({ strength, score });
});

app.listen(port, () => {
  console.log(`Cybershiled Guardian backend listening on port ${port}`);
});
