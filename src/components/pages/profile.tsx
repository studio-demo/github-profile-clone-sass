import { Overview } from './overview/overview';
import type { ApiUser } from '../../shared/model/api-user';
import styles from './profile.module.scss';
import { TopBar } from './top-bar/top-bar';
import { LatestActivity } from './top-bar/latest-activity/latest-activity';
import { folderIcon } from './top-bar/latest-activity/svg/folder';
import { milestoneIcon } from './top-bar/latest-activity/svg/milestone';
import { uploadIcon } from './top-bar/latest-activity/svg/upload';
import { documentIcon } from './top-bar/latest-activity/svg/document';

export interface ContentProps {
    className?: string;
    user: ApiUser;
}

export const Profile: React.FC<ContentProps> = ({ className, user }) => {
    return (
        <div className={`${styles.root} ${className || ''}`}>
            <TopBar user={user} />

            <main className={styles.content}>
                <LatestActivity
                    children={[
                        { icon: folderIcon, action: 'Added new  project', commit: 'Goldar/Sybo-Room', date: 'Dec 29' },
                        { icon: folderIcon, action: 'Added new  project', commit: 'Goldar/Sybo-Room', date: 'Dec 27' },
                        { icon: milestoneIcon, action: 'Badge', commit: 'Goldar/Sybo-Room', date: 'Dec 25' },
                        { icon: uploadIcon, action: 'Upload something', commit: 'Goldar/Sybo-Room', date: 'Dec 18' },
                        {
                            icon: documentIcon,
                            action: 'Updated documentation',
                            commit: 'Goldar/Sybo-Room',
                            date: 'Dec 12',
                        },
                        { icon: folderIcon, action: 'Added new  project', commit: 'Goldar/Sybo-Room', date: 'Nov 30' },
                    ]}
                />
                <Overview />
            </main>
        </div>
    );
};
