import React, { FC } from 'react';
import { TextField as MuiTextField } from '@mui/material';
import { TextFieldProps } from '@mui/material/TextField/TextField';

export const DateTimePicker: FC<TextFieldProps> = ({ name, ...otherProps }) => {
  const configDateTimePicker: TextFieldProps = {
    // ...field,
    // ...otherProps,
    type: 'date', // most important one...
    variant: 'outlined',
    fullWidth: true,
    InputLabelProps: {
      shrink: true, // most important.
    },
  };

  return <MuiTextField {...configDateTimePicker} />;
};
