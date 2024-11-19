import React, { useContext } from 'react';
import { ButtonProps } from './interface';
import { ConfigContext } from '../ConfigProvider';
import './style';
import cs from '../_util/classNames';

export default (props: ButtonProps) => {
  const { children, type, className, style, ...rest } = props;

  const { getPrefix } = useContext(ConfigContext);

  const prefixCls = getPrefix('btn');

  const _type = type === 'default' ? 'secondary' : type;
  const classNames = cs(prefixCls, `${prefixCls}-${_type}`, className);

  return (
    <button {...rest} className={classNames} style={style}>
      {children}
    </button>
  );
};
