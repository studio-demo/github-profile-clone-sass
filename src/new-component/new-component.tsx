import React from 'react';
import styles from './new-component.module.scss';
import { Icon } from '../components/shared/icon/icon';

export interface NewComponentProps {
    className?: string;
}

export const NewComponent: React.FC<NewComponentProps> = ({ className }) => {
    return (
        <li className={`${styles.root} ${className}`}>
            <Icon name="repositories" />
            <span className={styles.text}>text</span>
            <span className={styles.badge}>13</span>
        </li>
    );
};
