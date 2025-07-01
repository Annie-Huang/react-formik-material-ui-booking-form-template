import React, { ChangeEvent, FC } from 'react';
import { TextField as MuiTextField } from '@mui/material';
import { TextFieldProps } from '@mui/material/TextField/TextField';
import { InputProps as StandardInputProps } from '@mui/material/Input/Input';

type Options = {
  [field: string]: string;
};
type SelectProps = TextFieldProps & { options: Options };

export const Select: FC<SelectProps> = ({ name, options, ...otherProps }) => {
  // const handleChange = (evt: StandardInputProps['onChange']) => {};
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {};

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
