import React, { FC } from 'react';
import {
    DEFAULT,
    ERROR,
    WARNING,
    CLEAR,
    WARNING_COLOR,
    ERROR_COLOR,
    CLEAR_BUTTON_COLOR,
    CLEAR_BUTTON_BG_COLOR,
    WARNING_TEXT,
    SNOW,
    PRIMARY_COLOR,
    SECONDARY,
    PRIMARY,
  } from '../../csd-ui/Constants/src';
  import { styled } from '@material-ui/core/styles';
  import { ButtonTemplate } from './ButtonTemplate';


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
    theme:
      | 'inherit'
      | 'primary'
      | 'secondary'
      | 'default'
      | 'error'
      | 'warning'
      | 'clear';
    type: 'button' | 'submit';
    variant?: 'contained' | 'outlined' | 'text';
  };


  const PrimaryButton = styled(ButtonTemplate)({
    backgroundColor: PRIMARY_COLOR,
    border: `2px solid ${SNOW}`,
    color: SNOW,
    fontWeight: 900,
  });
  
  const SecondaryButton = styled(ButtonTemplate)({
    backgroundColor: SNOW,
    border: `1px solid ${WARNING_COLOR}`,
    color: WARNING_COLOR,
  });
  
  const ErrorButton = styled(ButtonTemplate)({
    color: ERROR_COLOR,
  });
  
  const WarningButton = styled(ButtonTemplate)({
    backgroundColor: WARNING_COLOR,
    border: `2px solid ${SNOW}`,
    color: WARNING_TEXT,
    fontWeight: 900,
  });
  
  const ClearButton = styled(ButtonTemplate)({
    backgroundColor: CLEAR_BUTTON_BG_COLOR,
    color: CLEAR_BUTTON_COLOR,
  });
  
  export const Button: FC<Props> = ({ theme, ...props }) => {
    switch (theme) {
      case PRIMARY:
        return <PrimaryButton theme={DEFAULT} {...props} />;
      case SECONDARY:
        return <SecondaryButton theme={DEFAULT} {...props} />;
      case ERROR:
        return <ErrorButton theme={DEFAULT} {...props} />;
      case WARNING:
        return <WarningButton theme={DEFAULT} {...props} />;
      case CLEAR:
        return <ClearButton theme={DEFAULT} {...props} />;
      default:
        return <ButtonTemplate theme={theme} {...props} />;
    }
  };
  


