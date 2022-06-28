import React, {ButtonHTMLAttributes, useRef} from 'react';

import cx from 'clsx';

import styles from './SwitchButton.module.scss';

type TSwitch = ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: "normal" | "small"
    disabled?: boolean
    checked?: boolean
    isIcon?: boolean
    isTitle?: boolean
    mixin?: string
    onChange?: () => void
}

const SwitchButton: React.FC<TSwitch> = ({
                                                  size = "normal",
                                                  disabled= false,
                                                  checked,
                                                  isIcon= false,
                                                  isTitle= false,
                                                  mixin,
                                                  onChange,

}) => {

    const switchId = useRef(Math.random().toString());

    return (
        <div className={cx(styles[`Switch`],
            { [styles[`Switch__disabled`]]: disabled },
            { [styles[`Switch__small`]]: size === 'small' },
            { [styles[`Switch__icon`]]: isIcon },
            { [styles[`Switch__title`]]: isTitle },
            mixin
            )}
             >
            <input
                type="checkbox"
                className={styles.Switch__checkbox}
                id={switchId.current}
                onChange={onChange}
                disabled={disabled}
                checked={checked}
            />
            <label className={styles.Switch__label} htmlFor={switchId.current}
                   tabIndex={0}
            >
                <span className={styles.Switch__inner} />
                <span className={styles.Switch__switch} />
            </label>
        </div>
    );
};

export default SwitchButton;