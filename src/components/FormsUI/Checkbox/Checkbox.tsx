import React, { ChangeEvent, FC } from 'react';
import {
  Checkbox as MuiCheckbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@mui/material';
import { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox/Checkbox';
import { useField } from 'formik';

type CheckboxProps = MuiCheckboxProps & { label: string; legend: string };

export const Checkbox: FC<CheckboxProps> = ({
  name,
  label,
  legend,
  ...otherProps
}) => {
  const [field, meta] = useField(name);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {};

  const configCheckbox = {
    ...field,
    onChange: handleChange,
  };

  return (
    <FormControl>
      <FormLabel></FormLabel>
      <FormGroup>
        <FormControlLabel control={<MuiCheckbox />} label='' />
      </FormGroup>
    </FormControl>
  );
};
