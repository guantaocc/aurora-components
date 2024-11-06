import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type BaseButtonProps = {
  className?: string;
  disabled?: string;
  type?:
    | 'primary'
    | 'info'
    | 'warning'
    | 'error'
    | 'default'
    | 'link'
    | 'danger'
    | 'info'
    | 'dashed';
  children?: React.ReactNode;
  href?: string;
  circle?: boolean;
};

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;

type ButtonProps = NativeButtonProps & AnchorButtonProps;

export { BaseButtonProps, ButtonProps };
