import React, { ChangeEvent, FC } from 'react';
import {
  Checkbox as MuiCheckbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from '@mui/material';
import { CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox/Checkbox';
import { useField, useFormikContext } from 'formik';

type CheckboxProps = MuiCheckboxProps & { label: string; legend: string };

type ConfigFormControl = {
  error?: boolean;
  helperText?: string;
};

export const Checkbox: FC<CheckboxProps> = ({
  name,
  label,
  legend,
  ...otherProps
}) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    setFieldValue(name ?? '', checked);
  };

  const configCheckbox = {
    ...field,
    onChange: handleChange,
  };

  const configFormControl: ConfigFormControl = {};
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
    configFormControl.helperText = meta.error;
  }

  return (
    <FormControl {...configFormControl}>
      <FormLabel component='legend'>{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<MuiCheckbox {...configCheckbox} />}
          label={label}
        />
      </FormGroup>
      {configFormControl.helperText && (
        <FormHelperText>{configFormControl.helperText}</FormHelperText>
      )}
    </FormControl>
  );
};
