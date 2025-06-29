import React from 'react';
import { Container, Grid } from '@mui/material';
import Header from './components/Header/Header';

function App() {
  return (
    <Grid container>
      <Grid size={{ xs: 12 }}>
        <Header />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Container maxWidth='md'>
          <div style={{ marginBlock: '40px 64px' }}> </div>
        </Container>
      </Grid>
    </Grid>
  );
}

export default App;
