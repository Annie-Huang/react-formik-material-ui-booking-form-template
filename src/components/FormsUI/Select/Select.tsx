import React from 'react';
import { TextField as MuiTextField } from '@mui/material';
import { TextFieldProps } from '@mui/material/TextField/TextField';
import { InputProps as StandardInputProps } from '@mui/material/Input/Input';

export const Select = () => {
  // const handleChange = (evt: StandardInputProps['onChange']) => {};
  const handleChange = (
    evt: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>,
  ) => {};

  const configSelect: TextFieldProps = {
    // ...field,
    // ...otherProps,
    select: true,
    variant: 'outlined',
    fullWidth: true,
    onChange: handleChange,
  };

  return <MuiTextField {...configSelect}></MuiTextField>;
};
