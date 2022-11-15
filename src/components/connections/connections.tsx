import React from 'react';
import styles from './connections.module.scss';
import { Icon } from '../shared/icon/icon';

export interface ConnectionsProps {
    className?: string;
    count?: number;
}

export const Connections: React.FC<ConnectionsProps> = ({ className, count }) => {
    return <div className={`${styles.root} ${className}`}>
        <Icon name="followers" />
        <span>{count}</span>Connections</div>;
};
