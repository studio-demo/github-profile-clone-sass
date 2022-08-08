import styles from "./repository-label.module.scss";

export interface RepositoryLabelProps {
  label: string;
}

export const RepositoryLabel = ({ label }: RepositoryLabelProps) => {
  return <span className={styles.root}>{label}</span>;
};
