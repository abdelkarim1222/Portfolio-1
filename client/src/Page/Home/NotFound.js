import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const NotFound = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h2" color="error" gutterBottom>404 - Not Found</Typography>
        <Typography variant="body1" paragraph>Sorry, the page you are looking for does not exist.</Typography>
      </Box>
    </Container>
  );
};

export default NotFound;
