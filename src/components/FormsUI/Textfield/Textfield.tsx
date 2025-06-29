import React, { FC } from 'react';
import { TextField as MuiTextField, TextFieldVariants } from '@mui/material';
import { useField } from 'formik';
import { TextFieldProps } from '@mui/material/TextField/TextField';

export const Textfield: FC<TextFieldProps> = ({ name, ...otherProps }) => {
  const [field, mata] = useField(name);

  const configTextfield: TextFieldProps = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: 'outlined',
  };

  return <MuiTextField {...configTextfield} />;
};
