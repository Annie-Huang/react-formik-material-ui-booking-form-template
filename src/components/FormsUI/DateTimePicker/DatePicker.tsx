import React, { FC } from 'react';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';
import { DatePickerProps } from '@mui/x-date-pickers/DatePicker/DatePicker.types';
import { useField } from 'formik';
import { TextFieldProps } from '@mui/material/TextField/TextField';

const DatePicker: FC<DatePickerProps> = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const configDateTimePicker: DatePickerProps = {
    ...field,
    ...otherProps,
  };

  // if (meta && meta.touched && meta.error) {
  //   configDateTimePicker.error = true;
  //   configDateTimePicker.helperText = meta.error;
  // }

  return <MuiDatePicker {...configDateTimePicker} />;
};

export default DatePicker;
