import { Avatar } from './avatar/avatar';
import styles from './sidebar.module.scss';
import type React from 'react';
import type { ApiUser } from '../../../shared/model/api-user';
import { LatestActivity } from './latest-activity/latest-activity';
import { folderIcon } from './latest-activity/svg/folder';
import { milestoneIcon } from './latest-activity/svg/milestone';
import { uploadIcon } from './latest-activity/svg/upload';
import { documentIcon } from './latest-activity/svg/document';

export interface SidebarProps {
    className?: string;
    user?: ApiUser;
}

export const Sidebar: React.FC<SidebarProps> = ({ className, user }) => {
    const avatar =
        user?.avatar || 'https://t4.ftcdn.net/jpg/03/32/59/65/240_F_332596535_lAdLhf6KzbW6PWXBWeIFTovTii1drkbT.jpg';
    return (
        <aside className={`${styles.root} ${className || ''}`}>
            <Avatar url={avatar} username={user?.username} name={user?.name} />

            <LatestActivity
                children={[
                    { icon: folderIcon, action: 'Added new  project', commit: 'Goldar/Sybo-Room', date: 'Dec 29' },
                    { icon: folderIcon, action: 'Added new  project', commit: 'Goldar/Sybo-Room', date: 'Dec 27' },
                    { icon: milestoneIcon, action: 'Badge', commit: 'Goldar/Sybo-Room', date: 'Dec 25' },
                    { icon: uploadIcon, action: 'Upload something', commit: 'Goldar/Sybo-Room', date: 'Dec 18' },
                    { icon: documentIcon, action: 'Updated documentation', commit: 'Goldar/Sybo-Room', date: 'Dec 12' },
                    { icon: folderIcon, action: 'Added new  project', commit: 'Goldar/Sybo-Room', date: 'Nov 30' },
                ]}
            />

            {/* <Follow />

            <Bio bio={user?.bio} />

            <Following followers={user?.followers} following={user?.following} />

            <UserInfo
                organization={user?.organization}
                location={user?.location}
                email={user?.email}
                twitter={user?.twitter}
                url={user?.url}
            />*/}
        </aside>
    );
};
