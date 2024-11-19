import { ReactNode } from 'react';

type GlobalConfigProps = {
  children?: ReactNode;
  /**
   * @description 国际化主题
   * @default #325DFF
   */
  locale?: string;
  /**
   * prefix: 'aurora'
   */
  prefix?: string;
  getPrefix: (component: string) => string;
};

export { GlobalConfigProps };
