import React from 'react';
import {
  Checkbox as MuiCheckbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@mui/material';

export const Checkbox = () => {
  return (
    <FormControl>
      <FormLabel></FormLabel>
      <FormGroup>
        <FormControlLabel control={<MuiCheckbox />} label='' />
      </FormGroup>
    </FormControl>
  );
};
