import React, { createContext } from 'react';
import { GlobalConfigProps } from './interface';

export const globalCtx = createContext<GlobalConfigProps>(
  {} as GlobalConfigProps,
);

export default (props: GlobalConfigProps) => {
  const { children } = props;
  return <globalCtx.Provider value={props}>{children}</globalCtx.Provider>;
};
