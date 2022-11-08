import { Link } from '../../shared/link/link';
import { Avatar } from './avatar/avatar';
import { Bio } from './bio/bio';
import { Follow } from './follow/follow';
import { Following } from './following/following';
import { Organizations } from './organizations/organizations';
import { SidebarBlock } from './sidebar-block/sidebar-block';
import styles from './sidebar.module.scss';
import { UserInfo } from './user-info/user-info';
import type React from 'react';
import type { ApiUser } from '../../../shared/model/api-user';

export interface SidebarProps {
    className?: string;
    user?: ApiUser;
}

export const Sidebar: React.FC<SidebarProps> = ({ className, user }) => {
    const avatar = user?.avatar || 'https://github.com/identicons/john-doe.png';
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

            {user?.organizations?.length ? (
                <SidebarBlock label="Organizations">
                    <Organizations organizations={user?.organizations} />
                </SidebarBlock>
            ) : null}

            <Link url="#" mute>
                Block or Report
            </Link>
        </aside>
    );
};
