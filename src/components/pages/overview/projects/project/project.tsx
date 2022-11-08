import { memo } from 'react';
import styles from './project.module.scss';

export interface ProjectProps {
    className?: string;
    name: string;
    description: string;
}

export const Project = memo<ProjectProps>(function Project({ className, name, description }) {
    return (
        <li className={`${styles.root} ${className}`}>
            <div className={styles.description}>{description}</div>
            <div className={styles.header}>{name}</div>
        </li>
    );
});
