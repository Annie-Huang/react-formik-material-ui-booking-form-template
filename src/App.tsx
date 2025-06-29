import React from 'react';
import { Container, Grid } from '@mui/material';
import Header from './components/Header/Header';
import { Form, Formik, FormikHelpers, FormikValues } from 'formik';

function App() {
  return (
    <Grid container>
      <Grid size={{ xs: 12 }}>
        <Header />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Container maxWidth='md'>
          <div style={{ marginBlock: '40px 64px' }}>
            <Formik
              initialValues={{}}
              onSubmit={function (
                values: FormikValues,
                formikHelpers: FormikHelpers<FormikValues>,
              ): void | Promise<any> {
                throw new Error('Function not implemented.');
              }}
            >
              <Form></Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
}

export default App;
