import React, { FC, useCallback, ReactNode } from 'react';
import { TextField as MuiTextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BLACK } from '../../csd-ui/Constants/src';

const useStyles = makeStyles({
  main: {
    margin: '5px',
  },
  inputLabel: {
    color: BLACK,
  },
});

type Props = {
  onChange?: (field: any, value: any) => void;
  onBlur?: (field: any, value: any) => void;
  label?: string;
  value?: string | number; 
  id: string;
  endAdornment?: ReactNode | string;
  startAdornment?: ReactNode | string;
  variant?: 'outlined' | 'filled' | 'standard';
  labelInside?: boolean;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
  type?: string;
  fieldName?: string;
  error?: boolean;
  fullWidth?: boolean;
  required?: boolean;
  errorMessage?: string;
  name?: string;
  size?: 'small' | 'medium';
};

export const TextField: FC<Props> = ({
  value,
  label,
  onChange,
  onBlur,
  id,
  variant,
  disabled,
  className,
  placeholder,
  endAdornment,
  startAdornment,
  type,
  fieldName,
  error,
  fullWidth,
  required,
  errorMessage,
  name,
  size = 'small',
}) => {
  const classes = useStyles();
  const handleChange = useCallback(
    (e) => {
      const { value } = e.target;
        if (onChange) {
           onChange(fieldName, value)
       };    
    },
    [onChange, fieldName],
  );

  const handleBlur = useCallback(
    (e) => {
      if (onBlur) {
        onBlur(fieldName, e.target.value);
      }
    },
    [onBlur, fieldName],
  );

  const inputId = `${id}-text-field`;
  return (
    <MuiTextField
      size={size}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      onPaste={handleChange}
      placeholder={placeholder}
      variant={variant}
      label={label}
      id={inputId}
      disabled={disabled}
      className={(className)}
      InputProps={{
        endAdornment: endAdornment,
        startAdornment: startAdornment,
      }}
      InputLabelProps={{
        classes: {
          root: classes.inputLabel,
        },
      }}
      type={type}
      error={error}
      fullWidth={fullWidth}
      required={required}
      name={name}
      helperText={error ? errorMessage : ''}
    />
  );
};

export default TextField;

TextField.defaultProps = {
  type: 'text',
  variant: 'outlined',
};
