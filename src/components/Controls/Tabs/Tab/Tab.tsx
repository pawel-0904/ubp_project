import React, { ButtonHTMLAttributes } from "react";

import cx from 'clsx';

import styles from './Tab.module.scss';

type TTab = ButtonHTMLAttributes<HTMLButtonElement> & {
  isActive: boolean
  children: React.ReactNode
  mixin?: string
}

const Tab: React.FC<TTab> = ({isActive = false, mixin, children, ...rest}) => {
  return (
    <button
      className={cx(styles.Tab, mixin, {
        [styles[`Tab--active`]]: isActive,
      })}
      {...rest}
      >
      {children}
    </button>
  );
};

export default Tab;

