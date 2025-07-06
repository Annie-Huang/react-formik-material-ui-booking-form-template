import React, { FC } from 'react';
import { Button as MuiButton } from '@mui/material';
import { ButtonProps } from '@mui/material/Button/Button';

export const SubmitButton: FC<ButtonProps> = ({ children, ...otherProps }) => {
  const handleSubmit = () => {
    // submitForm();
  };

  const configButton = {
    variant: 'contained',
    color: 'primary',
    fullWidth: true,
    onClick: handleSubmit,
  };

  // I don't understand why materialUI for this version keep asking to enter href field.
  // @ts-ignore
  return <MuiButton {...configButton}>{children}</MuiButton>;
};
