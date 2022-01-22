import { FC } from 'react';
import { css } from '@emotion/css';

const Cursor = {
  primary: 'pointer',
  secondary: 'pointer',
  disabled: 'not-allowed',
  danger: 'pointer', 
  close: 'pointer',
}

type ButtonVariants = 'primary'|'secondary'|'disabled'|'danger'|'close'

type ButtonPropTypes = {
  disabled?: boolean;
  onClick: () => void;
  variant?: ButtonVariants,
  className?: string
  fullWidth?: boolean;
  dataTestId?: string;
}

export const Button:FC<ButtonPropTypes> = ({ children,
  disabled = false,
  onClick,
  variant = 'primary',
  className,
  fullWidth = false,
  dataTestId
}) => {
  return <button disabled={disabled} onClick={onClick} className={
    css`
    display: inline-flex;
    border: 0px;
    border-radius: 6px;
    margin: 0px;
    cursor: ${Cursor[variant]};
    align-items: center;
    justify-content: center;
      text-align: center;
      vertical-align: middle;
      position: relative;
      text-decoration: none;
      font-size: 16px;
      font-weight: 600;
      padding: 16px 32px;
    `
  } >
    {children}</button>;
};
