import React, { FC } from 'react';
import { TextField as MuiTextField } from '@mui/material';
import { TextFieldProps } from '@mui/material/TextField/TextField';
import { useField } from 'formik';

export const DateTimePicker: FC<TextFieldProps> = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const configDateTimePicker: TextFieldProps = {
    ...field,
    ...otherProps,
    type: 'date', // most important one...
    variant: 'outlined',
    fullWidth: true,
    InputLabelProps: {
      shrink: true, // most important.
    },
  };

  if (meta && meta.touched && meta.error) {
    configDateTimePicker.error = true;
    configDateTimePicker.helperText = meta.error;
  }

  return <MuiTextField {...configDateTimePicker} />;
};
