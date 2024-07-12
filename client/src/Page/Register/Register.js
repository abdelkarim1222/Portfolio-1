import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/admin/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName, username, password, avatar }),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.token);
      alert('Registration successful!');
    } else {
      alert(data.message || 'Registration failed');
    }
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h2" gutterBottom>Register</Typography>
        <form onSubmit={handleSubmit}>
          <TextField 
            label="First Name" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            required 
          />
          <TextField 
            label="Last Name" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
            required 
          />
          <TextField 
            label="Username" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
          <TextField 
            label="Password" 
            type="password" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <TextField 
            label="Avatar URL" 
            variant="outlined" 
            fullWidth 
            margin="normal" 
            value={avatar} 
            onChange={(e) => setAvatar(e.target.value)} 
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>Register</Button>
        </form>
      </Box>
    </Container>
  );
};

export default Register;
