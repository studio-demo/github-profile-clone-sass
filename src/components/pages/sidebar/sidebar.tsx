import { Avatar } from './avatar/avatar';
import styles from './sidebar.module.scss';
import type React from 'react';
import type { ApiUser } from '../../../shared/model/api-user';
import { UserInfo } from './user-info/user-info';
import { Follow } from './follow/follow';
import { Bio } from './bio/bio';
import { Following } from './following/following';

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

            <Follow />

            <Bio bio={user?.bio} />

            <Following followers={user?.followers} following={user?.following} />

            <UserInfo
                organization={user?.organization}
                location={user?.location}
                email={user?.email}
                twitter={user?.twitter}
                url={user?.url}
            />
        </aside>
    );
};
