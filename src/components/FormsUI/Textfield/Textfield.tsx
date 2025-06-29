import React from 'react';
import { TextField as MuiTextField, TextFieldVariants } from '@mui/material';

type ConfigTextfield = {
  fullWidth: boolean;
  variant: TextFieldVariants;
};

export const Textfield = () => {
  const configTextfield: ConfigTextfield = {
    fullWidth: true,
    variant: 'outlined',
  };

  return <MuiTextField {...configTextfield} />;
};
