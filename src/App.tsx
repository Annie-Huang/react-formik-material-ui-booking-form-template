import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Header from './components/Header/Header';
import { Form, Formik, FormikHelpers, FormikValues } from 'formik';
import * as Yup from 'yup';

const INITIAL_FORM_STATE = {};

const FORM_VALIDATION = Yup.object().shape({});

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
              initialValues={{
                ...INITIAL_FORM_STATE,
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(
                values: FormikValues,
                formikHelpers: FormikHelpers<FormikValues>,
              ) => {
                console.log(values);
              }}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12 }}>
                    <Typography>Your details</Typography>
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <Typography>Address</Typography>
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <Typography>Booking information</Typography>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
  );
}

export default App;
