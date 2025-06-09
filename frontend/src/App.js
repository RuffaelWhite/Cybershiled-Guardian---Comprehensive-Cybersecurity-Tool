import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');
  const [score, setScore] = useState(0);

  const checkPasswordStrength = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/password-strength', { password });
      setStrength(response.data.strength);
      setScore(response.data.score);
    } catch (error) {
      setStrength('Error checking password strength');
      setScore(0);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20 }}>
      <h1>Cybershiled Guardian</h1>
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        style={{ width: '100%', padding: 8, fontSize: 16 }}
      />
      <button onClick={checkPasswordStrength} style={{ marginTop: 10, padding: '8px 16px', fontSize: 16 }}>
        Check Strength
      </button>
      {strength && (
        <div style={{ marginTop: 10 }}>
          <strong>Strength:</strong> {strength} (Score: {score})
        </div>
      )}
    </div>
  );
}

export default App;
