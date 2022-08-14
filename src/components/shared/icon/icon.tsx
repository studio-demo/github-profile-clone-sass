import classNames from 'classnames';
import { memo, useMemo } from 'react';
import styles from './icon.module.scss';
import { getIcon, Icons } from './icons';

export interface IconProps {
    className?: string;
    name: Icons;
}

export const Icon = memo<IconProps>(function Icon({ className, name }) {
    const icon = useMemo(() => getIcon(name), [name]);
    return (
        <svg className={classNames(styles.root, className)} width="16" height="16" viewBox="0 0 16 16">
            {icon}
        </svg>
    );
});
