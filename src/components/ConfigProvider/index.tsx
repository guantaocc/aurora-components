import React, { createContext } from 'react';
import { GlobalConfigProps } from './interface';
import omit from '../_util/omit';

// createContext 默认值
export const ConfigContext = createContext<GlobalConfigProps>({
  getPrefix: (componentName: string, customPrefix?: string) => {
    return `${customPrefix || 'aurora'}-${componentName}`;
  },
});

function ConfigProvider(props: GlobalConfigProps) {
  const { children, prefix } = props;
  function getPrefix(component: string) {
    return prefix ? `${prefix}-${component}` : `aurora-${component}`;
  }

  const context: GlobalConfigProps = {
    ...omit(props, ['children']),
    getPrefix,
  };

  return (
    <ConfigContext.Provider value={context}>{children}</ConfigContext.Provider>
  );
}

ConfigProvider.ConfigContext = ConfigContext;

export default ConfigProvider;
