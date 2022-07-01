import React, { HTMLAttributes } from "react";

import cx from 'clsx';

import styles from './Tabs.module.scss';

type TTabs = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode
  mixin?: string
}

const Tabs: React.FC<TTabs> = ({mixin, children, ...rest}) => {
  return (
    <div className={cx(styles.Tabs, mixin)} {...rest}>
      {children}
    </div>
  );
};

export default Tabs;

