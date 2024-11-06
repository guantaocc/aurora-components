import React from 'react';
import classNames from 'classnames';
import { ButtonProps } from './interface';

export default (props: ButtonProps) => {
  const { children } = props;
  return <button className="btn">{children}</button>;
};
