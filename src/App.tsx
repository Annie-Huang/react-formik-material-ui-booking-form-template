import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Header from './components/Header/Header';
import { Form, Formik, FormikHelpers, FormikValues } from 'formik';
import * as Yup from 'yup';
import { TextField } from './components/FormsUI/TextField/TextField';
import { Select } from './components/FormsUI/Select/Select';
import countries from './data/countries.json';
import { DateTimePicker } from './components/FormsUI/DateTimePicker/DateTimePicker';
import DatePicker from './components/FormsUI/DateTimePicker/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Checkbox } from './components/FormsUI/Checkbox/Checkbox';
import { SubmitButton } from './components/FormsUI/SubmitButton/SubmitButton';

type Values = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  country: string;
  arrivalDate: string;
  departureDate: string;
  message: string;
  termsOfService: boolean;
};

const INITIAL_FORM_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  country: '',
  arrivalDate: '',
  departureDate: '',
  message: '',
  termsOfService: false,
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email.').required('Required'),

  // Actually surprised that I typed it with integer but still able to set it up as string for the type....
  phone: Yup.number()
    .integer()
    .typeError('Please enter a valid phone number')
    .required('Required'),

  addressLine1: Yup.string().required('Required'),
  addressLine2: Yup.string(),
  city: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  country: Yup.string().required('Required'),

  arrivalDate: Yup.date().required('Required'),
  departureDate: Yup.date().required('Required'),
  message: Yup.string(),
  termsOfService: Yup.boolean()
    .oneOf([true], 'The terms and conditions must be accepted.')
    .required('The terms and conditions must be accepted.'),
});

function App() {
  return (
    // <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                values: Values,
                formikHelpers: FormikHelpers<Values>,
              ) => {
                console.log(values);
              }}
            >
              <Form>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12 }}>
                    <Typography>Your details</Typography>
                  </Grid>
                  <Grid size={{ xs: 6 }}>
                    <TextField name='firstName' label='First Name' />
                  </Grid>

                  <Grid size={{ xs: 6 }}>
                    <TextField name='lastName' label='Last Name' />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <TextField name='email' label='Email' />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <TextField name='phone' label='Phone' />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <Typography>Address</Typography>
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <TextField name='addressLine1' label='Address Line 1' />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <TextField name='addressLine2' label='Address Line 2' />
                  </Grid>

                  <Grid size={{ xs: 6 }}>
                    <TextField name='city' label='City' />
                  </Grid>

                  <Grid size={{ xs: 6 }}>
                    <TextField name='state' label='State' />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <Select
                      name='country'
                      label='Country'
                      options={countries}
                    />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <Typography>Booking information</Typography>
                  </Grid>

                  <Grid size={{ xs: 6 }}>
                    <DateTimePicker name='arrivalDate' label='Arrival Date' />
                  </Grid>

                  <Grid size={{ xs: 6 }}>
                    <DateTimePicker
                      name='departureDate'
                      label='Departure Date'
                    />
                  </Grid>

                  {/*<Grid size={{ xs: 6 }}>*/}
                  {/*  <DatePicker name='arrivalDate' label='Arrival Date' />*/}
                  {/*</Grid>*/}

                  {/*<Grid size={{ xs: 6 }}>*/}
                  {/*  <DatePicker name='departureDate' label='Departure Date' />*/}
                  {/*</Grid>*/}

                  <Grid size={{ xs: 12 }}>
                    <TextField
                      name='message'
                      label='Message'
                      multiline={true}
                      rows={4}
                    />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <Checkbox
                      name='termsOfService'
                      legend='Terms Of Service'
                      label='I agree'
                    />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <SubmitButton>Submit Form</SubmitButton>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </div>
        </Container>
      </Grid>
    </Grid>
    // </LocalizationProvider>
  );
}

export default App;
