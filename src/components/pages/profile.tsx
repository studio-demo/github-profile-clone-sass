import { Sidebar } from './sidebar/sidebar';
import { Overview } from './overview/overview';
import type { GitHubUser } from '../../shared/model/github-user';
import styles from './profile.module.scss';

export interface ContentProps {
    className?: string;
    user: GitHubUser;
}

export const Profile: React.FC<ContentProps> = ({ className, user }) => {
    return (
        <div className={`${styles.root} ${className || ''}`}>
            <Sidebar user={user} />

            <main>
                <Overview />
            </main>
        </div>
    );
};
