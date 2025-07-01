import React, { FC } from 'react';
import { TextField as MuiTextField } from '@mui/material';
import { useField } from 'formik';
import { TextFieldProps } from '@mui/material/TextField/TextField';

export const TextField: FC<TextFieldProps> = ({ name, ...otherProps }) => {
  const [field, mata] = useField(name);

  const configTextfield: TextFieldProps = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: 'outlined',
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }

  return <MuiTextField {...configTextfield} />;
};
