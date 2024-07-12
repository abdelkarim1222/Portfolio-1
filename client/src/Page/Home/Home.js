import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h2" gutterBottom>Home Page</Typography>
        <Typography variant="body1" paragraph>Welcome to the home page!</Typography>
        <Typography variant="h4" gutterBottom>Login</Typography>
      </Box>
    </Container>
  );
};

export default Home;
