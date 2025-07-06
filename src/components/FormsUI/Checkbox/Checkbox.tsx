import React, { FC } from 'react';
import {
  Checkbox as MuiCheckbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@mui/material';
import { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox/Checkbox';

type CheckboxProps = MuiCheckboxProps & { label: string; legend: string };

export const Checkbox: FC<CheckboxProps> = ({
  name,
  label,
  legend,
  ...otherProps
}) => {
  return (
    <FormControl>
      <FormLabel></FormLabel>
      <FormGroup>
        <FormControlLabel control={<MuiCheckbox />} label='' />
      </FormGroup>
    </FormControl>
  );
};
