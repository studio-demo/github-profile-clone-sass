import styles from './techs.module.scss';

interface TechsProps {
    technologies: JSX.Element[];
}

export const Techs = ({ technologies }: TechsProps) => {
    return (
        <div>
            <p className={styles.title}>Tech Stack</p>
            <div className={styles.techs}>{technologies.slice(0, technologies.length / 2).map((tech) => tech)}</div>
            <div className={styles.techs}>{technologies.slice(technologies.length / 2).map((tech) => tech)}</div>
        </div>
    );
};
