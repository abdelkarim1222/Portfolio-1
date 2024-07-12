import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

 

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h2" gutterBottom>Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField 
            label="Username" 
            variant="outlined" 
            fullWidth             margin="normal" 
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
          <Button type="submit" variant="contained" color="primary" fullWidth>Login</Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
