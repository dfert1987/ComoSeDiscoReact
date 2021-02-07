import React, { FC } from 'react';
import MaterialButton from '@material-ui/core/Button';

type Props = {
    id: string;
    className?: string;
    disabled?: boolean;
    /* let loading prop determine whether button is disabled */
    disableOnLoading?: boolean;
    fullWidth?: boolean;
    href?: string;
    icon?: JSX.Element;
    /* if true, button will be placed before the children. component default is after */
    startIcon?: boolean;
    loading?: boolean;
    onClick?: (arg: any) => void;
    size?: 'small' | 'medium' | 'large';
    text: string;
    theme: 'inherit' | 'primary' | 'secondary' | 'default';
    type: 'button' | 'submit';
    variant?: 'contained' | 'outlined' | 'text';
  };

  export const ButtonTemplate: FC<Props> = ({
    id,
    className,
    disabled,
    text,
    loading,
    onClick,
    size,
    fullWidth,
    type,
    startIcon,
    disableOnLoading,
    theme,
    variant,
    href,
  }) => {
    // const classes = useStyles();
    // const displayIcon = loading ? (
    //   <Spinner id={id} color="inherit" className={classes.spinner} />
    // ) : (
    //   icon
    // );
    return (
      <MaterialButton
        id={`${id}-button`}
        className={className}
        disabled={disabled || (disableOnLoading && loading)}
        onClick={onClick}
        size={size}
        type={type}
        fullWidth={fullWidth}
        href={href}
        color={theme}
        variant={variant}>
        {text}
      </MaterialButton>
    );
  };