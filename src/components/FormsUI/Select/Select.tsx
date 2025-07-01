import React from 'react';
import { TextField as MuiTextField } from '@mui/material';
import { TextFieldProps } from '@mui/material/TextField/TextField';

export const Select = () => {
  const configSelect: TextFieldProps = {
    // ...field,
    // ...otherProps,
    select: true,
    variant: 'outlined',
    fullWidth: true,
    // onChange: handleChange,
  };

  return <MuiTextField {...configSelect}></MuiTextField>;
};
