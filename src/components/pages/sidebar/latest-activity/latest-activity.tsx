import styles from './latest-activity.module.scss';

interface ActivityItem {
    icon: JSX.Element;
    action: string;
    commit: string;
    date: string;
}
export interface LatestActivityProps {
    children: ActivityItem[];
}

export const LatestActivity: React.FC<LatestActivityProps> = ({ children }) => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>Latest Activity</p>
            {children.map((child) => (
                <div className={styles.activity}>
                    <div>{child.icon}</div>
                    <div className={styles.info}>
                        <div>
                            <p className={styles.action}>{child.action}</p>
                            <p className={styles.commit}>{child.commit}</p>
                        </div>
                        <div>
                            <p className={styles.date}>{child.date}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
